import Link from 'next/link';
import { clsx } from 'clsx';

import { Mail } from 'lucide-react';
import { Balancer } from 'react-wrap-balancer';

import { Button } from '~/components/ui/button';
import styles from '~/components/landing/waitlist/waitlist.module.css';

const Waitlist = () => {
  return (
    <section className={clsx(styles.backdrop, 'relative overflow-hidden')}>
      <div className="container relative grid grid-cols-1 items-center justify-center py-[64px] md:grid-cols-2">
        <div className="flex flex-col gap-8 pb-8 pt-48 sm:px-16 sm:pt-20 md:px-0 md:pb-0 md:pt-16">
          <h1 className="max-w-[13ch] text-4xl font-bold md:max-w-none">
            <Balancer>Be the First to Know</Balancer>
          </h1>
          <p className="leading-8 text-black/50 dark:text-white/50">
            <Balancer>
              We’re currently working hard to make TypeHero the perfect place for TypeScript
              enthusiasts and learners. If you believe TypeHero can help you become a better
              TypeScript developer in the future, consider joining our waitlist to get updates on our progress.
            </Balancer>
          </p>
        </div>
        <Button
          className="group relative w-fit overflow-hidden rounded-xl bg-gradient-to-bl from-indigo-400 via-blue-400 to-emerald-400 p-[2px] font-bold transition-all duration-300 hover:rounded-3xl active:rounded-xl active:duration-150 sm:mx-16 md:mx-auto md:mr-0 lg:mr-auto lg:scale-[1.5] lg:hover:scale-[1.6] lg:active:scale-[1.5]"
          asChild
        >
          <Link href="/waitlist">
            <span className="inline-flex h-full w-fit items-center gap-1 rounded-xl bg-white/90 px-4 py-2 text-black transition-all duration-300 group-hover:rounded-3xl group-hover:bg-white/0 group-hover:text-white dark:bg-black/80 dark:text-white group-hover:dark:bg-black/0 dark:group-hover:text-black">
              <Mail className="mr-1 h-4 w-4 stroke-[3]" />
              Join the Waitlist
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Waitlist;
