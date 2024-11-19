import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!) 

export async function POST(request: Request) {
  try {
    const { nome, email, numero } = await request.json()

    let existingUser = await prisma.user.findFirst({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email já cadastrado' }, { status: 409 })
    }

    existingUser = await prisma.user.findFirst({
      where: { celular: numero },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Número já cadastrado' }, { status: 409 })
    }

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
        celular: numero
      },
    })

    const html_content = `
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="background-color: #f4f4f4; padding: 20px;">
                <h2 style="color: #4CAF50;">Bem-vindo(a), ${nome}!</h2>
                <p>Estamos muito felizes por ter você conosco.</p>
                <p>Se precisar de alguma coisa, estamos à disposição!</p>
                <p style="margin-top: 20px;">Atenciosamente,</p>
                <p style="font-weight: bold;">Equipe Kresaut</p>
            </div>
        </body>
    </html>
    `

    // Enviando o e-mail de boas-vindas 
    const msg = {
      to: email,
      from: process.env.SENDER_EMAIL!, 
      subject: 'Bem-vindo(a) à Kresaut!',
      html: html_content, 
    }

    await sendgrid.send(msg)

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar o usuário:", error)
    return NextResponse.json({ error: 'Erro ao criar o usuário' }, { status: 500 })
  }
}
