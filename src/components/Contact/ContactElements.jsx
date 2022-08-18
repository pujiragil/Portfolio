export const ContactTitle = ({children}) => {
  return (
    <h1 className="text-primary text-3xl font-bold mb-3">{children}</h1>
  )
}

export const ContactDesc = ({children}) => {
  return (
    <p className="text-desc text-lg font-medium mb-10 md:w-3/5 lg:w-5/12">{children}</p>
  )
}