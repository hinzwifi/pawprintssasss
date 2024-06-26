import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          PawPrints : Your Comprehensive Pet Database for
          all your needs
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          PawPet App ensures you have all the
          information you need during emergencies and
          routine check-ups, seamlessly linked to past
          records and solutions.
        </Typography>
        <Link href="https://hinzwifi.xyz" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/Cartoon-Pet-Wallpaper-2349015487.jpeg"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Unlock the Ultimate Pet Care Experience
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Immediate Solutions, Zero Stress"
              description="Resolve emergencies fast. Access your pet's full medical history instantly and save valuable time."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Universally compatible"
              description="Compatible with veterinary software, alerts, and more. Works with PagerDuty, Jira, Slack, and custom systems."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure for your org"
              description="Your pet’s data is safeguarded with the highest security standards, ensuring complete confidentiality."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Effortless Setup, No Coding Required
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Effortlessly create a comprehensive profile for
            your pet, including medical history and
            treatments. Seamlessly link past incidents to
            new ones, finding solutions instantly. All
            accessible directly through our website for
            easy, on-the-go management.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/cute-cat-talk-on-video-call-with-cats-on-computer-pet-have-webcam-conversation-on-laptop-with-kittens-technology-concept-illustration-vector-1605458815.jpg"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Download Now
          </Typography>
          <div></div>
          <Link href="https://hinzwifi.xyz" target="_blank">
            <Button size="lg" variant="ghost">
              {`Click Here`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
