interface ButtonProps{
   className?:string;
   children:React.ReactNode;
   OnClick?: ()=> void;
}
export const Button = ({OnClick,children,className=""}: ButtonProps) => {
  return (
    <button onClick={OnClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer
                                        relative overflow-hidden border bg-violet-600 border-transparent ${className}`}>
      {children}
    </button>
  )
}
