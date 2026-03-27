import type { MediaType } from '../types/siteContent';

interface MediaBlockProps {
  mediaType: MediaType;
  mediaUrl: string;
  mediaAlt: string;
  large?: boolean;
}

export const MediaBlock = ({ mediaType, mediaUrl, mediaAlt, large = false }: MediaBlockProps) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-vertex-border bg-white shadow-sm ${
        large ? 'min-h-[340px] md:min-h-[520px]' : 'min-h-[300px] md:min-h-[400px]'
      }`}
    >
      {mediaType === 'video' ? (
        <video
          src={mediaUrl}
          controls
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={mediaUrl}
          alt={mediaAlt}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};
