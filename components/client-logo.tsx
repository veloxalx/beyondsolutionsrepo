interface ClientLogoProps {
  name: string
}

export default function ClientLogo({ name }: ClientLogoProps) {
  return (
    <div className="w-32 h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group">
      <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#F5A623]/30 transition-colors">
        <p className="text-white/80 font-medium group-hover:text-[#F5A623] transition-colors">{name}</p>
      </div>
    </div>
  )
}
