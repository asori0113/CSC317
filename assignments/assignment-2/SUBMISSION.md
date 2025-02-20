#CSC317 Assignment 2 Submission

**Name: **Aljhay Soriano
**Student ID: **920642161
**Github Username: **asori0113
**Assignment Number: **2

##  HTML Personal Portfolio Website Assignment

### Description:
This is a portfolio project meant for me to get used to HTML semantics as well as structure. It is a website about me, who I am and what I do. The main content being my experiences as a computer science major.



## Approach / What I Did:
For my approach on things I started out with doing the project in order from parts 1 - 4 then after that, I structured it to fit my style sectioning it in order like a resume starting off about me and who I am and seperating the main content into one code block. Then lastly I looked for content I can grab through web scraping such as mp3 audios as well as photos and implemented that into my website.



## Code Explanation:
Used viewoport to implement different device usability.
Has a description for what this code is for as well as keywords for what it is. 
it also has a icon that accesses from images and imports it into website icon.
<!--Head-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal portfolio of Aljhay Soriano">
    <meta name="keywords" content="portfolio, web developement"> 
    <title>Aljhay Soriano - Portfolio</title>
    <link rel="icon" type="image/icon" href="/images/icon.jpeg">
</head>


Image imports from image folder.
<!--About Me-->
<h2>--About Me--</h2>
    <h3>School Name: SFSU (San Francisco State University)</h3>
    <img src="images/SFSULogo.jpeg" alt="SFSU Logo" width="300" height="400">
    <h3>Hometown: Daly City, Ca.</h3>
    <img src="images/DalyCity.jpeg" alt="Hometown" width="300" height="400">


Hyperlinks using anchor tags and unordered lists to my accounts if jobs, students or professors want to see my experience. as well as id for referencing at the end if they want to look back
<!--Profile Links-->
<h3 id="profilelinks">--Profile Links--</h3>
    <nav>
        <ul>
            <li><a href="https://github.com/asori0113">Github</a></li>
            <li><a href="https://leetcode.com/u/aljhayjhassoriano/">Leetcode Profile</a></li>
            <li><a href="https://www.instagram.com/alj_sori/">Instagram</a></li>
            <li><a href="https://bento.me/aljhay">Bento</a></li>
        </ul>               
    </nav>   


My degrees and certifications using an unordered list
<!--Degrees/Certification with unordered list-->
<h4>Degrees/Certifcations:</h4>
<ul>
    <li>Present - San Francisco State University</li>
    <li>Associates Degree - College of San Mateo</li>
</ul>


Creats a table with course and acheivment headers as well as data below it courses being learning python and certification being python certification
<!--Courses/Acheivements with tables-->
<h4>Courses/Acheivements:</h4>
<table>
    <tr>
        <th>Courses</th>
        <th>Acheivements</th>
    </tr>
    <tr>
        <td>Learning Python</td>
        <td>Python Certifcation</td>
    </tr>
</table>


Uses ordered lists to worder my work experience as well as tables to capture specific data like position date and description.
<!--Experience-->
<ol>
    <li>
        <h4>Teaspoon:</h4>
        <table>
            <tr>
                <th>Position</th>
                <th>Date</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Shift Leader</td>
                <td>2/2022</td>
                <td>Managing the Store</td>
            </tr>
        </table>
    </li>
    <li>
        <h4>Lillikoi:</h4>
        <table>
            <tr>
                <th>Position</th>
                <th>Date</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Shift Leader</td>
                <td>4/2024</td>
                <td>Managing the Store</td>
            </tr>
        </table>
    </li>
</ol>


Uses proper semantics to show what projects I've done and currently doing.
<!--Project Section-->
<h3 id="projects">--Projects--</h3>
    <article>
        <h4>HTML PORTFOLIO WEBSITE</h4>
        <p>Website created for personal website using CSS, HTML and JavaScript</p>
    </article>
    <article>
        <h4>AR REALITY USING OPENCV</h4>
        <p>Uses homography for a 2D scan of a surface which then processes exclusive features of scan and creates a 3D image above it</p>
    </article>


Uses the sections I've identified and huses an anchortag within the page to automatically scroll to the section.
<!--References-->
<h3>Reference:</h3>
            <ol>
                <li><a href="#audio">--Audio--</a></li>
                <li><a href="#front">--Top Page--</a></li>
                <li><a href="#contactinformation">--Contact Information--</a></li>
                <li><a href="#profilelinks">--Profile Link--</a></li>
                <li><a href="#bio">--Bio--</a></li>
                <li><a href="#education">--Education--</a></li>
                <li><a href="#experience">--Experience--</a></li>
                <li><a href="#extracurricular">--ExtraCurricular--</a></li>
                <li><a href="#projects">--Projects--</a></li>
                <li><a href="#contact">--Contact Form--</a></li>
            </ol>

