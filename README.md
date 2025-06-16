# HelpingHub – Volunteer Management Platform

Live Demo: https://assignment-11-category-10.web.app/

## Overview

HelpingHub is a web platform where users can create, manage, and join volunteer opportunities. Users can post volunteer needs, sign up for others’ posts, and manage their activities in a simple, organized way.

## Pages Overview

### Home Page

- Hero slider
- Featured data cards
- Impact area categories
- CountUp statistics
- Footer

### All Volunteer Need Posts

- Search functionality
- Volunteer posts displayed dynamically
- Footer

### Manage My Posts

- Two tabs: My Volunteer Need Posts & My Volunteer Request Posts
- Update and delete options
- View volunteer details
- Footer

## Routes

| Path                                                    | Access  | Description                   |
| ------------------------------------------------------- | ------- | ----------------------------- |
| /home                                                   | Public  | Homepage                      |
| /AllVolunteerNeedposts                                  | Public  | All volunteer posts           |
| /AddVolunteerNeedPost                                   | Private | Add a new post                |
| /AllVolunteerNeedposts/volunteerneedpostdetailspage/:id | Private | Post details and join option  |
| /ManageMyPosts                                          | Private | Manage own posts and requests |
| /Myvolunteerneedpost/update/:id                         | Private | Update a specific post        |
| /login                                                  | Public  | Login page                    |
| /signup                                                 | Public  | Signup page                   |
| \*                                                      | Public  | Error page                    |

Private routes require login via Firebase.

## Tech Stack

- React
- Tailwind CSS
- DaisyUI
- Firebase (Authentication and Hosting)
- Axios
- React Router
- Lottie, Swiper, SweetAlert2, React CountUp, React Tabs, React Spinners

## Features

- Create, read, update, delete volunteer posts
- Search and join volunteer opportunities
- Protected routes using Firebase Auth
- Fully responsive and mobile-friendly design
- Dark and light theme toggle
