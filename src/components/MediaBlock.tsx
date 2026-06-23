import type { MediaType } from '../types/siteContent';

interface MediaBlockProps {
  mediaType: MediaType;
  mediaUrl: string;
  mediaAlt: string;
  large?: boolean;
}

export const MediaBlock = ({ mediaType, mediaUrl, mediaAlt, large = false }: MediaBlockProps) => {
  const heightClass = large ? 'h-[380px] md:h-[460px]' : 'h-[340px] md:h-[400px]';

  if (mediaUrl) {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-vertex-border shadow-soft ${heightClass}`}
      >
        {mediaType === 'video' ? (
          <video src={mediaUrl} className="h-full w-full object-cover" controls />
        ) : (
          <img src={mediaUrl} alt={mediaAlt} className="h-full w-full object-cover" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-vertex-border bg-white shadow-soft ${heightClass}`}
    >
      <div className="flex h-full items-center justify-center p-8 text-center">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-vertex-primary">
            {mediaType === 'video' ? 'Video Placeholder' : 'Image Placeholder'}
          </div>
          <div className="text-lg font-medium text-vertex-text">{mediaAlt}</div>
        </div>
      </div>
    </div>
  );
};
