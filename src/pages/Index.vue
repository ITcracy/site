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
            <h3 class="text-xl font-medium text-center">
                A team specializing in automation using
                <br>
                Python and other sophisticated <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software"> <span class="text-ui-primary">Free and Open Source Softwares.</span> </a>
                <br>
                <strong class="text-ui-primary">Got a minute?</strong>
            </h3>

            <div class="flex justify-center mt-8">
                <g-link to="/about/"
                    class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
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
                <p class="font-bold  uppercase text-ui-primary">
                    <g-link to="/about/automation/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Automation
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>

                </p>
                <p class="text-lg text-center">
                    Spending too much time on repetitive task? Simple or complex.<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can AUTOMATE it.</span>
                </p>
            </div>

            <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
                <CodeIcon size="3x" class="mb-6 text-ui-primary" />
                <p class="font-bold tracking-wide uppercase text-ui-primary">
                    <g-link to="/about/apps-development/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Web App Development
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>
                </p>
                <p class="text-lg text-center">
                    Want beautiful, clean and fast web application for your work?
                    <span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can BUILD it.</span>
                </p>
            </div>

            <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
                <PenToolIcon size="3x" class="mb-6 text-ui-primary" />
                <p class="font-bold tracking-wide uppercase text-ui-primary">
                    <g-link to="/about/training/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Training
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>
                </p>
                <p class="text-lg text-center">
                    You and your team wants to learn Python or other technologies?<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can Teach it.</span>
                </p>
            </div>
        </div>

        <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>
        <h3 class="font-bold tracking-wide uppercase text-center lg:text-3xl">
            <u class="text-ui-primary">Our team</u>
        </h3>

        <div class="flex justify-center flex-wrap">
            <div class="w-48 m-4 mx-auto py-2 bg-blue shadow-lg">
                <img class="mx-auto rounded-full" src="../assets/navin.png" alt="Navin Karkera, Python Programmer" />
                <u>
                    <p class="mx-2 mt-2 text-center text-lg text-ui-primary font-semibold">Navin Karkera</p>
                </u>
                <div class="flex justify-center px-2 sm:px-4">

                    <a href="https://github.com/navinkarkera/" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Github" name="Github">
                        <GithubIcon size="1.5x" />
                    </a>
                    <a href="https://gitlab.com/navinkarkera" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Gitlab" name="Gitlab">
                        <GitlabIcon size="1.5x" />
                    </a>
                    <a href="https://www.linkedin.com/in/navin-karkera-407957a0/" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Gitlab" name="Gitlab">
                        <LinkedinIcon size="1.5x" />
                    </a>
                </div>

            </div>

            <div class="w-48 m-4 mx-auto py-2 bg-blue shadow-lg">
                <img class="mx-auto rounded-full" src="../assets/ishan.jpg" alt="Ishan Masdekar, Python Programmer" />
                <u>
                    <p class="mx-2 mt-2 text-center text-lg text-ui-primary font-semibold">Ishan Masdekar</p>
                </u>
                <div class="flex justify-center px-2 sm:px-4">

                    <a href="https://github.com/imasdekar" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Github" name="Github">
                        <GithubIcon size="1.5x" />
                    </a>
                    <a href="https://gitlab.com/imasdekar" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Gitlab" name="Gitlab">
                        <GitlabIcon size="1.5x" />
                    </a>
                    <a href="https://in.linkedin.com/in/ishan-masdekar-57443898" class="sm:ml-3" target="_blank" rel="noopener noreferrer" title="Gitlab" name="Gitlab">
                        <LinkedinIcon size="1.5x" />
                    </a>
                </div>
            </div>
        </div>
        <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>
        <h3 class="font-bold tracking-wide uppercase text-center lg:text-3xl">
            <u class="text-ui-primary">What people say about us</u>
        </h3>
        <div class="flex justify-center flex-wrap">
            <Testimonials v-for="client in clients" :key="`${client}`" :clientName="client.clientName" :companyName="client.companyName" :clientPic="getImgUrl(client.clientPic)" :testimonialText="client.testimonialText"
                :clientUrl="client.clientUrl" />
        </div>
    </div>
</Layout>
</template>

<script>

import Logo from '@/components/Logo'
import Testimonials from '@/components/Testimonials'
import {
    ArrowRightCircleIcon,
    BarChart2Icon,
    CodeIcon,
    PenToolIcon,
    MailIcon,
    PhoneCallIcon,
    GithubIcon,
    GitlabIcon,
    LinkedinIcon
} from 'vue-feather-icons'

export default {
    data() {
        return {
            slidePerPageCustom: [
                [200, 1],
                [1199, 2]
            ],
            clients: [{
                    clientName: "Jeremy Ravenel",
                    companyName: "CashStory",
                    clientPic: "superman.svg",
                    testimonialText: "Professional yet friendly with abundance of knowledge when it comes to working on projects for Automation & Machine Learning.",
                    clientUrl: "https://cashstory.com/"
                },
                {
                    clientName: "Deepali Vandana",
                    companyName: "Urja",
                    clientPic: "superwoman.svg",
                    testimonialText: "If you are an NGO then they are the recommended ones to go for all your IT needs. Helpful and punctual.",
                    clientUrl: "https://www.urjatrust.org/",
                },
                {
                    clientName: "Chandan Kumar",
                    companyName: "Working Peoples' Charter",
                    clientPic: "superman.svg",
                    testimonialText: "Always ready to go out of the way to help us with building a strong web foundation for our organization.",
                    clientUrl: "http://workingpeoplescharter.in/",
                }
            ]
        }
    },
    components: {
        Logo,
        ArrowRightCircleIcon,
        BarChart2Icon,
        CodeIcon,
        PenToolIcon,
        CodeIcon,
        MailIcon,
        PhoneCallIcon,
        GithubIcon,
        GitlabIcon,
        LinkedinIcon,
        Testimonials,

    },

    metaInfo() {
        const title = 'Automation for everyone'
        const description = 'Process automation, Website development, Web Application, Custom software, Training.'

        return {
            title: title,
            meta: [{
                    name: 'description',
                    content: description
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: title
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: description
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: description
                }
            ]
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic)
        }

    }
}
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
