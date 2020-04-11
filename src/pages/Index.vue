<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <!-- <Logo :width="80" /> -->
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            ITcracy
          </h2>
        </div>
        <h3 class="text-2xl text-center lg:text-3xl">
          Automation for everyone
        </h3>
        <p class="text-xl font-medium text-center">
          A team specializing in automation using Python and other sophisticated technologies
          <br>
          <strong class="text-ui-primary">Got a minute?</strong>
        </p>

        <div class="flex justify-center mt-8">
          <g-link
            to="/about/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Check out now
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Fast, Easy and <span class="border-b border-dashed border-ui-primary text-ui-primary">Cost Effective</span>.
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <BarChart2Icon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Automation
          </h3>
          <p class="text-lg text-left">
            Spending too much time on repetative task? Simple or complex.<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can AUTOMATE it.</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <CodeIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Application Development
          </h3>
          <p class="text-lg text-left">
            Get beautiful, clean and fast web application for your work
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <PenToolIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Training
          </h3>
          <p class="text-lg text-left">
            Want us to train your team in Python?<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>Contact us.</span>
          </p>
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <h3 class="font-bold tracking-wide uppercase text-center lg:text-3xl">
        Contact us:
      </h3>
      <div class="flex flex-wrap items-center">
        <div class="flex flex-col items-center w-full px-6 mb-8 text-center md:w-1/2">
          <MailIcon size="2x" class="mb-6 text-ui-primary" />
          <a href="mailto:itcracy@disroot.org" class="text-ui-primary">itcracy@disroot.org</a>
        </div>
        <div class="flex flex-col items-center w-full px-6 mb-8 text-center md:w-1/2">
          <PhoneCallIcon size="2x" class="mb-6 text-ui-primary" />
          <div class="flex flex-wrap items-center">
            <a href="tel:+918655861306" class="text-ui-primary">Navin</a> &nbsp|&nbsp
            <a href="tel:+918082686033" class="text-ui-primary">Ishan</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, BarChart2Icon, CodeIcon, PenToolIcon, MailIcon, PhoneCallIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    BarChart2Icon,
    CodeIcon,
    PenToolIcon,
    CodeIcon,
    MailIcon,
    PhoneCallIcon
  },

  metaInfo() {
    const title = 'Automation for everyone';
    const description = 'Process automation, Website development, Web Application, Custom software.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
