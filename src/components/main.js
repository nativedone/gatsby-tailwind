import React from "react"
import tw from "tailwind.macro"

const Container = tw.div`
    bg-gray-500 text-xl w-1/3
`

const Main = ({ children }) => <Container>{children}</Container>

export default Main
