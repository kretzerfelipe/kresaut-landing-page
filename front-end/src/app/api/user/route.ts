import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { nome, email } = await request.json()

    const existingUser = await prisma.user.findFirst({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email já cadastrado' }, { status: 409 })
    }

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
      },
    })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar o usuário:", error)
    return NextResponse.json({ error: 'Erro ao criar o usuário' }, { status: 500 })
  }
}
