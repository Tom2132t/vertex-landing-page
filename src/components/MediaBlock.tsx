import type { MediaType } from '../types/siteContent';

interface MediaBlockProps {
  mediaType: MediaType;
  mediaUrl: string;
  mediaAlt: string;
  large?: boolean;
}

export const MediaBlock = ({ mediaType, mediaUrl, mediaAlt, large = false }: MediaBlockProps) => {
  const sizeClass = large ? 'min-h-[340px] md:min-h-[520px]' : 'min-h-[300px] md:min-h-[400px]';

  if (mediaUrl) {
    return (
      <div className={`overflow-hidden rounded-2xl border border-vertex-border shadow-sm ${sizeClass}`}>
        {mediaType === 'video' ? (
          <video
            src={mediaUrl}
            className="h-full w-full min-h-[inherit] object-cover"
            controls
          />
        ) : (
          <img
            src={mediaUrl}
            alt={mediaAlt}
            className="h-full w-full min-h-[inherit] object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-vertex-border bg-white shadow-sm ${sizeClass}`}
    >
      <div className="flex h-full min-h-[inherit] items-center justify-center bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfc_100%)] p-8 text-center">
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
