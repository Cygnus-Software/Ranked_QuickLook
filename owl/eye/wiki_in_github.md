> ## MENU

- [Creating your wiki](#creating-your-wiki)
- [Adding content](#adding-content)
- [Adding pages](#adding-pages)
- [Syntax highlighting](#syntax-highlighting)
- [Adding or editing wiki pages](#adding-or-editing-wiki-pages)
  - [1. Adding wiki pages](#adding-wiki-pages)
  - [2. Editing wiki Pages](#editing-wiki-pages)
- [Adding or editing wiki pages locally](#adding-or-editing-wiki-pages-locally)
- [About wiki filenames](#about-wiki-filenames)
- [Bibliography](#bibliography)

> # Creating your wiki

    Every repository on GitHub comes with a wiki. After you’ve created a repository,
    you can set up the included wiki through the sidebar navigation. Starting your
    wiki is simply a matter of clicking the wiki button and creating your first page.

> ## ~ Adding content ~

    Wiki content is designed to be easily editable. You can add or change content on
    any wiki page by clicking the Edit button located in the upper right corner of
    each page. This opens up the wiki editor.

    Wiki pages can be written in any format supported by GitHub Markup. Using the
    drop-down menu in the editor, you can select the format of your wiki, and then
    use wiki toolbar to create and include content on a page. Wikis also give you
    the option of including a custom footer where you can list things like contact
    details or license information for your project.

    GitHub keeps track of changes made to each page in your wiki. Below a page
    title, you can see who made the most recent edits, in addition to the number
    of commits made to the page. Clicking on this information will take you to
    the full page history where you can compare revisions or see a detailed list
    of edits over time.

> ## ~ Adding pages ~

    You can add additional pages to your wiki by selecting New Page in the upper
    right corner. By default, each page you create is included automatically in
    your wiki’s sidebar and listed in alphabetical order.

    You can also add a custom sidebar to your wiki by clicking the Add custom sidebar
    link. Custom sidebar content can include text, images, and links.

    Note: The page called “Home” functions as the entrance page to your wiki.
    If it is missing, an automatically generated table of contents will be shown
    instead.

> ## ~ Syntax highlighting ~

    Wiki pages support automatic syntax highlighting of code for a wide range of
    languages by using the following syntax:

    The block must start with three backticks, optionally followed by the the name
    of the language that is contained by the block. See Pygments for the list of
    languages that can be syntax highlighted.

    The block contents should be indented at the same level as the opening backticks.
    The block must end with three backticks indented at the same level as the opening backticks.

> ## ~ Adding or editing wiki pages ~

    You can add and edit wiki pages directly on GitHub or locally using the command line.

    Wikis are available in public repositories with GitHub Free and GitHub Free for
    organizations, and in public and private repositories with GitHub Pro, GitHub
    Team, GitHub Enterprise Cloud and GitHub Enterprise Server.

> ### ~ Adding wiki pages ~

    1. On GitHub, navigate to the main page of the repository.
    2. Under your repository name, click Wiki.
    3. In the upper-right corner of the page, click New Page
    4. Optionally, to write in a format other than Markdown, use the Edit mode drop-down menu, and click a different format.
    5. Use the text editor to add your page's content.
    6. Type a commit message describing the new file you’re adding.
    7. To commit your changes to the wiki, click Save Page.

> ### ~ Editing wiki Pages ~

    1. On GitHub, navigate to the main page of the repository.
    2. Under your repository name, click
    3. Using the wiki sidebar, navigate to the page you want to change. In  the upper-right corner of the page, click Edit.
    4. Use the text editor edit the page's content.
    5. Type a commit message describing your changes.
    6. To commit your changes to the wiki, click Save Page.

> ## ~ Adding or editing wiki pages locally ~

    Wikis are part of Git repositories, so you can make changes locally and push them to your repository using a Git workflow.
    Cloning wikis to your computer

    Every wiki provides an easy way to clone its contents down to your computer. You can clone the repository to your computer with the provided URL:

 ```
  $ git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.wiki.git
  # Clones the wiki locally
```
    Once you have cloned the wiki, you can add new files, edit existing ones, and commit your changes. You and your collaborators can create branches when working on wikis, but only changes pushed to the default branch will be made live and available to your readers.

> ## ~ About wiki filenames ~

    The filename determines the title of your wiki page, and the file extension determines how your wiki content is rendered.

    Wikis use our open-source Markup library to convert the markup, and it determines which converter to use by a file's extension. For example, if you name a file foo.md or foo.markdown, wiki will use the Markdown converter, while a file named foo.textile will use the Textile converter.

    Don't use the following characters in your wiki page's titles: \ / : * ? " < > |. Users on certain operating systems won't be able to work with filenames containing these characters. Be sure to write your content using a markup language that matches the extension, or your content won't render properly.

> ## ~ Bibliography ~

https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages