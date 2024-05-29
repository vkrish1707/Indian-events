import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Experience the Thrill of India vs Pakistan</h1>
            <p className="p-regular-20 md:p-regular-24">Join us for the ultimate cricket showdown between India and Pakistan! Witness the excitement live on a 20-foot 4K screen with a live screening on a 4K projector in Scarborough. Enjoy delicious food, and connect with fellow cricket enthusiasts. Don’t miss out on this electrifying event with complimentary alcoholic and non-alcoholic beverages, and snacks!”</p>

            <h2 className="h1-bold">Now at Scarborough</h2>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/events/6657505a010587c3105ec5b3">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/event-home.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Promotional Videos <br /> Food and Alcohol combo offers coming soon</h2>

        {/* <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>
    </>
  )
}
