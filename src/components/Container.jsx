
const Conatiner = (props) => {
    const {children} = props
  return (
    <div className="w-[80%] my-5 mx-auto bg-zinc-300 py-4 rounded " >
        {children}
    </div>
  )
}

export default Conatiner