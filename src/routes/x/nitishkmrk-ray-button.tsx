import { NitishkmrkRayButton } from '@/components/x/nitishkmrk-ray-button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/x/nitishkmrk-ray-button')({
  component: Page,
});

function Page() {
  return (
    <div>
      <NitishkmrkRayButton />
    </div>
  );
}
