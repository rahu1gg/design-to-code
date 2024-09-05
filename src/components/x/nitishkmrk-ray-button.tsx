import { Plus } from 'lucide-react';

export function NitishkmrkRayButton() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div>
        <div className='overflow-hidden w-max'>
          <button
            className='group/button relative h-11 border-none inline-flex items-center justify-center gap-1.5 px-6 font-medium rounded-full bg-primary text-primary-foreground'
            type='button'
          >
            <div className='absolute -left-[120px] -top-1 h-[calc(100%_+_6px)] flex flex-row-reverse items-stretch justify-center gap-3.5 pointer-events-none group-hover/button:animate-rays'>
              <span className='w-5 -skew-x-[30deg] bg-white' />
              <span className='w-1 -skew-x-[30deg] bg-white' />
              <span className='w-3.5 -skew-x-[30deg] bg-white' />
              <span className='w-1 -skew-x-[30deg] bg-white' />
              <span className='w-2.5 -skew-x-[30deg] bg-white' />
            </div>
            <Plus className='group-hover/button:scale-125 transition-transform duration-300' size={20} strokeWidth={2.5} />
            <span>Add Cash</span>
          </button>
        </div>
      </div>
    </div>
  );
}
