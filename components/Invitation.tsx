import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {
  BaseText,
  H1Text,
  H2Text,
  H3Text,
  SectionText,
} from 'components/common/Text'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { Modal } from 'components/common/Modal'
import { Contact } from 'components/Contact'
import { Button } from 'components/common/Button'
import { ParentsName, PhoneNumber } from 'global/type'

export const Invitation: React.FC<{
  groomName: string
  grideName: string
  message: string
  image: string
  groomParentsName: ParentsName
  grideParentsName: ParentsName
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({
  groomName,
  grideName,
  message,
  image,
  groomParentsName,
  grideParentsName,
  groomPhoneNumber,
  gridePhoneNumber,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Column style={{ width: '100%' }}>
      <Column gap={60}>
        <Column gap={10}>
          <SectionText>Invitation</SectionText>
          <Row gap={10} style={{ justifyContent: 'center' }}>
            <H2Text>{groomName}</H2Text>
            <H1Text>&</H1Text>
            <H1Text>{grideName}</H1Text>
          </Row>
        </Column>
        <Column gap={40}>
          <Column style={{ alignItems: 'center' }}>
            <BackgroundImage
              src='/icon/leaf.svg'
              style={{ width: 24, height: 35 }}
            />
          </Column>
          <MsgText>{message}</MsgText>
          <Image
            src={image}
            alt='invitation-image'
            width={353}
            height={441}
            objectFit='cover'
            layout='responsive'
            priority
          />
          <Column gap={10} style={{ alignItems: 'center' }}>
            <RowCenter>
              <RowCenter gap={4}>
                <RowCenter>
                  <NameText>{groomParentsName.father}</NameText> {' ‧ '}
                  <NameText>{groomParentsName.mother}</NameText>
                </RowCenter>
                <DarkGrayText>의</DarkGrayText>
              </RowCenter>
              <Row>
                <MaleText>아들</MaleText>
              </Row>
              <RowCenter gap={4}>
                <NameText>{groomName}</NameText>
                <DarkGrayText>입니다.</DarkGrayText>
              </RowCenter>
            </RowCenter>
            <RowCenter>
              <RowCenter gap={4}>
                <RowCenter>
                  <NameText>{grideParentsName.father}</NameText> {' ‧ '}
                  <NameText>{grideParentsName.mother}</NameText>
                </RowCenter>
                <DarkGrayText>의</DarkGrayText>
              </RowCenter>
              <Row>
                <MaleText>딸</MaleText>
              </Row>
              <RowCenter gap={4}>
                <NameText>{grideName}</NameText>
                <DarkGrayText>입니다.</DarkGrayText>
              </RowCenter>
            </RowCenter>
          </Column>
          <Button onClick={() => setIsOpen(true)}>연락하기</Button>
        </Column>
      </Column>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Contact
          groomPhoneNumber={groomPhoneNumber}
          gridePhoneNumber={gridePhoneNumber}
        />
      </Modal>
    </Column>
  )
}

const RowCenter = styled(Row)`
  align-items: center;
`

const DarkGrayText = styled(BaseText)`
  color: ${(p) => p.theme.color.darkGray};
`

const MaleText = styled(DarkGrayText)`
  width: 40px;
`

const NameText = styled(H3Text)`
  min-width: 70px;
`

const MsgText = styled(DarkGrayText)`
  line-height: 32px;
`
