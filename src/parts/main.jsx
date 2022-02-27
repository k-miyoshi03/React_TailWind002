import React from 'react';
import {Ul, Img, Atag, H1, H2, Li, Ptag, Dl, Dt, Dd, Label, Input, TextArea, Form, Div} from '../components/index';
import {Picture, Section} from './index';

const Main = (props) => {
  const media = [
    {
      media: '(min-width: 640px)',
      mediaSrc: './mainvisual-pc.jpg',
    }
    ]
  return (
    <React.Fragment>
      <Picture src={'./mainvisual-sp.jpg'} media={media}/>
      <Section id={'about'} className={'flex flex-col px-5 mt-20 text-sm sm:mx-auto sm:max-w-4xl'}>
        <H2 className={'font-bold text-3xl mb-10 text-center'}>
          {'About'}
        </H2>
        <Ul className={'mb-8'}>
          <Li className={'mb-8'}>
            {'Xxxxx Ashley'}
          </Li>
          <Li>
            {'2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan'}
          </Li>
          <Li>
            {'tel: 000-0000-0000'}
          </Li>
          <Li>
            {'url: www.xxxxxx.jp'}
          </Li>
          <Li>
            {'mail: xxx@xxxxxx.jp'}
          </Li>
        </Ul>
        <Ptag>
          {'プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'}
        </Ptag>
      </Section>
      <Section id={'works'} className={'flex flex-col items-center px-5 mt-20 text-sm sm:mx-auto sm:max-w-4xl'}>
        <H2 className={'font-bold text-3xl mb-10 text-center'}>
          {'Works'}
        </H2>
        <Ul className={'flex flex-col sm:flex-row sm:justify-between sm:flex-wrap'}>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works1.jpg'}></Img>
          </Li>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works2.jpg'}></Img>
          </Li>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works3.jpg'}></Img>
          </Li>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works4.jpg'}></Img>
          </Li>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works5.jpg'}></Img>
          </Li>
          <Li className={'mb-6 sm:w-1/3 sm:px-1'} >
            <Img src={'./works6.jpg'}></Img>
          </Li>
        </Ul>
      </Section>
      <Section id={'news'} className={'flex flex-col px-5 mt-20 text-base sm:mx-auto sm:max-w-4xl'}>
        <H2 className={'font-bold text-3xl mb-10 text-center'}>
          {'News'}
        </H2>
        <Dl className={'w-full'}>
          <Dt className={'border-t-2 px-4 pt-4'}>2020.XX.XX</Dt>
          <Dd className={'border-b-2 px-4 pb-4'} >デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。</Dd>
          <Dt className={'px-4 pt-4'}>2020.XX.XX</Dt>
          <Dd className={'border-b-2 px-4 pb-4'} >ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。</Dd>
          <Dt className={'px-4 pt-4'}>2019.XX.XX</Dt>
          <Dd className={'border-b-2 px-4 pb-4'} >【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト。</Dd>
          <Dt className={'px-4 pt-4'}>2019.XX.XX</Dt>
          <Dd className={'border-b-2 px-4 pb-4'} >デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。</Dd>
          <Dt className={'px-4 pt-4'}>2019.XX.XX</Dt>
          <Dd className={'border-b-2 px-4 pb-4'} >【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</Dd>
        </Dl>
      </Section>
      <Section id={'contact'} className={'flex flex-col px-5 mt-20 text-sm sm:mx-auto sm:max-w-4xl'}>
        <H2 className={'font-bold text-3xl mb-10 text-center'}>
          {'Contact'}
        </H2>
        <Form action={'#'} method={''} className={'w-full'}>
          <Dl className={'w-full'}>
            <Dt className={'px-4'}>
              <Label htmlFor={'name'}>NAME</Label>
            </Dt>
            <Dd className={'px-4 pb-4'} >
              <Input className={'w-full border border-slate-500 p-3'} type={'text'} id={'name'} name={'name'}></Input>
            </Dd>
            <Dt className={'px-4'}>
              <Label htmlFor={'email'}>E-mail</Label>
            </Dt>
            <Dd className={'px-4 pb-4'} >
              <Input className={'w-full border border-slate-500 p-3'} type={'text'} id={'email'} name={'email'}></Input>
            </Dd>
            <Dt className={'px-4'}>
              <Label htmlFor={'message'}>MESSAGE</Label>
            </Dt>
            <Dd className={'px-4 pb-4'} >
              <TextArea className={'w-full border border-slate-500 p-3 h-40'} type={'textarea'} id={'message'} name={'message'}></TextArea>
            </Dd>
          </Dl>
          <Div className={'text-center mb-20'}>
            <Input className={'w-52 bg-slate-800 p-4 text-white font-bold'} type={'submit'} value='送信'></Input>
          </Div>
        </Form>
      </Section>
    </React.Fragment>
  );
}

export default Main;