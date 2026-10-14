import type { ImageMetadata } from 'astro';
import baking from '../assets/baking.jpg';
import raspi from '../assets/raspi.png';
import skier from '../assets/skier.jpg';
import snowfallScreenshot from '../assets/snowfall_screenshot.jpg';
import twilightStruggle from '../assets/twilight_struggle.jpg';
import mountainRiver from '../assets/mountain_river.jpg';

export interface Project {
  title: string;
  summary: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  tags: string[];
  code?: string;
  live?: string;
  featured?: boolean;
}

// To add a project: import its image above and add an entry here.
export const projects: Project[] = [
  {
    title: 'FlourGenius',
    summary: 'Convert cooking and baking ingredients from volume to weight.',
    description:
      'Calculator for determining the weight of common cooking and baking ingredients from their volume, for more accurate recipes. Django back end with a simple Bootstrap front end.',
    image: baking,
    imageAlt: 'Baking ingredients on a kitchen counter',
    tags: ['Python', 'Django', 'Bootstrap'],
    live: 'https://flourgenius.com/',
    featured: true,
  },
  {
    title: 'Snowfall API',
    summary: 'Snow and weather conditions for US and Canadian ski resorts.',
    description:
      'Scrapes the latest snow and weather conditions for ski resorts across the US and Canada using Beautiful Soup, and serves them from a small Flask API at /snow_report/[resort name].',
    image: skier,
    imageAlt: 'A skier on a snowy slope',
    tags: ['Python', 'Flask', 'Beautiful Soup'],
    code: 'https://github.com/lukechar/snowfall_api/',
    featured: true,
  },
  {
    title: 'Snowfall App',
    summary: 'Mobile app for ski area snowfall reports and forecasts.',
    description:
      'A phone app that consumes the Snowfall API to show snowfall reports and forecasts for ski areas. Built with Flutter.',
    image: snowfallScreenshot,
    imageAlt: 'Screenshot of the Snowfall app',
    tags: ['Flutter', 'Dart'],
    code: 'https://github.com/lukechar/snowfall/',
    featured: true,
  },
  {
    title: 'Pi Video Stream',
    summary: 'Live video streaming from any Raspberry Pi camera.',
    description:
      'A server (stream.py) that serves live frames from a PiCamera over HTTP on any Raspberry Pi, and a PyQt client (streamView.py) for connecting to and viewing the stream.',
    image: raspi,
    imageAlt: 'A Raspberry Pi board',
    tags: ['Python', 'Raspberry Pi', 'PyQt'],
    code: 'https://github.com/lukechar/Pi-Video-Stream',
  },
  {
    title: 'Twilight Struggle Scorer',
    summary: 'Computer vision scoring for the Twilight Struggle board game.',
    description:
      'Uses OpenCV to process a photo of a Twilight Struggle game board and report the current score for every region. Still a work in progress; suggestions are welcome.',
    image: twilightStruggle,
    imageAlt: 'A Twilight Struggle game board',
    tags: ['Python', 'OpenCV'],
    code: 'https://github.com/lukechar/Twilight-Struggle-Scorer/',
  },
  {
    title: 'This Website',
    summary: 'The site you are looking at, built with Astro.',
    description:
      'A static site built with Astro and hosted on AWS Amplify. Licensed under the GPLv3, so feel free to use it as a template. Attribution or a link back is appreciated but not required.',
    image: mountainRiver,
    imageAlt: 'A mountain river',
    tags: ['Astro', 'AWS', 'CSS'],
    code: 'https://github.com/lukechar/personal-website/',
  },
];
