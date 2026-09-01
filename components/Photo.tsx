import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  plate: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic dimensions
 * and a fixed aspect box — no image can shift the layout as it loads.
 *
 * Photographs are mounted, not styled: a hairline frame and a caption set as a
 * plate note underneath. No rounding, no shadow, no overlay.
 */
export function Photo({
  image,
  ratio = 'plate',
  priority = false,
  sizes = '100vw',
  plate,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  /** Plate number shown with the caption, e.g. "Pl. 3". */
  plate?: string;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div className={cn('relative overflow-hidden border border-rule-strong bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption || plate ? (
        <figcaption className="mt-2 flex gap-3 text-xs text-ink-faint">
          {plate ? <span className="label shrink-0">{plate}</span> : null}
          {image.caption ? <span>{image.caption}</span> : null}
          {image.credit ? <span className="ml-auto shrink-0">{image.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
