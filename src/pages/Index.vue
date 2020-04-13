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
                <h3 class="font-bold  uppercase text-ui-primary">
                    <g-link to="/about/automation/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Automation
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>

                </h3>
                <p class="text-lg text-center">
                    Spending too much time on repetative task? Simple or complex.<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can AUTOMATE it.</span>
                </p>
            </div>

            <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
                <CodeIcon size="3x" class="mb-6 text-ui-primary" />
                <h3 class="font-bold tracking-wide uppercase text-ui-primary">
                    <g-link to="/about/apps-development/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Application Development
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>
                </h3>
                <p class="text-lg text-center">
                    Want beautiful, clean and fast web application for your work?
                    <span class="border-b border-dashed border-ui-primary text-ui-primary"><br>We can BUILD it.</span>
                </p>
            </div>

            <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
                <PenToolIcon size="3x" class="mb-6 text-ui-primary" />
                <h3 class="font-bold tracking-wide uppercase text-ui-primary">
                    <g-link to="/about/training/"
                        class="flex items-center px-2 py-1 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Training
                        <ArrowRightCircleIcon class="ml-4" size="1x" />
                    </g-link>
                </h3>
                <p class="text-lg text-center">
                    Want us to train your team in Python or other technologies?<span class="border-b border-dashed border-ui-primary text-ui-primary"><br>Contact us.</span>
                </p>
            </div>
        </div>

        <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>
        <h3 class="font-bold tracking-wide uppercase text-center lg:text-3xl">
            <u class="text-ui-primary">Our team</u>
        </h3>

        <div class="flex justify-center flex-wrap">
            <div class="w-48 m-4 mx-auto py-2 bg-blue shadow-lg">
                <img class="mx-auto rounded-full" src="../assets/navin.png" />
                <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Navin Karkera</p>
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
                <img class="mx-auto rounded-full" src="../assets/ishan.jpg" />
                <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Ishan Masdekar</p>
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
        <div class="flex justify-center p-2 sm:px-4 flex-wrap">
            <Testinomials v-for="client in clients" :clientName="client.clientName" :companyName="client.companyName" :clientPic="getImgUrl(client.clientPic)" :testinomialText="client.testinomialText" :clientUrl="client.clientUrl" />
        </div>
    </div>
</Layout>
</template>

<script>
import Logo from '@/components/Logo'
import Testinomials from '@/components/Testinomials'
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
            clients: [{
                    clientName: "Jeremy Ravenel",
                    companyName: "CashStory",
                    clientPic: "superman.svg",
                    testinomialText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
                    clientUrl: "https://cashstory.com/"
                },
                {
                    clientName: "Deepali Vandana",
                    companyName: "Urja",
                    clientPic: "superwoman.svg",
                    testinomialText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
                },
                {
                    clientName: "Chandan Kumar",
                    companyName: "Working Peoples' Charter",
                    clientPic: "superman.svg",
                    testinomialText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
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
        Testinomials
    },

    metaInfo() {
        const title = 'Automation for everyone'
        const description = 'Process automation, Website development, Web Application, Custom software.'

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
