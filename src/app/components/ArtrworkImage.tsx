import Image from "next/image"

type Props = {
  src: string
  alt: string
  title?: string
  subtitle?: string
  priority?: boolean
}

export default function ArtworkImage({
  src,
  alt,
  title,
  subtitle,
  priority = false,
}: Props) {
  return (
    <figure className="space-y-3">
      <div className="relative w-full overflow-hidden bg-neutral-100">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1600}
          priority={priority}
          className="h-auto w-full object-contain transition duration-500 hover:scale-[1.01]"
        />
      </div>

      {(title || subtitle) && (
        <figcaption className="text-sm text-gray-600">
          {title && <p className="font-medium italic">{title}</p>}
          {subtitle && <p>{subtitle}</p>}
        </figcaption>
      )}
    </figure>
  )
}
