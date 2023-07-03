import React from 'react';

export type CardProps = {
  from?: Date;
  to?: Date;
  image?: string;
  title?: string;
  location?: string;
  description?: string;
  tags?: string[];
  href?: string;
  additionalLinks?: string[];
};

function Card(props?: CardProps) {
  const formatDate = (date: Date | undefined): string => {
    if (
      date?.getMonth() === new Date().getMonth() &&
      date?.getFullYear() === new Date().getFullYear()
    ) {
      return 'Present';
    }
    if (!date) {
      return 'Date not given';
    }

    const monthShort = date
      .toLocaleString('default', { month: 'long' })
      .substring(0, 3);
    const fullYear = date.getFullYear().toString();
    return `${monthShort} ${fullYear}`;
  };
  return (
    <>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-y-2 lg:-inset-x-2 lg:block lg:group-hover:bg-primary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header
          className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2'
          aria-label='2018 to Present'
        >
          {props?.image ? (
            <img
              className='max-h-48 rounded border-2 border-primary-200/10 transition group-hover:border-accent/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
              src={props.image}
            ></img>
          ) : (
            `${formatDate(props?.from)} - ${formatDate(props?.to)}`
          )}
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug'>
            <div>
              <a
                className='inline-flex items-baseline font-medium leading-tight group/link text-base'
                href={props?.href}
                target='_blank'
                rel='noreferrer'
                aria-label='Lead Engineer at Upstatement'
              >
                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                <span className='font-bold'>
                  {props?.title} {props?.location ? ' - ' : ''}
                  <span className='inline-block'>
                    {props?.location}
                    {props?.href ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    ) : (
                      <></>
                    )}
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className='mt-2 text-sm leading-normal'>{props?.description}</p>
          <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
            {props?.tags
              ? props?.tags.map((tag, index) => {
                  return (
                    <li key={tag + index.toString()} className='mr-1.5 mt-2'>
                      <div className='flex items-center rounded-full bg-primary/60 px-3 py-1 text-xs font-medium leading-5 text-white '>
                        {tag}
                      </div>
                    </li>
                  );
                })
              : ''}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
