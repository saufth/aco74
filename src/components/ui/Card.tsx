'use client'
import {
  Card as NextUICard,
  CardHeader as CardHeaderNextUI,
  CardBody as CardBodyNextUI,
  CardFooter as CardFooterNextUI,
  type CardProps,
  type CardFooterProps
} from '@nextui-org/react'
import { ComponentProps } from 'react'

export function Card (props: CardProps) {
  return (
    <NextUICard {...props} className='rounded' />
  )
}

export function CardHeader (props: ComponentProps<typeof CardHeaderNextUI>) {
  return (
    <CardHeaderNextUI {...props} className='rounded' />
  )
}

export function CardBody (props: ComponentProps<typeof CardBodyNextUI>) {
  return (
    <CardBodyNextUI {...props} className='rounded' />
  )
}

export function CardFooter (props: CardFooterProps) {
  return (
    <CardFooterNextUI {...props} className='rounded' />
  )
}
