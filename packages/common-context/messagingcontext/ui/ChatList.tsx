import * as React from 'react'
import { MainContainer } from '@lib/common-ui/primitives/AppView'
import { ui } from '@lib/common-ui'

interface ChatListProps {
  path?: string
}

// const { MainContainer } = AppView;
const { Heading1} = ui;

export default function ChatList(_props: ChatListProps) {
  return (
    <MainContainer>
      <Heading1>ChatList</Heading1>
    </MainContainer>
  )
}
