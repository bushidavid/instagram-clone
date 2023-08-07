import Image from "next/image";

export default function Header() {
  return (
    <div>
        {/* left */}
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image src={'/instagram_logo.png'} layout="fill" />
            </div>
            <div className="cursor-pointer h-10 w-10 relative lg:hidden inline-grid">
                <Image src={'/instagram_logo_small.png'} layout="fill" />
            </div>
        </div>
        {/* Middle */}

        {/* right */}
    </div>
  )
}
