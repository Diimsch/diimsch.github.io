import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { experiences } from './assets/experiences';
import { projects } from './assets/projects';
import ThemeBuilder from './components/ThemeBuilder';

function App() {
  return (
    <div className='bg-background'>
      <div className='bg-background drop-shadow-2xl min-h-screen max-w-screen-xl px-6 py-12 font-sans md:py-20 lg:px-24  mx-auto md:px-12 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header></Header>

          <main className='pt-24 lg:w-1/2 lg:py-24'>
            <section
              className='bg-background drop-shadow-xl p-2 rounded-xl mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24'
              id='about'
            >
              <p>
                Starting in 2014 during high school, I embarked on my coding
                journey, exploring the world of software development. Fascinated
                by the possibilities it offered, I continued my path and
                enrolled in college in 2018, pursuing a
                <a
                  className='font-bold text-primary'
                  href='https://www.hs-aalen.de/'
                >
                  {' '}
                  Bachelor's degree
                </a>
                <br />
                <br />
                Balancing my studies and passion for coding, I was fortunate to
                secure a position as an Intern at{' '}
                <a
                  className='font-bold text-primary'
                  href='https://www.c-com.net/en/home/'
                >
                  {' '}
                  c-Com{' '}
                </a>
                , allowing me to gain practical experience in the industry while
                still pursuing my education.
                <br />
                <br />I successfully completed my Bachelor's degree in 2022,
                equipped with both theoretical knowledge and practical
                experience, ready to embark on new professional opportunities
                and contribute to the ever-evolving world of software
                development
              </p>
            </section>
            <section
              className=' bg-background drop-shadow-xl p-2 gap-4 flex-col flex rounded-xl mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24'
              id='experience'
            >
              {experiences.map((exp, index) => (
                <Card key={exp.title + index.toString()} {...exp}></Card>
              ))}
            </section>
            <section
              className='bg-background drop-shadow-xl p-2 flex flex-col gap-4 rounded-xl mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24'
              id='projects'
            >
              {projects.map((exp, index) => (
                <Card key={exp.title + index.toString()} {...exp}></Card>
              ))}
            </section>
            <footer className='text-text/20 text-sm'>
              The layout and Design of this Website have been heavily inspired
              by
              <a className='font-bold' href='https://brittanychiang.com'>
                {' '}
                Brittanny Chiang
              </a>{' '}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
