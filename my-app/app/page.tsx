
// import Button from "./Button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {


  return (

    <main>
      <div>
        <h1 className="text-red-600 text-2xl font-extrabold">Panaverse</h1>
        {/* <Button text={"Enroll Now"}/>
   <Button text={"Click Now"}/> */}
        {/* 
<Button><li>Cick me</li></Button> */}

        <Link href="/about">About</Link>
        <Image src="../next.svg" alt="Home" height="100" width="100" />
      </div>
    </main>

  )
}
