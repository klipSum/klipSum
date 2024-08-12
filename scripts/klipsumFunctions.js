// ----------------------------------------------------------------------------
// MAIN ELEMENTS VAR REGISTER /////////////////////////////////////////////////
// ----------------------------------------------------------------------------










    // GET ELEMENTS ON DOM xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////

        var getBodyControl = document.querySelector(".kklipsumBodyControl")










    // ELEMENTS FOR ERROR COMPLETED BOX xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////

        var erroCompletedColorBoxContainer = document.querySelector(".klipsumErrorHandlingBoxActual")










    // ELEMENTS FOR LANGUAGE SELECTOR BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////

        var erroHandlerMain = document.querySelector(".klipsumErrorHandlingBox");
        var errorHandlerText = document.querySelector(".klipsumErrorHandlingBoxTextActual");








    

    // ELEMENTS FOR NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////

        var logoControl = document.querySelector(".klipsumNavBarLogoActual");
        var suggestionsButton = document.querySelector(".klipsumNavBarContentItemOne");


        var closeButtonGeneral = document.querySelector(".sideMenuClickerGeneralActual");
        var cloaseButtonContact = document.querySelector(".sideMenuClickerContactActual")
        var extraMenuEntireContainer = document.querySelector(".sideMenuContainer");
        var extraMenuSliderControl = document.querySelector(".sideMenuScrollerContainer");

        var getBookButton = document.querySelector(".sideMenuDeepDiveSideGetBookButtonContainer");
        var openContactButton = document.querySelector(".sideMenuSuggestionsSideContactButtonText");










    // ELEMENTS FOR LANGUAGE SELECTOR BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////

        var languageDropDownOn = document.querySelector(".klipsumLanguageSelectionDropDownClickerOn")
        var languageDropDownOff = document.querySelector(".klipsumLanguageSelectionDropDownClickerOff")

        var languageDropDownSelectMenu = document.querySelector(".klipsumLanguageDropDownItemsContainer")

        var languageDropDownIconLineOne = document.querySelector(".klipsumLanguageSelectionDropDownArrowIconLineOne")
        var languageDropDownIconLineTwo = document.querySelector(".klipsumLanguageSelectionDropDownArrowIconLineTwo")



        var languageDropDownSelected = document.querySelector(".klipsumLanguageDropDownSelectTextContainer")

        var languageDropDownLangOne = document.querySelector(".klipsumLanguageDropDownItemOneHighlight")
        var languageDropDownLangTwo = document.querySelector(".klipsumLanguageDropDownItemTwoHighlight")



        var langaugeSelectBoxMain = document.querySelector(".klipsumLanguageSelectionTagActual")


        var selectedLanguageClicker = ""


        var contentDirectionSwitch = sessionStorage.getItem("pageDirection")


        var getPageLangaugeNumber = 0










    // ELEMENTS FOR CONTACT BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////////


            var mainContactForm = document.querySelector(".contactFormContainer")


        // HEADLINE TEXT ------------------------------------------------------
        // ////////////////////////////////////////////////////////////////////

            var contactHeadlinerTextOne = document.querySelector(".formHeaderLineOne")
            var contactHeadlinerTextTwo = document.querySelector(".formHeaderLineTwo")


        // INPUTS FIELDS ------------------------------------------------------
        // ////////////////////////////////////////////////////////////////////

            // USER NAME FIELD xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                var userNameField = document.querySelector(".contributorName")

            // RECOMMENDATIONS FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                var bookNameFieldsContainer = document.querySelector(".bookNameInputsContainer")

                var bookNameFieldOne = document.querySelector(".extraBookNameOneInputActual")

            // ADD BOOK NAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                var addBookNameButton = document.querySelector(".addBookNameIconContainer")

                var addBookContainer = document.querySelector(".addBookNameButtonContainer")
                var addBookText = document.querySelector(".addBookNameTextSide")
                var addBookButton = document.querySelector(".addBookNameIconSide")

            // COMMENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                var commentsBlock = document.querySelector(".comments")

                var submitButton = document.querySelector(".submitRecommendationsButtonText")




// SEND EMAIL VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    var getBookNamesCompiled = ""


// PAGE ARRAYS AND VARS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////

    var classNumberMiddleCounterNumber = 0;

    var elelemtClickedNumberMapper = 0;

    var checkElementsClassNumberCounter = 0;

    var errorMessage = ""
    var completedMessage = ""
    
    var classNumberMiddleCounter = ["One", "Two", "Three", "Four", "Five"];

    var classNameGetArray = [];


    var englishLoad = [


        // CONTENT LIBRARY FILLER ARRAYS ----------------------------------
        // ////////////////////////////////////////////////////////////////


        [

            "https://m.media-amazon.com/images/I/41apexh1AhL.jpg",


            "The intelligent",
            "investor Rev Ed.",
            "Definitive book.",
            "Benjamin Graham",


            "https://finsite-7i94.onrender.com/media/finMedia/intelInvestor.mp3",


            "Benjamin Graham's The Intelligent Investor explores value investing principles and risk management strategies. It stresses the importance of in-depth analysis, long-term investing, and maintaining a margin of safety.",
            "Investors can choose to trade at Mr. Market's price or not, as he revises it daily. Graham emphasizes valuing companies to avoid market volatility, using fundamental analysis.",


            "https://www.amazon.com/dp/B00V7328GS?tag=uuid10-20",

            "The_Intelligent_Investor"

        ],

        [

            "https://m.media-amazon.com/images/I/51JemODRExL.jpg",


            "The psychology",
            "of money, Timeless",
            "lessons on wealth.",
            "Morgan Housel",


            "https://finsite-7i94.onrender.com/media/finMedia/psychoMoney.mp3",


            "The Psychology of Money by Morgan Housel delves into the intricate relationship between human behavior and financial decisions. Housel explores the psychological aspects that influence how people manage money, emphasizing the importance of mindset and habits.",
            "Through compelling anecdotes and insights, the book discusses the impact of emotions, biases, and cognitive shortcuts on financial outcomes.",


            "https://www.amazon.com/dp/B08D9WJ9G8?tag=uuid10-20",

            "The_Psychology_Of_Money"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51R5o-WAyjL.jpg",


            "I will teach",
            "you to be rich.",
            "no excuses.",
            "Ramit Sethi",


            "https://finsite-7i94.onrender.com/media/finMedia/teachYou.mp3",


            "I Will Teach You to Be Rich by Ramit Sethi offers practical advice on personal finance, focusing on automation, conscious spending, and investing. Sethi emphasizes the importance of setting financial goals, optimizing savings, and creating a system for financial success.",
            " The book guides readers on building wealth through deliberate actions, negotiation skills, and strategic money management techniques.",


            "https://www.amazon.com/dp/B07QR7GYF7?tag=uuid10-20",

            "I_Will_Teach_You_To_Be_Rich"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51NuMV9SJ8L.jpg",


            "Rich dad, poor dad.",
            "What the rich",
            "teach their kids.",
            "Robert T. Kiyosaki",


            "https://finsite-7i94.onrender.com/media/finMedia/richDad.mp3",


            "Rich Dad, Poor Dad by Robert T. Kiyosaki contrasts the financial teachings of his own rich dad with those of his poor dad, illustrating the mindset and strategies for wealth creation.",
            "The book challenges traditional beliefs about money and encourages readers to think differently about wealth accumulation and financial independence.",


            "https://www.amazon.com/dp/B07QPQ8WBL?tag=uuid10-20",

            "Rich_Dad_Poor_Dad"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51j11vs7etL.jpg",


            "The little book",
            "of common sense",
            "investing.",
            "John C. Bogle",


            "https://finsite-7i94.onrender.com/media/finMedia/commonSense.mp3",


            "The Little Book of Common Sense by John C. Bogle introduces readers to the fundamental principles of successful investing, emphasizing simplicity, low costs, and long-term strategies.",
            "Bogle advocates for index investing and passive management, highlighting the importance of staying the course and avoiding market timing.",


            "https://www.amazon.com/dp/B077VYLVGP?tag=uuid10-20",

            "The_Little_Book_Of_Common_Sense"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51AD3hQfMaL.jpg",


            "The",
            "ascent",
            "of money.",
            "Niall Ferguson",


            "https://finsite-7i94.onrender.com/media/finMedia/theAscent.mp3",


            "Harvard Professor Niall Ferguson's book delves into the financial history of the world, exploring the evolution of banking, insurance, and real estate markets.",
            "Ferguson's work presents a captivating narrative of how financial systems have evolved over time to address economic challenges.",


            "https://www.amazon.com/dp/B001NXPJOU?tag=uuid10-20",

            "The_Ascent_Of_Money"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51BNR8FKwoL.jpg",


            "How to day",
            "trade for",
            "a living.",
            "Andrew Aziz",


            "https://finsite-7i94.onrender.com/media/finMedia/dayTrade.mp3",


            "Andrew Aziz's book, How to Day Trade for a Living, offers beginners a comprehensive guide to understanding day trading and its distinctions from other trading styles.",
            "It serves as an ideal starting point for novice traders looking to delve into the world of day trading.",


            "https://www.amazon.com/dp/B074TR5Y6M?tag=uuid10-20",

            "How_To_Day_Trade"

        ],

        [

            
            "https://m.media-amazon.com/images/I/414UzZxaSFL.jpg",


            "The simple",
            "path to wealth.",
            "A financial roadmap.",
            "J L Collins",


            "https://finsite-7i94.onrender.com/media/finMedia/simpleWealth.mp3",


            "The Simple Path to Wealth by J.L. Collins presents a straightforward approach to financial independence through index fund investing and mindful spending.",
            "Readers can learn to build wealth and achieve freedom through straightforward strategies outlined in the book.",


            "https://www.amazon.com/dp/B0725RFDPY?tag=uuid10-20",

            "The_Simple_Path_To_Wealth"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41akHYVLQcS.jpg",


            "Get good",
            "with money.",
            "10 simple steps.",
            "Tiffany Aliche",


            "https://finsite-7i94.onrender.com/media/finMedia/getGoodMoney.mp3",


            "Get Good with Money by Tiffany Aliche is a practical guide that empowers readers to take control of their finances through budgeting, saving, and investing.",
            "Aliche's method focuses on achieving financial wholeness, addressing various personal finance aspects for overall financial well-being.",


            "https://www.amazon.com/dp/B08FMVWCWS?tag=uuid10-20",

            "Get_Good_With_Money"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41lW25KOvML.jpg",


            "Set for life.",
            "Dominate life",
            "and money.",
            "Scott Trench",


            "https://finsite-7i94.onrender.com/media/finMedia/setForLife.mp3",


            "Set for Life by Scott Trench offers practical guidance on achieving financial independence through real estate investment, frugal living, and strategic money management.",
            "The book discusses the principles of early retirement, financial freedom, and long-term wealth accumulation.",


            "https://www.amazon.com/dp/B071NLYJDF?tag=uuid10-20",

            "Set_For_Life"

        ],









            // FANTASY BOOKS -------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/51ctosFnFiL.jpg",


            "Stephen Kings,",
            "Fairy tale",
            "",
            "Stephen King",


            "https://fansite.onrender.com/media/fanMedia/fairyTale.mp3",


            "Fairy Tale by Stephen King is a gripping dark fantasy novel depicting the journey of Charlie Reade, a teenager thrust into a battle of cosmic proportions.",
            "Through intricate storytelling and vivid imagery, King weaves a tale of magic, danger, and the enduring fight against darkness.",


            "https://www.amazon.com/dp/B09R5ZPY6Y?tag=uuid10-20",

            "Fairy_Tale"

        ],

        [

            
            "https://m.media-amazon.com/images/I/71jAUocj0OL._AC_UF1000,1000_QL80_DpWeblab_.jpg",


            "The pursuit",
            "of shadows.",
            "Book two of three.",
            "JA Andrews",


            "https://fansite.onrender.com/media/fanMedia/pursuit.mp3",


            "In Pursuit of Shadows, book 2, by J.A. Andrews, the second installment of The Keeper Chronicles, Keeper Will embarks on a quest to locate his missing sister.",
            "The novel offers a refreshing twist to the fantasy genre by focusing on Will's unwavering determination and quest for hope amidst adversity.",


            "https://www.amazon.com/dp/B08DL9DXJ1?tag=uuid10-20",

            "The_Pursuit_Of_Shadows"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61e0RbnvobL.jpg",


            "Revival of",
            "the court.",
            "Urban fantasy",
            "Heather G. Harris",


            "https://fansite.onrender.com/media/fanMedia/revival.mp3",


            "Join the thrilling wedding of Jinx and Emory in The Other Realm series' seventh book by an invite disrupted by the ominous Connection.",
            "Dive into this internationally bestselling series for humor, strong heroines, and a captivating slow-burn romance.",


            "https://www.amazon.com/dp/B0CDDV8M1L?tag=uuid10-20",

            "Revival_Of_The_Court"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51C7DCS8-XL.jpg",


            "A tale",
            "of witchcraft.",
            "",
            "Chris Colfer",


            "https://fansite.onrender.com/media/fanMedia/witchCraft.mp3",


            "This captivating book evokes nostalgic childhood adventures with beloved fairytale characters.",
            "Join the enchanting world of Brystal Evergreen and embark on a magical journey through the realms of fantasy and wonder.",


            "https://www.amazon.com/dp/B0855C96DB?tag=uuid10-20",

            "A_Tale_Of_Witchcraft"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41Hph+dzEAL.jpg",


            "Age of bronze.",
            "A LitRPG Dungeon",
            "core adventure.",
            "Jez Cajiao",


            "https://fansite.onrender.com/media/fanMedia/bronze.mp3",


            "The book follows a dungeon lord navigating a post-apocalyptic world, striving to survive and thrive amidst chaos",
            "The MC's journey is marked by struggle and reliance on allies, offering a unique blend of character development and strategic growth.",


            "https://www.amazon.com/dp/B09XYZPFS7?tag=uuid10-20",

            "Age_Of_Bronze"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61Zxem3qIIL.jpg",


            "Children",
            "of blood",
            "and bone.",
            "Tomi Adeyemi",


            "https://fansite.onrender.com/media/fanMedia/children.mp3",


            "Children of Blood and Bone by Tomi Adeyemi is a captivating young adult fantasy novel that introduces readers to the courageous Zélie Adebola on a quest to revive magic in the kingdom of Orïsha.",
            "The novel delves into themes of oppression, racism, and the discovery of one's true potential amidst adversity.",


            "https://www.amazon.com/dp/B075NR7HC3?tag=uuid10-20",

            "Children_Of_The_Blood"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61lKSG3bQlL.jpg",


            "Chain",
            "of gold.",
            "The last hours.",
            "Cassandra Clare",


            "https://fansite.onrender.com/media/fanMedia/chains.mp3",


            "In Cassandra Clare's Chain of Gold, Cordelia Carstairs, a determined Shadowhunter, faces family turmoil and a forbidden love for James Herondale.",
            "With a cruel price to pay for heroism, the novel explores love, sacrifice, and the treacherous path of being a Shadowhunter.",


            "https://www.amazon.com/dp/B07L8CTB54?tag=uuid10-20",

            "Chain_Of_Gold"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51SvT6mQNcL.jpg",


            "Legends",
            "and lattes.",
            "",
            "Travis Baldree",


            "https://fansite.onrender.com/media/fanMedia/legends.mp3",


            "Legends & Lattes by Travis Baldree is a captivating high fantasy novel inspired by the world of Dungeons & Dragons.",
            "Drawing on his background in video game development and audiobooks, Baldree crafts a compelling tale that resonates with readers, blending magic and everyday life seamlessly.",


            "https://www.amazon.com/dp/B0B3G97QY1?tag=uuid10-20",

            "Legends_And_Lattes"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51rjEmPGdqL.jpg",


            "The",
            "dragon prince.",
            "Book one.",
            "Aaron Ehasz",


            "https://fansite.onrender.com/media/fanMedia/dragonPrince.mp3",


            "The Dragon Prince is a critically acclaimed novel and now also an animated fantasy series on Netflix, created by Aaron Ehasz and Justin Richmond.",
            "As anticipation builds for the upcoming seasons, fans eagerly await the series' final chapter, promising an epic conclusion to this beloved fantasy tale.",


            "https://www.amazon.com/dp/B0868X83NK?tag=uuid10-20",

            "The_Dragon_Prince"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51M+xgcE8hS.jpg",


            "The",
            "shadow",
            "of the gods.",
            "John Gwynne",


            "https://fansite.onrender.com/media/fanMedia/shadowOfGods.mp3",


            "John Gwynne's The Shadow of the Gods introduces a captivating Norse mythology-inspired world through the intertwined tales of Orka, Elvar, and Varg.",
            "The Shadow of the Gods sets the stage for an epic saga, weaving together the fates of its compelling protagonists in a mythical and action-packed journey.",


            "https://www.amazon.com/dp/B0942QJFMR?tag=uuid10-20",

            "The_Shadow_Of_The_Gods"

        ],









            // THRILLER BOOKS ------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/41kTCl6OwHL.jpg",


            "Blake Crouch's",
            "Recursion,",
            "the novel.",
            "Blake Crouch",


            "https://trhsite.onrender.com/media/thrMedia/recurssion.mp3",


            "Blake Crouch's thriller science fiction novel, Recursion, delves into the complexities of memory, identity, and time.",
            "Recursion offers a mind-bending exploration of the consequences of altering the past and the profound implications it has on individuals and the world around them.",


            "https://www.amazon.com/dp/B07N2Y1T8G?tag=uuid10-20",

            "Recursion"

        ],

        [

            
            "https://m.media-amazon.com/images/I/519tzZGSjDL.jpg",


            "Another girl.",
            "A kings lake",
            "investigation.",
            "Peter Grainger",


            "https://trhsite.onrender.com/media/thrMedia/anotherGirl.mp3",


            "In this new installation of Peter Grainger's King's Lake Mystery series, Grainger skillfully places his characters in peril, adding a thrilling dimension to his typical investigative narrative.",
            "This novel not only stands alone but also sets the stage for future interconnected narratives, promising further depth and continuity in the series.",


            "https://www.amazon.com/dp/B0CP6FYQYD?tag=uuid10-20",

            "Another_Girl"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51Egx-MwsmL.jpg",


            "The law.",
            "A Dresden files",
            "novella.",
            "Jim Butcher",


            "https://trhsite.onrender.com/media/thrMedia/theLaw.mp3",


            "In The Law by Jim Butcher, the novella blends a mix of lightness with overarching character development, featuring both familiar faces like Marcone and new characters. ",
            "Butcher's storytelling prowess shines through, creating a rich world with compelling characters that keep readers coming back for more, making it a captivating read for both new and returning audiences",


            "https://www.amazon.com/dp/B09Y26JXWM?tag=uuid10-20",

            "The_Law"

        ],

        [

            
            "https://m.media-amazon.com/images/I/518Loxx15yL.jpg",


            "Breathe",
            "your last.",
            "A crime thriller.",
            "Lisa Regan",


            "https://trhsite.onrender.com/media/thrMedia/breath.mp3",


            "Regan's storytelling excels in providing a comprehensive view of characters and their developments, offering a rich narrative perspective.",
            "The book delivers a compelling read that propels the characters to new levels, signaling an exciting new direction for the series.",


            "https://www.amazon.com/dp/B08PG6T6TL?tag=uuid10-20",

            "Breathe_Your_Last"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51v8oSR3kfL.jpg",


            "Dead",
            "fall.",
            "Unabridged.",
            "Brad Thor",


            "https://trhsite.onrender.com/media/thrMedia/deadFall.mp3",


            "In Brad Thor's Dead Fall, readers are thrust into a world of high-stakes intrigue and deadly conspiracies, following the counterterrorism operative Scot Harvath on a mission to uncover a sinister global plot.",
            "As alliances shift and danger looms, Harvath navigates a treacherous landscape where friends and foes blur, revealing the chilling extent of the peril.",


            "https://www.amazon.com/dp/B0BJSGYC9G?tag=uuid10-20",

            "Dead_Fall"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51fSqdLDzKL.jpg",


            "One for",
            "the ages.",
            "Scottish crime.",
            "JD Kirk",


            "https://trhsite.onrender.com/media/thrMedia/theAges.mp3",


            "In JD Kirk's One for the Ages, the 16th installment of the DCI Jack Logan series, a remote Highland village is rocked by its first murder of an elderly woman.",
            "With the stakes escalating and trust shattered, Jack must navigate a web of deceit and betrayal to prevent further loss of innocent lives in this gripping tale of mystery and suspense.",


            "https://www.amazon.com/dp/B0BVN3QDKC?tag=uuid10-20",

            "One_For_The_ages"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51JbIBTenfL.jpg",


            "The last",
            "target.",
            "",
            "Christy Barritt",


            "https://trhsite.onrender.com/media/thrMedia/lastTarget.mp3",


            "In Christy Barritt's The Last Target, a fast-paced romantic suspense unfolds with compelling characters and relentless danger from the first shot fired on page one.",
            "With a talent for crafting gripping chapter endings, Barritt keeps readers on edge, propelling them seamlessly through the narrative without pause.",


            "https://www.amazon.com/dp/B084DGGCW9?tag=uuid10-20",

            "The_Last_Target"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51tIkqFo4YL.jpg",


            "Deep",
            "fake.",
            "",
            "Ward Larsen",


            "https://trhsite.onrender.com/media/thrMedia/deepFake.mp3",


            "In Ward Larsen's Deep Fake, the gripping narrative unfolds with a sense of urgency as Sarah Ridgeway, a congressman's wife, delves into the unsettling truth behind her husband's mysterious behavior after a terrorist attack.",
            "Larsen skillfully navigates the blurred lines between morality and corruption, showcasing the lengths individuals and nations will go to secure control.",


            "https://www.amazon.com/dp/B0B64GJ57G?tag=uuid10-20",

            "Deep_Fake"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51EZVt1TXDL.jpg",


            "You.",
            "The novel.",
            "",
            "Caroline Kepnes",


            "https://trhsite.onrender.com/media/thrMedia/you.mp3",


            "Caroline Kepnes' thriller novel You follows the gripping tale narrated by Joe Goldberg, a bookstore employee whose fixation on aspiring writer Beck drives the story.",
            "Dive into the world of Joe and Beck with the 2014 Atria Books eBook version of this suspenseful novel for a thrilling and immersive reading experience.",


            "https://www.amazon.com/dp/B00MTSML3K?tag=uuid10-20",

            "You"

        ],

        [

            
            "https://m.media-amazon.com/images/I/519awIMUOwL.jpg",


            "Brink of war.",
            "A prosecution",
            "force thriller.",
            "Logan Ryles",


            "https://trhsite.onrender.com/media/thrMedia/brink.mp3",


            "In Logan Ryles' Brink of War, the action thriller unfolds with a mix of excitement and shortcomings, blending fast-paced sequences with inaccuracies in military equipment details. ",
            "With enough moments of intensity, Brink of War delivers a consistent and engaging storyline, offering a blend of action and justification that could leave readers craving more.",


            "https://www.amazon.com/dp/B0B88ZNHCM?tag=uuid10-20",

            "Brink_Of_War"

        ],









            // ADVENTURE BOOKS -----------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/51YmKe6vt0S.jpg",


            "His",
            "dark materials.",
            "The golden compass.",
            "Philip Pullman",


            "https://advsite.onrender.com/media/advMedia/goldCompass.mp3",


            "In this trillogy, Philip Pullman introduces readers to a parallel universe in which souls manifest as dæmons, external animal companions linked to individuals' emotions and senses.",
            "The intricate dynamics between humans and their dæmons shape a rich narrative exploring power, identity, and the fight for dominance in a complex society.",


            "https://www.amazon.com/dp/B0000W6SPE?tag=uuid10-20",

            "His_Dark_Materials"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51K8lYxL12L.jpg",


            "He who",
            "fights with",
            "monsters. B7",
            "Shirtaloon",


            "https://advsite.onrender.com/media/advMedia/whoFights.mp3",


            "Shirtaloon's captivating series immerses readers in a unique blend of LitRPG and Progression Fantasy, where Jason finds himself in a magical realm filled with challenges and mysteries.",
            "The narrative evolves from a slow start to a dynamic pace, weaving humor, action, and intricate plot developments that span across various dimensions and worlds.",


            "https://www.amazon.com/dp/B08V3XQ7LK?tag=uuid10-20",

            "He_Who_Fights_With_Monsters"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51-wFWg1IqL.jpg",


            "The",
            "secret lake.",
            "Childrens mystery adventure.",
            "Karen Inglis",


            "https://advsite.onrender.com/media/advMedia/lake.mp3",


            "This is why you have a few legs whIn Karen Inglis' enchanting tale, Stella and Tom embark on a time-travel adventure through a hidden cave, uncovering a century-old mystery and helping right a past injustice.",
            "The heartwarming story encourages children to embrace curiosity, empathy, and respect for others while igniting their imaginations with the magic of discovery and friendship.",


            "https://www.amazon.com/dp/B07TKNMS2W?tag=uuid10-20",

            "The_Secret_Lake"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51ZGAKat54L.jpg",


            "Life",
            "of Pi.",
            "",
            "Yann Martel",


            "https://advsite.onrender.com/media/advMedia/pi.mp3",


            "In Yann Martel's Life of Pi, the young protagonist Pi recounts his harrowing journey across the Pacific Ocean post-shipwreck, accompanied by a tiger named Richard Parker.",
            "The story's suspenseful twists and turns keep readers engaged, leading to a climactic revelation in the final chapters that ties all doubts and questions together.",


            "https://www.amazon.com/dp/B074WFYQ2K?tag=uuid10-20",

            "Life_Of_Pi"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51hHoC1-kXL.jpg",


            "The ocean",
            "at the end of",
            "the lane.",
            "Neil Gaiman",


            "https://advsite.onrender.com/media/advMedia/theOcean.mp3",


            "Neil Gaiman's captivating novel follows a man who revisits his childhood home after a funeral, leading him to the enigmatic Hempstock farmhouse and its powerful female residents.",
            "Gaiman's narrative weaves a mesmerizing tale of nostalgia and mystery, drawing readers into a world where past and present intertwine seamlessly.",


            "https://www.amazon.com/dp/B00CRKNR88?tag=uuid10-20",

            "The_Ocean_At_The_End_Of_The_Lane"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61Wn9Ib7dZL.jpg",


            "Sea",
            "of shadows.",
            "Book one",
            "Kelley Armstrong",


            "https://advsite.onrender.com/media/advMedia/sea.mp3",


            "In Sea of Shadows, Ashyn and Moria, twin sisters serving as the Keeper and Seeker of Edgewood, must safeguard their land from vengeful spirits in the Forest of the Dead.",
            " The dark fantastical elements add a gripping layer of intrigue to the narrative, captivating readers with their grisly yet compelling delivery.",


            "https://www.amazon.com/dp/B00IA68P7G?tag=uuid10-20",

            "Sea_Of_Shadows"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51aLv4Ty2KL.jpg",


            "Fable",
            "The novel",
            "",
            "Adrienne Young",


            "https://advsite.onrender.com/media/advMedia/fable.mp3",


            "In a ruthless fictional world, Fable centers on found family amidst a backdrop of survival challenges.",
            "Blending elements of seafaring traders and piratical adventures, the novel captures a dangerous and thrilling atmosphere where rival crews clash and peril lurks at every turn.",


            "https://www.amazon.com/dp/B084P3JDYG?tag=uuid10-20",

            "Fable"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51hl+fFHu1L.jpg",


            "The girl",
            "who drank",
            "the moon.",
            "Kelly Barnhill",


            "https://advsite.onrender.com/media/advMedia/theMoon.mp3",


            "In The Girl Who Drank The Moon, a tale of family, growth, and magic unfolds. The book evolves from a simple tale of Luna's magic to a complex narrative intertwining various plot strands.",
            "This Middle Great fantasy, brimming with love, magic, and endearing characters, is a delightful read recommended for fantasy enthusiasts.",


            "https://www.amazon.com/dp/B01JSHI3PY?tag=uuid10-20",

            "The_Girl_Who_Drank_The_Moon"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51zagX8CG9L.jpg",


            "Hunting",
            "ground",
            "",
            "Patricia Briggs",


            "https://advsite.onrender.com/media/advMedia/huntingGround.mp3",


            "In Hunting Ground, personal struggles between Anna and Charles add layers to their relationship dynamics, with Charles grappling with feelings of inadequacy and Anna navigating her fears.",
            "Despite skillful navigation of relationship nuances, a desire for deeper exploration of their personal bond and physical intimacy lingers, reflecting the yearning for more intimate character development.",


            "https://www.amazon.com/dp/B002MVI0XY?tag=uuid10-20",

            "Hunting_Ground"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51NE8Q+KNOL.jpg",


            "A boy, his dog",
            "and the end",
            "of the world.",
            "C.A. Fletcher",


            "https://advsite.onrender.com/media/advMedia/hisDog.mp3",


            "In this gripping tale, Griz's compelling narration blends naivety and wisdom, painting a vivid picture of life post-apocalypse.",
            "Through Griz's introspective observations, the novel serves as a subtle yet impactful reminder of the repercussions of human actions on the environment.",


            "https://www.amazon.com/dp/B07QNLQBJV?tag=uuid10-20",

            "A_Boy_His_Dog_And_The_End_Of_The_World"

        ],









            // COMEDY BOOKS --------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/411mUToN0fL.jpg",


            "Creativity.",
            "A short and",
            "cheerful guide.",
            "John Cleese",


            "https://comsite.onrender.com/media/comMedia/creativity.mp3",


            "In Creativity, John Cleese offers a captivating glimpse into the creative process behind iconic works like Monty Python and Fawlty Towers.",
            "This concise yet impactful guide to practical creativity resonates with readers seeking a fresh perspective on the artistic process.",


            "https://www.amazon.com/dp/B0899G43R5?tag=uuid10-20",

            "Creativity"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41jd16DNLjS.jpg",


            "Yearbook.",
            "",
            "",
            "Seth Rogan",


            "https://comsite.onrender.com/media/comMedia/yearBook.mp3",


            "Seth Rogen's Yearbook stands out as a hilarious and engaging read, filled with true stories and essays spanning his childhood to his career.",
            "Amidst tales of drug use and antics, Rogen also touches on deeper themes such as his Jewish heritage and experiences with antisemitism, showcasing a blend of humor and introspection.",


            "https://www.amazon.com/dp/B08TX58CF6?tag=uuid10-20",

            "Yearbook"

        ],

        [

            
            "https://m.media-amazon.com/images/I/518DdYfSSeL.jpg",


            "Comedy,",
            "Sex,",
            "God.",
            "Peter Holmes",


            "https://comsite.onrender.com/media/comMedia/comedy.mp3",


            "Pete Holmes recounts his upbringing as an evangelical Christian, shaped by strict moral codes and beliefs.",
            "Comedy Sex God is a candid exploration of loss, growth, and the unexpected paths to spiritual enlightenment that emerge from life's most challenging moments.",


            "https://www.amazon.com/dp/B07NNRBWFS?tag=uuid10-20",

            "Comedy_Sex_God"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51giS8HsJRL.jpg",


            "Based on",
            "a true story.",
            "A memoir.",
            "Norm Macdonald",


            "https://comsite.onrender.com/media/comMedia/trueStory.mp3",


            "Norm Macdonald's Based on a True Story intertwines the narrative of a renowned Canadian comedian's rise to fame on Saturday Night Live with a quirky fictional storyline about a ghostwriter crafting the comedian's memoir.",
            "The book cleverly blends reality and fiction, delving into themes of gambling, morphine abuse, and the absurdities of celebrity life.",


            "https://www.amazon.com/dp/B01L0GDSHY?tag=uuid10-20",

            "Based_On_A_True_Story"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41TjCZwbXmL.jpg",


            "Happy",
            "go lucky.",
            "",
            "David Sedaris",


            "https://comsite.onrender.com/media/comMedia/happy.mp3",


            "David Sedaris delves into his tumultuous past and quirky family dynamics in Happy-Go-Lucky, reflecting on the impact of his upbringing on his comedic approach.",
            "From amusing encounters with eccentric characters to poignant reflections on societal absurdities, Sedaris offers a glimpse into the complexities of humor and human interactions in this collection of autobiographical sketches.",


            "https://www.amazon.com/dp/B09S3YDKT7?tag=uuid10-20",

            "Happy_Go_Lucky"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41ZMF7TuhkL.jpg",


            "A very",
            "punchable",
            "face.",
            "Colin Jost",


            "https://comsite.onrender.com/media/comMedia/punchable.mp3",


            "Colin Jost's memoir, A Very Punchable Face, offers a humorous and candid look at his life journey, from a Staten Island upbringing to Harvard and beyond.",
            "Amidst the highs of hosting the Emmys and surreal incidents like raccoon CPR, Jost's narrative skillfully balances humor with heartfelt reflections, showcasing the resilience and wit of a seasoned comedian and writer.",


            "https://www.amazon.com/dp/B081KBHPJ6?tag=uuid10-20",

            "A_Very_Punchable_Face"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41CrgJ90GsL.jpg",


            "Is this",
            "anything?",
            "",
            "Jerry Seinfeld",


            "https://comsite.onrender.com/media/comMedia/anything.mp3",


            "Is This Anything? offers a comprehensive exploration of life's moments and musings, from childhood to parenthood, captured in decades of meticulously crafted comedy material.",
            "This compilation serves as a testament to the art of comedy, encapsulating Seinfeld's unique perspective on the world and the relentless pursuit of finding humor in everyday experiences.",


            "https://www.amazon.com/dp/B084C2F7V7?tag=uuid10-20",

            "Is_This_Anything"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51UIsSCRlQL.jpg",


            "The NEW",
            "comedy Bible.",
            "The ultimate guide.",
            "Judy Carter",


            "https://comsite.onrender.com/media/comMedia/new.mp3",


            "The New Comedy Bible by Judy Carter offers a comprehensive guide to aspiring stand-up comedians, featuring step-by-step instructions for writing, performing, and launching a successful comedy career.",
            "Whether you're a beginner or a seasoned pro, this book provides the tools and techniques needed to transition from couch to stage, paving the way for a rewarding and fulfilling journey in the world of comedy.",


            "https://www.amazon.com/dp/B08SHZGGX4?tag=uuid10-20",

            "The_New_Comedy_Bible"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51B0698Ry1L.jpg",


            "How",
            "to be funny.",
            "",
            "Andy Gardner",


            "https://comsite.onrender.com/media/comMedia/howFunny.mp3",


            "How To Be Funny is an essential guide for those seeking to enhance their comedic skills and become the life of the party.",
            "Packed with expert advice and humorous anecdotes, How To Be Funny is a valuable tool for anyone looking to elevate their sense of humor and bring joy to those around them.",


            "https://www.amazon.com/dp/B0CV5ZHZ7M?tag=uuid10-20",

            "How_To_Be_Funny"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51WOC9iRITL.jpg",


            "Comedy.",
            "Comedy.",
            "Comedy. Drama.",
            "Bob Odenkirk",


            "https://comsite.onrender.com/media/comMedia/comedyX3.mp3",


            "Comedy Comedy Comedy Drama delves into the career and comedic evolution of actor Bob Odenkirk, known for his roles in Better Call Saul and Mr. Show.",
            " Through witty anecdotes and behind-the-scenes insights, Odenkirk's memoir reveals a multifaceted artist who has left an indelible mark on the entertainment industry.",


            "https://www.amazon.com/dp/B093HHM4XX?tag=uuid10-20",

            "Comedy_Comedy_Comedy_Drama"

        ],


    ]


    var arabicLoad = [


        // CONTENT LIBRARY FILLER ARRAYS ----------------------------------
        // ////////////////////////////////////////////////////////////////


        [

            "https://m.media-amazon.com/images/I/41apexh1AhL.jpg",


            "المستثمر",
            "الذكي Rev Ed.",
            "كتاب نهائي",
            "Benjamin Graham",


            "https://finsite-7i94.onrender.com/media/finMedia/intelInvestor.mp3",


            'يستكشف كتاب "المستثمر الذكي" لبنجامين جراهام مبادئ استثمار القيمة واستراتيجيات إدارة المخاطر. ويشدد على أهمية التحليل المتعمق والاستثمار طويل الأجل والحفاظ على هامش الأمان.',
            "يمكن للمستثمرين اختيار التداول بسعر السيد ماركت أم لا، حيث يقوم بمراجعته يوميًا. ويؤكد جراهام على تقييم الشركات لتجنب تقلبات السوق، وذلك باستخدام التحليل الأساسي.",


            "https://www.amazon.com/dp/B00V7328GS?tag=uuid10-20",

            "المستثمر_الذكي"

        ],

        [

            "https://m.media-amazon.com/images/I/51JemODRExL.jpg",


            "سيكو لو جية",
            "المال, دروس",
            "خالدة عن الثروة.",
            "Morgan Housel",


            "https://finsite-7i94.onrender.com/media/finMedia/psychoMoney.mp3",


            'يتعمق كتاب "علم نفس المال" للكاتب مورجان هاوسل في العلاقة المعقدة بين السلوك البشري والقرارات المالية. يستكشف هاوسل الجوانب النفسية التي تؤثر على كيفية إدارة الناس للأموال، مع التركيز على أهمية العقلية والعادات.',
            "من خلال الحكايات والرؤى المقنعة، يناقش الكتاب تأثير العواطف والتحيزات والاختصارات المعرفية على النتائج المالية.",


            "https://www.amazon.com/dp/B08D9WJ9G8?tag=uuid10-20",

            "علم_نفس_المال"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51R5o-WAyjL.jpg",


            "سأعلمك أن",
            "تكون غنيا.",
            "لا اعذار.",
            "Ramit Sethi",


            "https://finsite-7i94.onrender.com/media/finMedia/teachYou.mp3",


            'يقدم كتاب "سأعلمك كيف تصبح ثريًا" بقلم راميت سيثي نصائح عملية حول التمويل الشخصي، مع التركيز على الأتمتة، والإنفاق الواعي، والاستثمار. يؤكد سيثي على أهمية تحديد الأهداف المالية، وتحسين المدخرات، وإنشاء نظام للنجاح المالي.',
            "يرشد الكتاب القراء إلى كيفية بناء الثروة من خلال الإجراءات المتعمدة، ومهارات التفاوض، وتقنيات إدارة الأموال الاستراتيجية.",


            "https://www.amazon.com/dp/B07QR7GYF7?tag=uuid10-20",

            "سأعلمك_لكي_تكون_ثريًا"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51NuMV9SJ8L.jpg",


            "أب غني أب فقير.",
            "ما الغني",
            "تعليم أطفالهم.",
            "Robert T. Kiyosaki",


            "https://finsite-7i94.onrender.com/media/finMedia/richDad.mp3",


            'الأب الغني، الأب الفقير بقلم روبرت تي كيوساكي يقارن التعاليم المالية لوالده الغني مع تعاليم والده الفقير، موضحًا العقلية والاستراتيجيات اللازمة لخلق الثروة.',
            "يتحدى الكتاب المعتقدات التقليدية حول المال ويشجع القراء على التفكير بشكل مختلف حول تراكم الثروة والاستقلال المالي.",


            "https://www.amazon.com/dp/B07QPQ8WBL?tag=uuid10-20",

            "أب غني أب فقير"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51j11vs7etL.jpg",


            "الكتاب الصغير",
            "للاستثمار",
            "السليم.",
            "John C. Bogle",


            "https://finsite-7i94.onrender.com/media/finMedia/commonSense.mp3",


            'يقدم الكتاب الصغير للحس السليم بقلم جون سي بوجل للقراء المبادئ الأساسية للاستثمار الناجح، مع التركيز على البساطة والتكاليف المنخفضة والاستراتيجيات طويلة المدى.',
            "يدعو بوجل إلى الاستثمار في المؤشرات والإدارة السلبية، مسلطًا الضوء على أهمية الاستمرار في المسار وتجنب توقيت السوق.",


            "https://www.amazon.com/dp/B077VYLVGP?tag=uuid10-20",

            "الكتاب الصغير_عن_الاستثمار_الفطري"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51AD3hQfMaL.jpg",


            "صعود",
            "المال",
            "",
            "Niall Ferguson",


            "https://finsite-7i94.onrender.com/media/finMedia/theAscent.mp3",


            'يتعمق كتاب البروفيسور نيال فيرجسون من جامعة هارفارد في التاريخ المالي للعالم، ويستكشف تطور أسواق البنوك والتأمين والعقارات.',
            "يقدم عمل فيرجسون سردًا آسرًا لكيفية تطور الأنظمة المالية بمرور الوقت لمواجهة التحديات الاقتصادية.",


            "https://www.amazon.com/dp/B001NXPJOU?tag=uuid10-20",

            "صعود_المال"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51BNR8FKwoL.jpg",


            "كيفية التجارة",
            "اليوم من أجل",
            "لقمة العيش.",
            "Andrew Aziz",


            "https://finsite-7i94.onrender.com/media/finMedia/dayTrade.mp3",


            'كتاب أندرو عزيز، كيفية التداول اليومي من أجل لقمة العيش، يقدم للمبتدئين دليلاً شاملاً لفهم التداول اليومي وتمييزه عن أساليب التداول الأخرى.',
            "إنه بمثابة نقطة انطلاق مثالية للمتداولين المبتدئين الذين يتطلعون إلى التعمق في عالم التداول اليومي.",


            "https://www.amazon.com/dp/B074TR5Y6M?tag=uuid10-20",

            "كيف_يوم_التداول"

        ],

        [

            
            "https://m.media-amazon.com/images/I/414UzZxaSFL.jpg",


            "الطريق البسيط",
            "إلى الثروة.",
            "خارطة طريق مالية.",
            "J L Collins",


            "https://finsite-7i94.onrender.com/media/finMedia/simpleWealth.mp3",


            'يقدم كتاب "الطريق البسيط إلى الثروة" بقلم جيه إل كولينز منهجًا مباشرًا للاستقلال المالي من خلال الاستثمار في صناديق المؤشرات والإنفاق الواعي.',
            "يمكن للقراء أن يتعلموا كيفية بناء الثروة وتحقيق الحرية من خلال استراتيجيات مباشرة موضحة في الكتاب.",


            "https://www.amazon.com/dp/B0725RFDPY?tag=uuid10-20",

            "الطريق_البسيط_إلى_الثروة"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41akHYVLQcS.jpg",


            "كن جيدًا",
            "بالمال.",
            "عشر خطوات بسيطة.",
            "Tiffany Aliche",


            "https://finsite-7i94.onrender.com/media/finMedia/getGoodMoney.mp3",


            'احصل على المال الجيد من تأليف تيفاني أليش وهو دليل عملي يمكّن القراء من التحكم في مواردهم المالية من خلال وضع الميزانية والادخار والاستثمار.',
            "تركز طريقة أليش على تحقيق الكمال المالي، ومعالجة مختلف جوانب التمويل الشخصي لتحقيق الرفاهية المالية الشاملة.",


            "https://www.amazon.com/dp/B08FMVWCWS?tag=uuid10-20",

            "احصل_على_الخير_بالمال"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41lW25KOvML.jpg",


            "مجموعة للحياة.",
            "السيطرة على",
            "والمال.",
            "Scott Trench",


            "https://finsite-7i94.onrender.com/media/finMedia/setForLife.mp3",


            'يقدم كتاب "جيد للحياة" بقلم سكوت ترينش إرشادات عملية حول تحقيق الاستقلال المالي من خلال الاستثمار العقاري، والمعيشة المقتصدة، وإدارة الأموال الاستراتيجية.',
            "يناقش الكتاب مبادئ التقاعد المبكر، والحرية المالية، وتراكم الثروة على المدى الطويل.",


            "https://www.amazon.com/dp/B071NLYJDF?tag=uuid10-20",

            "جيد_للحياة"

        ],









            // FANTASY BOOKS -------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/51ctosFnFiL.jpg",


            "ستيفن كينغز,",
            "حكاية خيالية",
            "",
            "Stephen King",


            "https://fansite.onrender.com/media/fanMedia/fairyTale.mp3",


            'الحكاية الخيالية لستيفن كينج هي رواية خيالية مظلمة تصور رحلة تشارلي ريد، وهو مراهق اندفع إلى معركة ذات أبعاد كونية.',
            "من خلال السرد القصصي المعقد والصور المفعمة بالحيوية، ينسج كينغ قصة عن السحر والخطر والمعركة الدائمة ضد الظلام.",


            "https://www.amazon.com/dp/B09R5ZPY6Y?tag=uuid10-20",

            "حكاية_خيالية"

        ],

        [

            
            "https://m.media-amazon.com/images/I/71jAUocj0OL._AC_UF1000,1000_QL80_DpWeblab_.jpg",


            "السعي وراء",
            "الظلال.",
            "كتاب اثنين من ثلاثة.",
            "JA Andrews",


            "https://fansite.onrender.com/media/fanMedia/pursuit.mp3",


            'في السعي وراء الظلال، الكتاب الثاني، بقلم جا أندروز، الدفعة الثانية من سجلات الحارس، يشرع الحارس ويليام في البحث عن مكان أخته المفقودة.',
            "تقدم الرواية لمسة منعشة لهذا النوع الخيالي من خلال التركيز على تصميم ويل الذي لا يتزعزع وسعيه إلى الأمل وسط الشدائد.",


            "https://www.amazon.com/dp/B08DL9DXJ1?tag=uuid10-20",

            "السعي_وراء_الظلال"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61e0RbnvobL.jpg",


            "إحياء",
            "المحكمة.",
            "الخيال الحضري",
            "Heather G. Harris",


            "https://fansite.onrender.com/media/fanMedia/revival.mp3",


            'انضم إلى حفل الزفاف المثير لجينكس وإيموري في الكتاب السابع من سلسلة عالم آخر من خلال دعوة تعطلت بسبب الاتصال المشؤوم.',
            "انغمس في هذه السلسلة الأكثر مبيعًا عالميًا من حيث الفكاهة والبطلات القويات والرومانسية الجذابة البطيئة.",


            "https://www.amazon.com/dp/B0CDDV8M1L?tag=uuid10-20",

            "إحياء_المحكمة"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51C7DCS8-XL.jpg",


            "قصة",
            "السحر.",
            "",
            "Chris Colfer",


            "https://fansite.onrender.com/media/fanMedia/witchCraft.mp3",


            'يثير هذا الكتاب الآسر مغامرات الطفولة الحنينية مع شخصيات القصص الخيالية المحبوبة.',
            "انضم إلى عالم الخضرة الساحر وابدأ في رحلة سحرية عبر عوالم الخيال والعجائب.",


            "https://www.amazon.com/dp/B0855C96DB?tag=uuid10-20",

            "أ_حكاية_السحر"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41Hph+dzEAL.jpg",


            "عصر البرونزية.",
            "لعبة لعب الأدوار المحصنة",
            "هي المغامرة الأساسية.",
            "Jez Cajiao",


            "https://fansite.onrender.com/media/fanMedia/bronze.mp3",


            'يتبع الكتاب سيد الزنزانة الذي يبحر في عالم ما بعد نهاية العالم، ويسعى جاهداً للبقاء والازدهار وسط الفوضى',
            "تتميز رحلة الشخصيات الرئيسية بالنضال والاعتماد على الحلفاء، مما يوفر مزيجًا فريدًا من تطور الشخصية والنمو الاستراتيجي.",


            "https://www.amazon.com/dp/B09XYZPFS7?tag=uuid10-20",

            "عصر_البرونز"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61Zxem3qIIL.jpg",


            "أطفال",
            "الدم",
            "والعظام.",
            "Tomi Adeyemi",


            "https://fansite.onrender.com/media/fanMedia/children.mp3",


            'أطفال الدم والعظام بقلم تومي أديمي هي رواية خيالية آسرة للشباب البالغين تقدم للقراء زيلي أديبولا الشجاعة في سعيها لإحياء السحر في مملكة أوريشا.',
            "تتعمق الرواية في موضوعات القمع والعنصرية واكتشاف الإمكانات الحقيقية للفرد وسط الشدائد.",


            "https://www.amazon.com/dp/B075NR7HC3?tag=uuid10-20",

            "أطفال_من_الدم"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61lKSG3bQlL.jpg",


            "سلسلة",
            "من الذهب.",
            "الساعات الاخيرة.",
            "Cassandra Clare",


            "https://fansite.onrender.com/media/fanMedia/chains.mp3",


            'في سلسلة كاساندرا كلير الذهبية، تواجه كورديليا كارستيرز، صائدة الظلال المصممة، اضطرابًا عائليًا وحبًا ممنوعًا لجيمس هيرونديل.',
            "مع دفع ثمن باهظ للبطولة، تستكشف الرواية الحب والتضحية والطريق الغادر لكونك صائد الظل.",


            "https://www.amazon.com/dp/B07L8CTB54?tag=uuid10-20",

            "سلسلة_من_الذهب"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51SvT6mQNcL.jpg",


            "الأساطير",
            "واللاتيه.",
            "",
            "Travis Baldree",


            "https://fansite.onrender.com/media/fanMedia/legends.mp3",


            'الأساطير والقهوة بالحليب من تأليف ترافيس بالدري هي رواية خيالية عالية آسرة مستوحاة من عالم الزنزانات والتنينات.',
            "بالاعتماد على خلفيته في تطوير ألعاب الفيديو والكتب الصوتية، يقوم بالدري بصياغة قصة مقنعة تلقى صدى لدى القراء، وتمزج بين السحر والحياة اليومية بسلاسة.",


            "https://www.amazon.com/dp/B0B3G97QY1?tag=uuid10-20",

            "الأساطير_و_اللاتيه"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51rjEmPGdqL.jpg",


            "الأمير",
            "التنين.",
            "احجز واحدا.",
            "Aaron Ehasz",


            "https://fansite.onrender.com/media/fanMedia/dragonPrince.mp3",


            'الأمير التنين هي رواية نالت استحسان النقاد وهي الآن أيضًا سلسلة رسوم متحركة خيالية على Netflix أنشأها آرون إهاز وجاستن ريتشموند.',
            "مع تزايد الترقب للمواسم القادمة، ينتظر المعجبون الفصل الأخير من المسلسل بفارغ الصبر، ويعدون بخاتمة ملحمية لهذه الحكاية الخيالية المحبوبة.",


            "https://www.amazon.com/dp/B0868X83NK?tag=uuid10-20",

            "الأمير_التنين"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51M+xgcE8hS.jpg",


            "ظل",
            "الآلهة",
            "",
            "John Gwynne",


            "https://fansite.onrender.com/media/fanMedia/shadowOfGods.mp3",


            'يقدم جون جوين ظل الآلهة عالمًا آسرًا مستوحى من الأساطير الإسكندنافية من خلال الحكايات المتشابكة لكل من أوكرا وألفار وفارج.',
            "ظل الآلهة يمهد الطريق لملحمة ملحمية، تنسج معًا مصائر أبطالها المقنعين في رحلة أسطورية مليئة بالإثارة.",


            "https://www.amazon.com/dp/B0942QJFMR?tag=uuid10-20",

            "ظل_الآلهة"

        ],









            // THRILLER BOOKS ------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/41kTCl6OwHL.jpg",


            "بليك كراوتش",
            "العودية,",
            "الرواية.",
            "Blake Crouch",


            "https://trhsite.onrender.com/media/thrMedia/recurssion.mp3",


            'رواية الخيال العلمي المثيرة لبليك كراوتش، العودية، تتعمق في تعقيدات الذاكرة والهوية والوقت.',
            "يقدم التكرار استكشافًا محيرًا للعقل لعواقب تغيير الماضي والآثار العميقة التي تحدثها على الأفراد والعالم من حولهم.",


            "https://www.amazon.com/dp/B07N2Y1T8G?tag=uuid10-20",

            "العودية"

        ],

        [

            
            "https://m.media-amazon.com/images/I/519tzZGSjDL.jpg",


            "فتاة اخرى.",
            "تحقيق بحيرة",
            "الملوك.",
            "Peter Grainger",


            "https://trhsite.onrender.com/media/thrMedia/anotherGirl.mp3",


            'في هذا التثبيت الجديد لسلسلة لغز البحيرة الملكية لبيتر غرينجر، يضع غرينجر شخصياته في خطر بمهارة، مما يضيف بعدًا مثيرًا إلى روايته الاستقصائية النموذجية',
            "هذه الرواية لا تقف وحدها فحسب، بل تمهد الطريق أيضًا لروايات مستقبلية مترابطة، مما يعد بمزيد من العمق والاستمرارية في السلسلة.",


            "https://www.amazon.com/dp/B0CP6FYQYD?tag=uuid10-20",

            "فتاة_اخرى"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51Egx-MwsmL.jpg",


            "القانون.",
            "رواية ملفات",
            "دريسدن.",
            "Jim Butcher",


            "https://trhsite.onrender.com/media/thrMedia/theLaw.mp3",


            'في رواية القانون لجيم بوتشر، تمزج الرواية مزيجًا من الخفة مع التطور الشامل للشخصية، وتتميز بوجوه مألوفة مثل ماركون وشخصيات جديدة.',
            "تتألق براعة بوتشر في سرد ​​القصص، مما يخلق عالمًا غنيًا بشخصيات مقنعة تجعل القراء يعودون للحصول على المزيد، مما يجعلها قراءة آسرة لكل من الجماهير الجديدة والعائدة.",


            "https://www.amazon.com/dp/B09Y26JXWM?tag=uuid10-20",

            "القانون"

        ],

        [

            
            "https://m.media-amazon.com/images/I/518Loxx15yL.jpg",


            "التنفس الأخير",
            "الخاص بك.",
            "فيلم جريمة وإثارة.",
            "Lisa Regan",


            "https://trhsite.onrender.com/media/thrMedia/breath.mp3",


            'تتفوق رواية ريجان للقصص في تقديم رؤية شاملة للشخصيات وتطوراتها، مما يوفر منظورًا سرديًا غنيًا.',
            "يقدم الكتاب قراءة مقنعة تدفع الشخصيات إلى مستويات جديدة، مما يشير إلى اتجاه جديد مثير للسلسلة.",


            "https://www.amazon.com/dp/B08PG6T6TL?tag=uuid10-20",

            "تنفس_الأخير"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51v8oSR3kfL.jpg",


            "سقوط",
            "ميت",
            "غير مختصرة.",
            "Brad Thor",


            "https://trhsite.onrender.com/media/thrMedia/deadFall.mp3",


            "في سقوط براد ثور القاتل، يندفع القراء إلى عالم من المؤامرات عالية المخاطر والمؤامرات القاتلة، في أعقاب عميل مكافحة الإرهاب سكوت هارفاث في مهمة للكشف عن مؤامرة عالمية شريرة.",
            'مع تحول التحالفات وخطر يلوح في الأفق، يتنقل "هارفاث" في منطقة غادرة حيث يختفي الأصدقاء والأعداء، مما يكشف عن مدى الخطر المخيف.',


            "https://www.amazon.com/dp/B0BJSGYC9G?tag=uuid10-20",

            "سقوط_ميت"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51fSqdLDzKL.jpg",


            "واحدة",
            "للأعمار.",
            "الجريمة الاسكتلندية.",
            "JD Kirk",


            "https://trhsite.onrender.com/media/thrMedia/theAges.mp3",


            'في كيركس وان للأعمار، الجزء السادس عشر من سلسلة جاك لوجان، اهتزت قرية نائية في المرتفعات بسبب أول جريمة قتل لامرأة مسنة.',
            "مع تصاعد المخاطر وتحطم الثقة، يجب على جاك أن يتنقل في شبكة من الخداع والخيانة لمنع المزيد من الخسائر في أرواح الأبرياء في هذه القصة المؤثرة المليئة بالغموض والتشويق.",


            "https://www.amazon.com/dp/B0BVN3QDKC?tag=uuid10-20",

            "واحد_للأعمار"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51JbIBTenfL.jpg",


            "الهدف",
            "الأخير.",
            "",
            "Christy Barritt",


            "https://trhsite.onrender.com/media/thrMedia/lastTarget.mp3",


            "في كريستي باريت الهدف الأخير، يتكشف تشويق رومانسي سريع الوتيرة مع شخصيات مقنعة وخطر لا هوادة فيه من الطلقة الأولى التي تم إطلاقها في الصفحة الأولى.",
            "بفضل موهبته في صياغة نهايات الفصل الجذابة، يُبقي باريت القراء على أهبة الاستعداد، ويدفعهم بسلاسة خلال السرد دون توقف.",


            "https://www.amazon.com/dp/B084DGGCW9?tag=uuid10-20",

            "الهدف_الأخير"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51tIkqFo4YL.jpg",


            "وهمية",
            "عميقة.",
            "",
            "Ward Larsen",


            "https://trhsite.onrender.com/media/thrMedia/deepFake.mp3",


            "في تزييف عميق لارسن، تتكشف القصة الجذابة مع شعور بالإلحاح عندما تتعمق سارة ريدجواي، زوجة عضو الكونجرس، في الحقيقة المقلقة وراء سلوك زوجها الغامض بعد هجوم إرهابي.",
            "يتنقل لارسن بمهارة بين الخطوط غير الواضحة بين الأخلاق والفساد، ويعرض المدى الذي سيذهب إليه الأفراد والأمم لتأمين السيطرة.",


            "https://www.amazon.com/dp/B0B64GJ57G?tag=uuid10-20",

            "وهمية_عميقة"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51EZVt1TXDL.jpg",


            "أنت.",
            "الرواية.",
            "",
            "Caroline Kepnes",


            "https://trhsite.onrender.com/media/thrMedia/you.mp3",


            'رواية كارولين كيبنيس المثيرة "أنت" تتبع الحكاية الجذابة التي يرويها جو غولدبرغ، وهو موظف في محل لبيع الكتب يقود القصة تركيزه على الكاتب الطموح بيك.',
            "انغمس في عالم جو وبيك مع نسخة الكتاب الإلكتروني المكونة من أربعة عشر كتابًا من كتب أتريا لهذه الرواية المشوقة للحصول على تجربة قراءة مثيرة وغامرة.",


            "https://www.amazon.com/dp/B00MTSML3K?tag=uuid10-20",

            "أنت"

        ],

        [

            
            "https://m.media-amazon.com/images/I/519awIMUOwL.jpg",


            "حافة الحرب.",
            "فيلم قوة",
            "النيابة العامة.",
            "Logan Ryles",


            "https://trhsite.onrender.com/media/thrMedia/brink.mp3",


            "في رايل حافة الحرب، تتكشف قصة الإثارة والحركة مع مزيج من الإثارة وأوجه القصور، حيث تمزج التسلسلات السريعة مع عدم الدقة في تفاصيل المعدات العسكرية. ",
            "مع ما يكفي من اللحظات المكثفة، تقدم حافة الحرب قصة متسقة وجذابة، وتقدم مزيجًا من الحركة والتبرير الذي قد يجعل القراء يتوقون إلى المزيد.",


            "https://www.amazon.com/dp/B0B88ZNHCM?tag=uuid10-20",

            "حافة_الحرب"

        ],









            // ADVENTURE BOOKS -----------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/51YmKe6vt0S.jpg",


            "له",
            "مواد داكنة.",
            "البوصلة الذهبية.",
            "Philip Pullman",


            "https://advsite.onrender.com/media/advMedia/goldCompass.mp3",


            "في هذه الثلاثية، يقدم فيليب بولمان للقراء عالمًا موازيًا تظهر فيه النفوس كشياطين، أي رفاق حيوانات خارجيين مرتبطين بمشاعر الأفراد وحواسهم.",
            "تشكل الديناميكيات المعقدة بين البشر وشياطينهم سردًا غنيًا يستكشف القوة والهوية والكفاح من أجل الهيمنة في مجتمع معقد.",


            "https://www.amazon.com/dp/B0000W6SPE?tag=uuid10-20",

            "مواده_المظلمة"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51K8lYxL12L.jpg",


            "هو من",
            "يحارب مع",
            "الوحوش. ب7",
            "Shirtaloon",


            "https://advsite.onrender.com/media/advMedia/whoFights.mp3",


            "تغمر هذه السلسلة الجذابة القراء في مزيج فريد من لعبة لعب الأدوار الأدبية والخيال التقدمي، حيث يجد جيسون نفسه في عالم سحري مليء بالتحديات والألغاز.",
            "يتطور السرد من بداية بطيئة إلى وتيرة ديناميكية، ونسج الفكاهة والحركة وتطورات الحبكة المعقدة التي تمتد عبر أبعاد وعوالم مختلفة.",


            "https://www.amazon.com/dp/B08V3XQ7LK?tag=uuid10-20",

            "هو_الذي_يقاتل_مع_الوحوش"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51-wFWg1IqL.jpg",


            "ال",
            "البحيرة السرية.",
            "مغامرة الأطفال الغامضة.",
            "Karen Inglis",


            "https://advsite.onrender.com/media/advMedia/lake.mp3",


            "لهذا السبب لديك القليل من الأرجل في قصة كارين إنجليس الساحرة، تشرع ستيلا وتوم في مغامرة السفر عبر الزمن عبر كهف مخفي، ويكشفان لغزًا عمره قرن من الزمان ويساعدان في تصحيح ظلم الماضي.",
            "تشجع القصة المؤثرة الأطفال على احتضان الفضول والتعاطف واحترام الآخرين بينما تشعل مخيلتهم بسحر الاكتشاف والصداقة.",


            "https://www.amazon.com/dp/B07TKNMS2W?tag=uuid10-20",

            "البحيرة_السرية"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51ZGAKat54L.jpg",


            "حياة",
            "من بي.",
            "",
            "Yann Martel",


            "https://advsite.onrender.com/media/advMedia/pi.mp3",


            "في حياة باي للكاتب يان مارتل، يروي بطل الرواية الشاب باي رحلته المروعة عبر المحيط الهادئ بعد غرق السفينة، برفقة نمر يدعى ريتشارد باركر.",
            "إن التقلبات والانعطافات المشوقة في القصة تجعل القراء منشغلين، مما يؤدي إلى الكشف الذروة في الفصول الأخيرة التي تربط كل الشكوك والأسئلة معًا.",


            "https://www.amazon.com/dp/B074WFYQ2K?tag=uuid10-20",

            "حياة_بي"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51hHoC1-kXL.jpg",


            "المحيط",
            "في نهاية",
            "لطريق.",
            "Neil Gaiman",


            "https://advsite.onrender.com/media/advMedia/theOcean.mp3",


            "تتبع رواية نيل جيمان الآسرة رجلاً يعود لزيارة منزل طفولته بعد جنازة، مما يقوده إلى مزرعة هيمبستوك الغامضة والمقيمات الأقوياء فيها.",
            "ينسج سرد جايمان قصة ساحرة عن الحنين والغموض، ويجذب القراء إلى عالم يتشابك فيه الماضي والحاضر بسلاسة.",


            "https://www.amazon.com/dp/B00CRKNR88?tag=uuid10-20",

            "المحيط_في_نهاية_الممر"

        ],

        [

            
            "https://m.media-amazon.com/images/I/61Wn9Ib7dZL.jpg",


            "بحر",
            "من الظلال.",
            "احجز واحدا",
            "Kelley Armstrong",


            "https://advsite.onrender.com/media/advMedia/sea.mp3",


            "في بحر الظلال، يجب على آشين وموريا، الأختان التوأم اللتان تعملان كحارس وباحث في إيدجوود، حماية أرضهما من الأرواح الانتقامية في غابة الموتى.",
            "تضيف العناصر الخيالية المظلمة طبقة جذابة من المؤامرات إلى السرد، وتأسر القراء بإلقاء خطابهم المروع والمقنع.",


            "https://www.amazon.com/dp/B00IA68P7G?tag=uuid10-20",

            "بحر_الظلال"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51aLv4Ty2KL.jpg",


            "خرافة",
            "الرواية",
            "",
            "Adrienne Young",


            "https://advsite.onrender.com/media/advMedia/fable.mp3",


            "في عالم خيالي لا يرحم، تتمحور الحكاية حول العثور على عائلة وسط خلفية من تحديات البقاء على قيد الحياة.",
            "تمزج الرواية بين عناصر التجار البحريين ومغامرات القراصنة، وتلتقط جوًا خطيرًا ومثيرًا حيث تتصادم الطواقم المتنافسة ويكمن الخطر عند كل منعطف.",


            "https://www.amazon.com/dp/B084P3JDYG?tag=uuid10-20",

            "خرافة"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51hl+fFHu1L.jpg",


            "الفتاة",
            "الذي شرب",
            "القمر.",
            "Kelly Barnhill",


            "https://advsite.onrender.com/media/advMedia/theMoon.mp3",


            "في الفتاة التي شربت القمر، تتكشف قصة العائلة والنمو والسحر. يتطور الكتاب من قصة بسيطة عن سحر لونا إلى قصة معقدة تتشابك مع خيوط مؤامرة مختلفة.",
            "هذا الخيال الأوسط العظيم، المليء بالحب والسحر والشخصيات المحببة، هو قراءة ممتعة موصى بها لعشاق الخيال.",


            "https://www.amazon.com/dp/B01JSHI3PY?tag=uuid10-20",

            "الفتاة_التي_شربت_القمر"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51zagX8CG9L.jpg",


            "الصيد",
            "أرضي",
            "",
            "Patricia Briggs",


            "https://advsite.onrender.com/media/advMedia/huntingGround.mp3",


            "في أرض الصيد، تضيف الصراعات الشخصية بين آنا وتشارلز طبقات إلى ديناميكيات علاقتهما، حيث يتصارع تشارلز مع مشاعر النقص وتتغلب آنا على مخاوفها.",
            "على الرغم من التنقل الماهر في الفروق الدقيقة في العلاقة، إلا أن الرغبة في استكشاف أعمق للروابط الشخصية والعلاقة الجسدية الحميمة لا تزال قائمة، مما يعكس التوق إلى تنمية شخصية أكثر حميمية.",


            "https://www.amazon.com/dp/B002MVI0XY?tag=uuid10-20",

            "ارض_للصيد"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51NE8Q+KNOL.jpg",


            "صبي، كلبه",
            "ونهاية",
            "من العالم.",
            "C.A. Fletcher",


            "https://advsite.onrender.com/media/advMedia/hisDog.mp3",


            "في هذه الحكاية الآسرة، يمزج رواية غريز المقنعة بين السذاجة والحكمة، ويرسم صورة حية للحياة بعد نهاية العالم.",
            "من خلال ملاحظات غريز الاستبطانية، تكون الرواية بمثابة تذكير دقيق ومؤثر لتداعيات الأفعال البشرية على البيئة.",


            "https://www.amazon.com/dp/B07QNLQBJV?tag=uuid10-20",

            "أ_الصبي_كلبه_ونهاية_العالم"

        ],









            // COMEDY BOOKS --------------------------------------------------------------------
            // /////////////////////////////////////////////////////////////////////////////////







        [

            
            "https://m.media-amazon.com/images/I/411mUToN0fL.jpg",


            "إِبداع.",
            "قصيرة و",
            "دليل البهجة.",
            "John Cleese",


            "https://comsite.onrender.com/media/comMedia/creativity.mp3",


            "في الإبداع، يقدم جون كليز لمحة آسرة عن العملية الإبداعية وراء الأعمال الشهيرة مثل مونتي بايثون وفولتي تاورز.",
            "هذا الدليل الموجز والمؤثر للإبداع العملي يلقى صدى لدى القراء الذين يبحثون عن منظور جديد للعملية الفنية.",


            "https://www.amazon.com/dp/B0899G43R5?tag=uuid10-20",

            "إِبداع"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41jd16DNLjS.jpg",


            "الكتاب السنوي.",
            "",
            "",
            "Seth Rogan",


            "https://comsite.onrender.com/media/comMedia/yearBook.mp3",


            "يبرز الكتاب السنوي لسيث روجن باعتباره قراءة ممتعة وجذابة، ومليئة بالقصص والمقالات الحقيقية التي تمتد من طفولته إلى حياته المهنية.",
            "وسط حكايات تعاطي المخدرات والتصرفات الغريبة، يتطرق روجن أيضًا إلى موضوعات أعمق مثل تراثه اليهودي وتجاربه مع معاداة السامية، ويعرض مزيجًا من الفكاهة والتأمل.",


            "https://www.amazon.com/dp/B08TX58CF6?tag=uuid10-20",

            "الكتاب السنوي"

        ],

        [

            
            "https://m.media-amazon.com/images/I/518DdYfSSeL.jpg",


            "كوميديا،",
            "الجنس,",
            "إله.",
            "Peter Holmes",


            "https://comsite.onrender.com/media/comMedia/comedy.mp3",


            "يروي بيت هولمز نشأته كمسيحي إنجيلي، والتي تأثرت بقواعد ومعتقدات أخلاقية صارمة.",
            "كوميدي الجنس الله هو استكشاف صريح للخسارة والنمو والمسارات غير المتوقعة للتنوير الروحي التي تنبثق من لحظات الحياة الأكثر تحديًا.",


            "https://www.amazon.com/dp/B07NNRBWFS?tag=uuid10-20",

            "كوميدي_الجنس_الله"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51giS8HsJRL.jpg",


            "مرتكز على",
            "قصة حقيقية.",
            "مذكرات.",
            "Norm Macdonald",


            "https://comsite.onrender.com/media/comMedia/trueStory.mp3",


            "نورم ماكدونالدز مبني على قصة حقيقية يتشابك مع قصة صعود الممثل الكوميدي الكندي الشهير إلى الشهرة في ساترداي نايت لايف مع قصة خيالية ملتوية حول كاتب شبح يقوم بصياغة مذكرات الممثل الكوميدي.",
            "يمزج الكتاب بذكاء بين الواقع والخيال، ويتعمق في موضوعات المقامرة وتعاطي المورفين وسخافات حياة المشاهير.",


            "https://www.amazon.com/dp/B01L0GDSHY?tag=uuid10-20",

            "استنادا_على_قصة_حقيقية"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41TjCZwbXmL.jpg",


            "سعيد",
            "كن محظوظا.",
            "",
            "David Sedaris",


            "https://comsite.onrender.com/media/comMedia/happy.mp3",


            "يتعمق ديفيد سيداريس في ماضيه المضطرب وديناميكيات عائلته الغريبة في هذا الكتاب، مما يعكس تأثير تربيته على منهجه الكوميدي.",
            "من اللقاءات المسلية مع شخصيات غريبة الأطوار إلى التأملات المؤثرة حول السخافات المجتمعية، يقدم سيداريس لمحة عن تعقيدات الفكاهة والتفاعلات الإنسانية في هذه المجموعة من رسومات السيرة الذاتية.",


            "https://www.amazon.com/dp/B09S3YDKT7?tag=uuid10-20",

            "سعيد_الحظ"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41ZMF7TuhkL.jpg",


            "جدا",
            "قابل للثقب",
            "وجه.",
            "Colin Jost",


            "https://comsite.onrender.com/media/comMedia/punchable.mp3",


            "تقدم مذكرات كولن جوست نظرة فكاهية وصريحة لرحلة حياته، من نشأته في جزيرة ستاتن إلى جامعة هارفارد وما بعدها.",
            "وسط ذروة استضافة جوائز إيمي والحوادث السريالية مثل الإنعاش القلبي الرئوي للراكون، يوازن سرد جوست بمهارة بين الفكاهة والتأملات الصادقة، ويعرض مرونة وذكاء الممثل الكوميدي والكاتب المخضرم.",


            "https://www.amazon.com/dp/B081KBHPJ6?tag=uuid10-20",

            "أ_وجه_قابل للثقب جدًا"

        ],

        [

            
            "https://m.media-amazon.com/images/I/41CrgJ90GsL.jpg",


            "هذا هو",
            "أي شئ؟",
            "",
            "Jerry Seinfeld",


            "https://comsite.onrender.com/media/comMedia/anything.mp3",


            "هل هذا أي شيء؟ يقدم استكشافًا شاملاً للحظات الحياة وتأملاتها، من الطفولة إلى الأبوة، والتي تم التقاطها على مدار عقود من المواد الكوميدية المصممة بدقة.",
            "يعد هذا التجميع بمثابة شهادة على فن الكوميديا، حيث يلخص منظور سينفيلد الفريد حول العالم وسعيه الدؤوب للعثور على الفكاهة في التجارب اليومية.",


            "https://www.amazon.com/dp/B084C2F7V7?tag=uuid10-20",

            "هل_هذا_أي شيء"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51UIsSCRlQL.jpg",


            "الجديد",
            "الكتاب المقدس الكوميدي.",
            "الدليل النهائي.",
            "Judy Carter",


            "https://comsite.onrender.com/media/comMedia/new.mp3",


            "يقدم الكتاب المقدس الكوميدي الجديد من تأليف جودي كارتر دليلاً شاملاً للكوميديين الطموحين، ويضم تعليمات خطوة بخطوة للكتابة والأداء وإطلاق مهنة كوميدية ناجحة.",
            "سواء كنت مبتدئًا أو محترفًا متمرسًا، فإن هذا الكتاب يوفر الأدوات والتقنيات اللازمة للانتقال من الأريكة إلى المسرح، مما يمهد الطريق لرحلة مجزية ومرضية في عالم الكوميديا.",


            "https://www.amazon.com/dp/B08SHZGGX4?tag=uuid10-20",

            "الكتاب_المقدس_الكوميدي_الجديد"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51B0698Ry1L.jpg",


            "كيف",
            "أن يكون مضحكا.",
            "",
            "Andy Gardner",


            "https://comsite.onrender.com/media/comMedia/howFunny.mp3",


            "كيف تكون مضحكا هو دليل أساسي لأولئك الذين يسعون إلى تعزيز مهاراتهم الكوميدية ويصبحوا حياة الحفلة.",
            "يعد هذا الكتاب، المليء بنصائح الخبراء والحكايات الفكاهية، أداة قيمة لأي شخص يتطلع إلى رفع حس الفكاهة لديه وإضفاء البهجة على من حوله.",


            "https://www.amazon.com/dp/B0CV5ZHZ7M?tag=uuid10-20",

            "كيف_أن_تكون_مضحكاً"

        ],

        [

            
            "https://m.media-amazon.com/images/I/51WOC9iRITL.jpg",


            "كوميديا.",
            "كوميديا.",
            "كوميديا. دراما.",
            "Bob Odenkirk",


            "https://comsite.onrender.com/media/comMedia/comedyX3.mp3",


            "كوميديا ​​كوميديا ​​دراما تتعمق في الحياة المهنية والتطور الكوميدي للممثل بوب أودينكيرك، المعروف بأدواره في البرامج التلفزيونية مثل الرجاء الاتصال بسول والسيد. يعرض.",
            "من خلال الحكايات البارعة والرؤى من وراء الكواليس، تكشف مذكرات أودينكيرك عن فنان متعدد الأوجه ترك بصمة لا تمحى على صناعة الترفيه.",


            "https://www.amazon.com/dp/B093HHM4XX?tag=uuid10-20",

            "كوميديا_كوميديا_كوميديا_دراما"

        ],


    ]


    var langaugeContentLoad = [

        
        arabicLoad,
        englishLoad

    ]

    var langaugeClassArray = [

        "klipsumLanguageDropDownItemOneHighlight",
        "klipsumLanguageDropDownItemTwoHighlight",
        "klipsumLanguageDropDownItemThreeHighlight",
        "klipsumLanguageDropDownItemFourHighlight",
        "klipsumLanguageDropDownItemFiveHighlight",


        "klipsumLanguageDropDownItemSixHighlight",
        "klipsumLanguageDropDownItemSevenHighlight",
        "klipsumLanguageDropDownItemEightHighlight",
        "klipsumLanguageDropDownItemNineHighlight",
        "klipsumLanguageDropDownItemTenHighlight",


        "klipsumLanguageDropDownItemElevenHighlight",
        "klipsumLanguageDropDownItemTwelveHighlight",
        "klipsumLanguageDropDownItemThirteenHighlight",
        "klipsumLanguageDropDownItemFourteenHighlight",
        "klipsumLanguageDropDownItemFifteenHighlight",
        
    ]

    var classNumberTracerAboveFive = [

        "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",

    ]

    var languagesAvailable = [

        "arb",
        "eng"

    ]

    var authorOwnership = [

        ":بواسطة",
        "By:"

    ]

    var errorMessageBox = [

        
        [

            "لا.",
            "بلغ الحد.",
            "حقل اسم الكتاب فارغ.",
            "حقل توصية كتاب فارغ.",
            "حقل التعليقات فارغ."

        ],
        [

            "Nope.",
            "Limit Reached.",
            "Empty book name Field.",
            "Empty book recommendation Field.",
            "Empty comments Field."

        ]

    ]

    var completedMessageBox = [

        [

            "تم إرسال التقديم! شكرا لك يا نجم الروك."

        ],
        [

            "Submission sent! Thank you, you rockstar."

        ]

    ]






        // ARRAY FOR PAGE STYLES ==============================================
        // ////////////////////////////////////////////////////////////////////

            var pageStyleSetter = []













        // ////////////////////////////////////////////////////////////////////
        // ARRAY FOR PAGE LANGAUGE CONTENT TRANSLATES =========================
        // ////////////////////////////////////////////////////////////////////


            // FOR MAIN CONTENT UPLOADED AT PAGE START xxxxxxxxxxxxxxxxxxxxxxxx
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                var pageMainContentsTranslateSetter = [


                    // ARABIC TRANSLATIONS LIST ===================================
                    // ////////////////////////////////////////////////////////////
                    
                        [ 

                            // NAV BAR ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "اقتراحات",

                            // INTRO SECTION ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "دقيقتين",
                                "هي كل ما تحتاجه",

                                "حصلت على دقيقتين؟ لدينا قراءات كتاب لمدة دقيقتين فقط لأجلك. ما عليك سوى اختيار كتاب ودعنا نقرأ لك دقيقتين منه. يجب أن أذهب قريبا جدا؟ ثم قم بتنزيله واستمع إليه أثناء التنقل",

                            // CONTACTS ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "قل كلمتك و",
                                "اخبرنا ماذا تعتقد",
                                "مثل ما تسمعه هنا؟ أم لا؟ لا بأس في كلتا الحالتين، نحن هنا لنصبح أفضل بما يرضيك. اترك لنا تعليقًا وأخبرنا بكتبك المفضلة للاستماع إليها. وقريبًا أيضًا، قم بإنشاء قصتك الخاصة.",

                                "اتصال مفتوح",

                            // GET BOOK BUTTON ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "احصل على كتاب",

                            // ANTI PIRACY LINE ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "وتذكر الأصدقاء، لا تسرق الكتب.",
                                "السخرية القادمة منا، ولكن على محمل الجد",
                                "شراء الكتاب بدلا من ذلك.",

                            // CONTACT FORM ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                // HEADLINE ELEMENTS ------------------------------
                                // ////////////////////////////////////////////////

                                    "حصلت على كتاب في الاعتبار؟",
                                    ".سمها وسنجدها",

                                // NAME FIELD ELEMENTS ----------------------------
                                // ////////////////////////////////////////////////

                                    "أعطنا اسمًا لنتذكرك به.",
                                    "أدخل الاسم المفضل",

                                // BOOK RECOMMENDATION FIELDS ELEMENTS ------------
                                // ////////////////////////////////////////////////

                                    "ما الكتاب الذي تنصح به؟",
                                    "أدخل اسم الكتاب",

                                // ADD BOOK TEXT ----------------------------------
                                // ////////////////////////////////////////////////

                                    "إضافة كتاب آخر",

                                // COMMENTS SECTION -------------------------------
                                // ////////////////////////////////////////////////

                                    "هل هناك أي شيء آخر تريد قوله؟",
                                    "...أخبرنا ماذا يدور في ذهنك أيضًا",
                                    "يوصي"


                        ],







                    // ENGLISH TRANSLATIONS LIST ==================================
                    // ////////////////////////////////////////////////////////////
                    
                        [ 

                            // NAV BAR ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "suggestions",

                            // INTRO SECTION ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "2 minutes",
                                "is all you need.",

                                "got 2 minutes? we've got 2 minute book readings just for you. Simply pick a book and let us read 2 minutes of if to you. Gotta go so soon? Then download it and listen on the go.",

                            // CONTACTS ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "Have your say &",
                                "Tell us what you think",
                                "Like what you are hearing here? or not? thats okay either way we are here to get better for your satisfaction. Drop us a comment, tell us your favorite books to listen to. Also, coming soon, create your own story.",

                                "open contact",

                            // GET BOOK BUTTON ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "get book",

                            // ANTI PIRACY LINE ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                "and remember friends, don't steal books.",
                                "ironic coming from us, but seriously,",
                                "buy the book instead.",

                            // CONTACT FORM ITEMS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////

                                // HEADLINE ELEMENTS ------------------------------
                                // ////////////////////////////////////////////////

                                    "got a book in mind?",
                                    "name it & we'll find it.",

                                // NAME FIELD ELEMENTS ----------------------------
                                // ////////////////////////////////////////////////

                                    "Give us a name to remember you by.",
                                    "enter preferred name",

                                // BOOK RECOMMENDATION FIELDS ELEMENTS ------------
                                // ////////////////////////////////////////////////

                                    "What book do you recommend?",
                                    "enter book name",

                                // ADD BOOK TEXT ----------------------------------
                                // ////////////////////////////////////////////////

                                    "add another book",

                                // COMMENTS SECTION -------------------------------
                                // ////////////////////////////////////////////////

                                    "Anything else you wanna say?",
                                    "tell us what else is on your mind...",
                                    "recommend"


                        ],
                    

                ]





            // FOR EXTRA ADDED CONTENT AFTER ADD xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                var addedInputFieldsTranslations = [


                    // ARABIC TRANSLATIONS LIST ===============================
                    // ////////////////////////////////////////////////////////

                        [

                            // INPUT FIELDS EXTRA CONTENT +++++++++++++++++++++
                            // ////////////////////////////////////////////////

                                "أدخل اسم الكتاب"

                        ],







                    // ENGLISH TRANSLATIONS LIST ==============================
                    // ////////////////////////////////////////////////////////

                        [

                            // INPUT FIELDS EXTRA CONTENT +++++++++++++++++++++
                            // ////////////////////////////////////////////////

                                "enter book name"
                            
                        ]


                ]




        // ////////////////////////////////////////////////////////////////////
        // ARRAY FOR PAGE LANGAUGE CONTENT TRANSLATES =========================
        // ////////////////////////////////////////////////////////////////////








// ////////////////////////////////////////////////////////////////////////////
// MAIN PAGE CONTENT ARRAY xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////


    var contentPopulateArrays = [];



// ////////////////////////////////////////////////////////////////////////////
// MAIN PAGE CONTENT ARRAY xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////































// CHECK LANGUAGE =============================================================
// ////////////////////////////////////////////////////////////////////////////

    if (
        
            sessionStorage.getItem("language") == "" ||
            sessionStorage.getItem("language") == undefined ||
            sessionStorage.getItem("language") == null 
    
        )


        {

            // LOAD UP ENGLISH PAGE CONTENT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                populatePageContent(englishLoad)
                

            // UPDATE LANGUAGE SELCTED TAG xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                languageDropDownSelected.textContent = "eng"


            // LOAD UP LEFT ALIGNED PAGE STYLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////////

                setPageStyle()


        }

    else  {

            // DECLARE VARIABLES FOR LANGUAGE CHECK ---------------------------
            // ////////////////////////////////////////////////////////////////

                var getLanguageStored = sessionStorage.getItem("language")

                var getPageDirection = sessionStorage.getItem("pageDirection")

                var getIndexOfLanguageRecorded = languagesAvailable.indexOf(getLanguageStored)

                var getLanguageContentLoad = langaugeContentLoad[getIndexOfLanguageRecorded]

                    // UPDATE CONTENT LOAD NUMBER ============================
                    // ///////////////////////////////////////////////////////

                        sessionStorage.setItem("translatorNumber", getIndexOfLanguageRecorded)



            // CHECK LANGUAGE RECORDED ------------------------------
            // //////////////////////////////////////////////////////

                if ( getLanguageStored != "eng" ) {


                    // LEFT ALIGNED LANGUAGES CHECK xxxxxxxxxxxxxxxxx
                    // //////////////////////////////////////////////

                        if ( getLanguageStored == "arb" ) {


                            // RUN ARABIC CONTENT LOAD =============
                            // /////////////////////////////////////

                                populatePageContent(getLanguageContentLoad)

                        }
                        
        
                    // DISPLACE LANGAUGE BAR FOR LANG xxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////

                        langaugeSelectBoxMain.style = `
                        
                            float:${getPageDirection};

                        `

                    // UPDATE LANGUAGE SELCTED TAG xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        languageDropDownSelected.textContent = getLanguageStored


                    // LOAD UP LEFT ALIGNED PAGE STYLES xxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        setPageStyle()



                } else {

                    // LOAD UP ENGLISH PAGE CONTENT xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        populatePageContent(getLanguageContentLoad)
                        
        
                    // DISPLACE LANGAUGE BAR FOR LANG xxxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        langaugeSelectBoxMain.style = `
                        
                            float:${getPageDirection};

                        `

                    // UPDATE LANGUAGE SELCTED TAG xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        languageDropDownSelected.textContent = getLanguageStored


                    // LOAD UP LEFT ALIGNED PAGE STYLES xxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////////

                        setPageStyle()



                }

        }


        





// LETS DISSAPEAR HUH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////


    // getBodyControl.setAttribute("oncontextmenu", ("return" + " " + false));


    // document.onkeydown = function (e) {

    //     // disable F12 key ON FN
    //     if(e.keyCode == 123) {

    //         location.reload();
    //         return false;

    //     }

    //     // disable F12 key OFF FN
    //     if(e.keyCode == 45) {

    //         location.reload();
    //         return false;

    //     }

    //     // disable I key
    //     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){

    //         location.reload();
    //         return false;
            
    //     }

    //     // disable J key
    //     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {

    //         location.reload();
    //         return false;
            
    //     }

    //     // disable U key
    //     if(e.ctrlKey && e.keyCode == 85) {
        
    //         location.reload();
    //         return false;

    //     }
    // }


    // document.addEventListener('contextmenu', event => event.preventDefault());


    // !function() {
    //     function detectDevTool(allow) {
    //       if(isNaN(+allow)) allow = 100;
    //       var start = +new Date(); // Validation of built-in Object tamper prevention.
    //       debugger;
    //       var end = +new Date(); // Validates too.
    //       if(isNaN(start) || isNaN(end) || end - start > allow) {
    //         // input your code here when devtools detected.

        
    //         location.reload();


    //       }
    //     }
    //     if(window.attachEvent) {
    //       if (document.readyState === "complete" || document.readyState === "interactive") {
    //           detectDevTool();
    //         window.attachEvent('onresize', detectDevTool);
    //         window.attachEvent('onmousemove', detectDevTool);
    //         window.attachEvent('onfocus', detectDevTool);
    //         window.attachEvent('onblur', detectDevTool);
    //       } else {
    //           setTimeout(argument.callee, 0);
    //       }
    //     } else {
    //       window.addEventListener('load', detectDevTool);
    //       window.addEventListener('resize', detectDevTool);
    //       window.addEventListener('mousemove', detectDevTool);
    //       window.addEventListener('focus', detectDevTool);
    //       window.addEventListener('blur', detectDevTool);
    //     }
    //   }();



// LETS DISSAPEAR HUH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////// 








// SELECT CONTENT UPLOAD =============================================
// ///////////////////////////////////////////////////////////////////



        // ARRAY FOR RANDOM FIVE CATCHER =================================
        // ///////////////////////////////////////////////////////////////

            var randomFiveCatcher = [];



        // ARRAY FOR BOOK COVER SOURCE LINK ==============================
        // ///////////////////////////////////////////////////////////////

            var bookCoverSourceLinkArray = [];

            // var bookCoverImage = bookCoverSourceLinkArray[0];



        // ARRAY FOR HEADLINER TEXT ======================================
        // ///////////////////////////////////////////////////////////////

            var headlinerTextArrayOne = [];
            var headlinerTextArrayTwo = [];
            var headlinerTextArrayThree = [];



        // ARRAY FOR AUTHOR TEXT =========================================
        // ///////////////////////////////////////////////////////////////

            var authorTextArray = [];



        // ARRAY FOR SONG PLAYE SOURCE LINK ==============================
        // ///////////////////////////////////////////////////////////////

            var songSourceLinkArray = [];



        // ARRAY FOR BOOK DESCRIPTIONS ===================================
        // ///////////////////////////////////////////////////////////////

            var descriptionTextOneArray = [];
            var descriptionTextTwoArray = [];



        // ARRAY FOR BOOK PURCHASE LINK ==================================
        // ///////////////////////////////////////////////////////////////

            var bookLinkArray = [];



        // ARRAY FOR SHORT HAND BOOK NAME ================================
        // ///////////////////////////////////////////////////////////////

            var bookNameShortName = [];

    













// ----------------------------------------------------------------------------
// BOOK CONTENT CONTAINER VAR REGISTER ////////////////////////////////////////
// ----------------------------------------------------------------------------



// BOOK PLAYER ELEMENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////

    var playButtonClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsPlayClicker`);

    var playButtonActual = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsPlayButtonActual`);

    

    var pauseButtonClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsPauseClicker`);

        var pauseButtonMain = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsPauseButtonActual`);
        var pauseButtonActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlPauseIconLineOne`);
        var pauseButtonActualTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlPauseIconLineTwo`);


    
    var stopButtonIcon = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsStopButtonActual`);



    var downloadButtonIconElemOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsDownloadCircleOne`);
    var downloadButtonIconElemTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsDownloadCircleTwo`);
    var downloadButtonIconElemThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsDownloadCircleThree`);
    var downloadButtonIconElemFour = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[elelemtClickedNumberMapper]}ControlsDownloadCircleFour`);








// ELEMENTS FOR BOOK CONTAINER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // FOR BOOK CONTENT BLCOK ONE =========================================
    // ////////////////////////////////////////////////////////////////////

        var songPlateSource = document.getElementById("audioPlateActualTrack");









































// ------------------------------------------------------------------------
// FUNCTIONS //////////////////////////////////////////////////////////////
// ------------------------------------------------------------------------

// EMAILER SCRIPT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function sendMail (classNumberMake) {


        // RUN INPUT BOX PARAMS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ////////////////////////////////////////////////////////////////

            var getMainField = document.querySelector(".bookNameInputsContainer")

            var getMainFieldChildrenNumber = getMainField.children.length

            var getComments = document.getElementById("comments").value


                // RUN COUNTER FOR FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////

                    for ( counter = 0; counter < getMainFieldChildrenNumber; counter ++ ) 

                        {  

                            var makeClassName = `extraBookName${classNumberMake[counter]}InputActual`

                            console.log("WHATS THIS: " + makeClassName)

                            var getBookNameInput = document.querySelector(`.${makeClassName}`)

                            if ( 
                                
                                    getBookNameInput.value == undefined || 
                                    getBookNameInput.value == ""

                                ) 
                                
                            {

                                console.log("NUN TO REPORT ON: " + counter)

                            } else {

                                getBookNamesCompiled += `Book recommendation ${(classNumberMake[counter]).toLowerCase()}: ${getBookNameInput.value}, `

                                console.log("BEANS: " + getBookNameInput.value)

                            }

                            

                        }

                            // ADD IN COMMENTS ---------------------------
                            // ///////////////////////////////////////////

                                getBookNamesCompiled += `Comment: ${getComments}`

                                console.log("LOG TEST ONE: ")


        let params = {

            name: document.getElementById("contributorName").value,

            message: getBookNamesCompiled

        }






            // SEND EMAIL USING EMAIL JS PARAMS //////////////////////////////
            // ///////////////////////////////////////////////////////////////

                emailjs.send("service_k266y6h","template_2fvxlj6",params).then(console.log(""))

    }
    



// ERROR HANDLING BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function errorHandlingBox (errorText) {




        // CHANGE BLOCK COLOR TO FAILURE ----------------------------------
        // ////////////////////////////////////////////////////////////////
    
            erroCompletedColorBoxContainer.style = `
            
                background:#ff9c9c;
    
            `
    
    
    
    
        // BRING DOWN ERROR HANDLING BLOCK --------------------------------
        // ////////////////////////////////////////////////////////////////

            erroHandlerMain.style = `
            
                top:5px;
                z-index:-3;
                opacity:0;
                display:block;

            `

                // FADE IN ////////////////////////////////////////////////
                // ////////////////////////////////////////////////////////

                    setTimeout(() => {

                        erroHandlerMain.style = `
            
                            top:15px;
                            z-index:5;
                            opacity:1;
                            display:block;

                        `

                    }, 100)






        // CHANGE ERROR TEXT ----------------------------------------------
        // ////////////////////////////////////////////////////////////////

            errorHandlerText.textContent = errorText




        // RESET ERROR HANDLING BLOCK -------------------------------------
        // ////////////////////////////////////////////////////////////////

            setTimeout(()=> {

                // FADE OUT ///////////////////////////////////////////////
                // ////////////////////////////////////////////////////////

                    erroHandlerMain.style = `
            
                        top:5px;
                        z-index:5;
                        opacity:0;
                        display:block;

                    `


                        setTimeout(() => {

                            // KILL BLOCK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                            // ////////////////////////////////////////////////
    
                                erroHandlerMain.style = `
                
                                    top:5px;
                                    z-index:-3;
                                    opacity:0;
                                    display:none;
    
                                `

                        } ,3600)

            }, 3000)

    }




// COMPLETE HANDLING BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

function completedHandlingBox (completedText) {




    // CHANGE BLOCK COLOR TO SUCCESS ----------------------------------
    // ////////////////////////////////////////////////////////////////

        erroCompletedColorBoxContainer.style = `
        
            background:#a8ff9c;

        `




    // BRING DOWN COMPLETED HANDLING BLOCK ----------------------------
    // ////////////////////////////////////////////////////////////////

        erroHandlerMain.style = `
        
            top:5px;
            z-index:-3;
            opacity:0;
            display:block;

        `

            // FADE IN ////////////////////////////////////////////////
            // ////////////////////////////////////////////////////////

                setTimeout(() => {

                    erroHandlerMain.style = `
        
                        top:15px;
                        z-index:5;
                        opacity:1;
                        display:block;

                    `

                }, 500)






    // CHANGE COMPLETED TEXT ------------------------------------------
    // ////////////////////////////////////////////////////////////////

        errorHandlerText.textContent = completedText




    // RESET COMPLETED HANDLING BLOCK ---------------------------------
    // ////////////////////////////////////////////////////////////////

        setTimeout(()=> {

            // FADE OUT ///////////////////////////////////////////////
            // ////////////////////////////////////////////////////////

                erroHandlerMain.style = `
        
                    top:5px;
                    z-index:5;
                    opacity:0;
                    display:block;

                `


                    setTimeout(() => {

                        // KILL BLOCK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                        // ////////////////////////////////////////////////

                            erroHandlerMain.style = `
            
                                top:5px;
                                z-index:-3;
                                opacity:0;
                                display:none;

                            `

                    } ,4100)

        }, 3500)

}

// OPEN AND CLOSE MENU BUTTONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function closeExtraContentMenu () {

        extraMenuSliderControl.style = `
        
            margin-left:0%;
            transition:all 600ms ease;
            -webkit-transition:all 600ms ease;
            -moz-transition:all 600ms ease;
            -o-transition:all 600ms ease;
            -ms-transition:all 600ms ease;

        `

            // RETRACT ENTIRE EXTRA MENU ----------------------------------
            // ////////////////////////////////////////////////////////////

                setTimeout(() => {

                    extraMenuEntireContainer.style = `
                    
                        left:-250%;
                        transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                    
                    `

                        setTimeout(() => {

                            // THEN MOVE BACKWARDS OUT OF BOUNDS xxxxxxxxxxxxxxxxxx
                            // ////////////////////////////////////////////////////
    
                                extraMenuEntireContainer.style = `
                                
                                    z-index:-1;
                                    left:-250%;
                                    transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;
    
                                `

                        }, 1000)

                }, 100)

    }

// OPEN CONTACT SCREEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function openContactScreen () {

        // BRING CLOSE CLICKER FORWARD ------------------------------------
        // ////////////////////////////////////////////////////////////////

            cloaseButtonContact.style = `
                
                    z-index:2;

                `

        // MAKE CONTACT DISPLAY VISIBLE ----------------------------------
        // ///////////////////////////////////////////////////////////////

            mainContactForm.style = `
            
                display:block;

            `

                // FADE IN CONTACT CONTAINER //////////////////////////////////
                // //////////////////////////////////////////////////////

                    setTimeout(() => {


                        mainContactForm.style = `
                        
                            opacity:1;
                            display:block;
    
                        `


                    }, 300)

            

    }

// CLOSE CONTACT SCREEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function closeContactScreen () {

        // SEND THIS CLICKER AWAY ----------------------------------------
        // ///////////////////////////////////////////////////////////////

            cloaseButtonContact.style = `
            
                z-index:-1;

            `

        // FADE THE CONTAINER AWAY ---------------------------------------
        // ///////////////////////////////////////////////////////////////

            mainContactForm.style = `
            
                opacity:0;

            `

                // REMOVE FROM DISPLAY //////////////////////////////////
                // //////////////////////////////////////////////////////

                    setTimeout(() => {


                        mainContactForm.style = `
                        
                            display:none;
    
                        `


                    }, 600)

    }
















    

// FUNCTIONS FOR OPEN DEEP DIVER MENU xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function openBookMenu () {

        // OPEN EXTRA CONTENT MENU ---------------------------------------
        // ///////////////////////////////////////////////////////////////

            // FIRST BRING FORWARD EXTRA CONTENT xxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                extraMenuEntireContainer.style = `
                                    
                    z-index:3;
                    left:-250%;
                    transition:all 600ms ease;
                    -webkit-transition:all 600ms ease;
                    -moz-transition:all 600ms ease;
                    -o-transition:all 600ms ease;
                    -ms-transition:all 600ms ease;

                `

                    // THEN BRING IN MAIN EXTRA CONTENT MENU ============
                    // //////////////////////////////////////////////////

                        setTimeout(() => {

                            // SLIDE CONTAINER TO BOOK DEEP DIVE SECTION xxxxxxxxxxxxxxxx
                            // //////////////////////////////////////////////////////////
            
                                extraMenuSliderControl.style = `
                                
                                    margin-left:0%;
                                    z-index:3;
                                
                                `


                                extraMenuEntireContainer.style = `
                                        
                                    z-index:3;
                                    left:0%;
                                    transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;

                                `

                        }, 200)
    }
















    

// FUNCTIONS FOR LANGUAGE DROP DOWN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // DROP DOWN OPEN MENU ------------------------------------------------
    // ////////////////////////////////////////////////////////////////////

        function openLanguageMenu () {

            // CHANGE ICON STANCES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownIconLineOne.style = `
                
                    transform:rotateZ(135deg)

                `

                languageDropDownIconLineTwo.style = `
                
                    transform:rotateZ(-135deg)

                `

            // MOVE CLICKER BACKWARDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownOn.style = `
                
                    z-index:-1;

                `

            // MOVE CLICKER BACKWARDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownOff.style = `
                
                    z-index:1;

                `

            // BRING UP LANGUAGE SELECTORS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownSelectMenu.style = `
                
                    display:block;

                `

                    setTimeout(() => {

                        languageDropDownSelectMenu.style = `
                        
                        
                            opacity:1;
                            display:block;
                            margin-top:60px;

                        `

                    },200)

                    



        }








    // DROP DOWN CLOSE MENU -----------------------------------------------
    // ////////////////////////////////////////////////////////////////////

        function closeLanguageMenu () {

            // CHANGE ICON STANCES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownIconLineOne.style = `
                
                    transform:rotateZ(45deg)

                `

                languageDropDownIconLineTwo.style = `
                
                    transform:rotateZ(-45deg)

                `

            

            // MOVE CLICKER BACKWARDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownOff.style = `
                
                    z-index:-1;

                `

            // MOVE CLICKER BACKWARDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownOn.style = `
                
                    z-index:1;

                `

            // BRING UP LANGUAGE SELECTORS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                languageDropDownSelectMenu.style = `
                
                        opacity:0;
                        display:block;
                        margin-top:30px;

                `

                    setTimeout(() => {

                        languageDropDownSelectMenu.style = `
                        
                        
                            display:none;

                        `

                    },600)



        }








    // SELECTED LANGUAGE --------------------------------------------------
    // ////////////////////////////////////////////////////////////////////

        function selectedLanguage () {

            

            // DECLARE VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////

                var getClassNameNumber = langaugeClassArray.indexOf(selectedLanguageClicker)

                var makeClassString = `klipsumLanguageDropDownItem${classNumberTracerAboveFive[getClassNameNumber]}Highlight`

                var getElement = document.querySelector(`.${makeClassString}`)

            

            // RESET DROP DOWN ICONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////
                

                languageDropDownIconLineOne.style = `
                
                    transform:rotateZ(45deg)

                `

                languageDropDownIconLineTwo.style = `
                
                    transform:rotateZ(-45deg)

                `




            // RESET CLICKERS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////

                languageDropDownOff.style = `
                
                    z-index:-1;

                `

                languageDropDownOn.style = `
                
                    z-index:1;

                `




            // CLOSE MENU xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////

                languageDropDownSelectMenu.style = `
                
                        opacity:0;
                        display:block;
                        margin-top:30px;

                `

                    setTimeout(() => {

                        languageDropDownSelectMenu.style = `
                        
                        
                            display:none;

                        `

                    },600)










            // UPDATE TEXT FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////


                    // CHECK IF LANGUAGE IS A RIGHT OR LEFT xxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////

                        if (getElement.textContent == "arb") {

                            contentDirectionSwitch = "left"

                        } else {

                            contentDirectionSwitch = "right"

                        }




                    // UPDATE TEXT FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////
                        
                        languageDropDownSelected.textContent = getElement.textContent



                        
        
                    // DISPLACE LANGAUGE BAR FOR LANG ONE xxxxxxxxxxxxxxxxx
                    // ////////////////////////////////////////////////////

                        langaugeSelectBoxMain.style = `
                        
                            float:${contentDirectionSwitch};

                        `


                        

                        
                        
            // SET SESSION STORAGE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////

                sessionStorage.setItem("pageDirection", contentDirectionSwitch)
                sessionStorage.setItem("language", languageDropDownSelected.textContent)

                                
                        
                        
                        
            // RESET PAGE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            // ////////////////////////////////////////////////////////////

                location.reload()



        }








            // PAGE LANGUAGE TRANSLATES -----------------------------------
            // ////////////////////////////////////////////////////////////


                // TRANSLATION CONTENT SETUP ==============================
                // ////////////////////////////////////////////////////////

                    function pageTranslationContentSetup () {



                        // GET STORED TRANSLATION QUE =====================
                        // ////////////////////////////////////////////////

                            var getTransLationQue = sessionStorage.getItem("translatorNumber")


                        // CHECK IF STORED ELEMENT EXISTS OR NOT ==========
                        // ////////////////////////////////////////////////


                            // IF ELEMENT DOES NOT EXIST LOAD DEFAULT LANG 
                            // ///////////////////////////////////////////

                                if ( 
                                    
                                        getTransLationQue == null ||
                                        getTransLationQue == undefined ||
                                        getTransLationQue == ""
                                    
                                    )

                                    {

                                        var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                        if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {


                                            errorMessage = errorMessageBox[1][0]
    
                                            // errorHandlingBox(errorMessage);


                                        } else {


                                            errorMessage = errorMessageBox[getTranslatorNumber][0]
    
                                            // errorHandlingBox(errorMessage);


                                        }

                                    }


                            // IF ELEMENT DOES EXIST LOAD SELECTED LANG ==
                            // ///////////////////////////////////////////

                                else {



                                    

                                    // GET TRANSLATION CONTENT ARRAY ==================
                                    // ////////////////////////////////////////////////

                                        var getTranslationArray = pageMainContentsTranslateSetter[getTransLationQue]

                                    // DECLARE MIAN VARIABLES FOR PAGE ELEMENTS =======
                                    // ////////////////////////////////////////////////

                                        var introHeadTextOne = document.querySelector(".klipsumHeaderIntroLineOne")
                                        var introHeadTextTwo = document.querySelector(".klipsumHeaderIntroLineTwo")
                    
                                        var introBodyText = document.querySelector(".klipsumSubHeaderTextResizer")
                    
                                        var contactHeadTextOne = document.querySelector(".sideMenuSuggestionsSideHeaderOne")
                                        var contactHeadTextTwo = document.querySelector(".sideMenuSuggestionsSideHeaderTwo")

                                        var contactBodyText = document.querySelector(".sideMenuSuggestionsSideBodyText")

                                        var contactButtonText = document.querySelector(".sideMenuSuggestionsSideContactButtonText")

                                        var deepDiveGetBookButtonText = document.querySelector(".sideMenuDeepDiveSideGetBookButtonActual")

                                        var antiPiracyLineHeadlineOne = document.querySelector(".antiPriacyLineActualOne")
                                        var antiPiracyLineHeadlineTwo = document.querySelector(".antiPriacyLineActualTwo")
                                        var antiPiracyLineHeadlineThree = document.querySelector(".antiPriacyLineActualThree")




                                            // CONTACT FORM CONTENTS CONTAINER xxxxxxxx
                                            // ////////////////////////////////////////

                                                // CONTRIBUTORS NAME ==================
                                                // ////////////////////////////////////

                                                    var contributorsNameLabel = document.querySelector(".contributorNameLabelStyle");

                                                // BOOK RECOMMENDATION ================
                                                // ////////////////////////////////////

                                                    var contributorsBookNameLabel = document.querySelector(".bookNameLabelStyle");

                                                // COMMENTS ===========================
                                                // ////////////////////////////////////

                                                    var commentsLabel = document.querySelector(".commentsLabelStyle");



                                    // PLACE ELEMENTS IN ARRAY ========================
                                    // ////////////////////////////////////////////////

                                        var elementsToPopulate = [



                                            // NAV BAR ELEMENTS =======================
                                                    
                                                suggestionsButton,


                                            // INTRO SECTION ELEMENTS =================

                                                introHeadTextOne,
                                                introHeadTextTwo,

                                                introBodyText,


                                            // CONTACT SECTION ELEMENTS ===============

                                                contactHeadTextOne,
                                                contactHeadTextTwo,

                                                contactBodyText,

                                                contactButtonText,


                                            // CONTACT SECTION ELEMENTS ===============

                                                deepDiveGetBookButtonText,


                                            // ANTI PIRACY LINE =======================

                                                antiPiracyLineHeadlineOne,
                                                antiPiracyLineHeadlineTwo,
                                                antiPiracyLineHeadlineThree,


                                            // CONTACT FORM FIELDS CONTAINER ==========
                                            // ========================================

                                                // HEADLINE TEXT ----------------------

                                                    contactHeadlinerTextOne,
                                                    contactHeadlinerTextTwo,

                                                // CONTRIBUTORS NAME ------------------

                                                    contributorsNameLabel,
                                                    userNameField,

                                                // BOOK RECOMMENDATION ----------------

                                                    contributorsBookNameLabel,
                                                    bookNameFieldOne,

                                                // ADD BOOK BUTTON --------------------

                                                    addBookText,

                                                // COMMENTS ---------------------------

                                                    commentsLabel,
                                                    commentsBlock,

                                                // SUBMIT BUTTON ----------------------

                                                    submitButton





                                        ]





                                    // MAKE LANGUAGE CHANGES TO ELEMENTS ==============
                                    // ////////////////////////////////////////////////

                                        // RUN POPULATE PAGE ITEMS TRANSLATIONS -------
                                        // ////////////////////////////////////////////

                                            for ( translationPopCounter = 0; translationPopCounter < getTranslationArray.length; translationPopCounter++ ) 
                                                
                                                {


                                                    // CHECK INPUT STATUS xxxxxxxxxxxxx
                                                    // ////////////////////////////////

                                                        // MAKE VARS TYPE CHECK =======
                                                        // ////////////////////////////

                                                            var isThisInputType = elementsToPopulate[translationPopCounter].tagName


                                                            

                                                        // IF INPUT TYPE --------------
                                                        // ////////////////////////////

                                                            if ( 
                                                                
                                                                isThisInputType == "INPUT" ||
                                                                isThisInputType == "TEXTAREA"
                                                            
                                                            ) {
                                                    
                                                                elementsToPopulate[translationPopCounter].setAttribute("placeholder", getTranslationArray[translationPopCounter])

                                                            }

                                                        // IF ANY OTHER ELEMENT -------
                                                        // ////////////////////////////

                                                            else {
                                                    
                                                                elementsToPopulate[translationPopCounter].textContent = getTranslationArray[translationPopCounter]

                                                            }

                                                }






                                }




                        


                            

                    }


                        // RUN PAGE CONTENTS TRANSLATIONS =================
                        // ////////////////////////////////////////////////
                        
                            pageTranslationContentSetup()






    // CONTENT FILL FUNCTION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        function populatePageContent (contentLibraryLoader) {

            for (contentLoadCounter = 0; contentLoadCounter < contentLibraryLoader.length; contentLoadCounter++) {

                // RUN ENGLISH CONTENT LOAD ===================================
                // ////////////////////////////////////////////////////////////

                    contentPopulateArrays.push(contentLibraryLoader[contentLoadCounter])
        
            }


        }






    // PAGE STYLE SETTER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        function setPageStyle () {












            // CHECK WHAT SIDE THE PAGE IS DIRECTED TO ///////////////////
            // ///////////////////////////////////////////////////////////

                // IF PAGE IS SOMEHOW NOT DIRECTED =======================
                // ///////////////////////////////////////////////////////

                    if ( contentDirectionSwitch == "" ) {

                        sessionStorage.setItem("language", "eng")
                        sessionStorage.setItem("pageDirection","right")

                        location.reload()

                    }

                // IF PAGE IS DIRECTED LEFT ==============================
                // ///////////////////////////////////////////////////////

                    else if ( contentDirectionSwitch == "left" ) {




                        // RUN LOOP TO AFFECT ALL BOOK ITEMS xxxxxxxxxxxxxxxxxx
                        // ////////////////////////////////////////////////////

                            for ( bookItemCountSet = 0; bookItemCountSet < 5; bookItemCountSet++ ) {









                                // GET VARIABLES FOR CLASS MAKE ///////////////////////////////
                                // ///////////////////////////////////////////////////////////
                    
                                    var makeClassNumber = classNumberMiddleCounter[bookItemCountSet]
                    
                                // GET PAGE VARIABLES TO STYLE ///////////////////////////////
                                // ///////////////////////////////////////////////////////////
                    
                                    // NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        var logoContainer = document.querySelector(".klipsumNavBarLogoSide")
                    
                                        var suggestionsContainer = document.querySelector(".klipsumNavBarContentSide")
                                        var suggestionsTextActual = document.querySelector(".klipsumNavBarContentItemOne")
                    
                                    // INTRO AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        var headlinerTextContainer = document.querySelector(".klipsumHeaderIntroContainer")
                    
                                        var headlinerTextOne = document.querySelector(".klipsumHeaderIntroLineOne")
                                        var headlinerTextTwo = document.querySelector(".klipsumHeaderIntroLineTwo")
                    
                                        var bodyTextContainer = document.querySelector(".klipsumSubHeaderTextContainer")
                                        var bodyTextResizer = document.querySelector(".klipsumSubHeaderTextResizer")
                    
                                        var dividerCircleOne = document.querySelector(".klipsumLineDividerBlockOne")
                                        var dividerCircleTwo = document.querySelector(".klipsumLineDividerBlockTwo")
                                        var dividerCircleThree = document.querySelector(".klipsumLineDividerBlockThree")
                    
                                    // EXPANDED BOOK AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////

                                        var expandBookCover = document.querySelector(".sideMenuDeepDiveSideBookCoverContainer")
                                        var expandBookTitle = document.querySelector(".sideMenuDeepDiveSideHeaderContainer")

                                        var expandAuthor = document.querySelector(".sideMenuDeepDiveSideSubHeaderContainer")

                                        var expandDescription = document.querySelector(".sideMenuDeepDiveSideDescriptionTextContainer")
                    
                                    // CONTACT US AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////

                                        var contactHeadlinerOne = document.querySelector(".sideMenuSuggestionsSideHeaderOne")
                                        var contactHeadlinerTwo = document.querySelector(".sideMenuSuggestionsSideHeaderTwo")

                                        var contactMainContainer = document.querySelector(".sideMenuSuggestionsSideBodyTextContainer")
                                        var contactBodyText = document.querySelector(".sideMenuSuggestionsSideBodyText")
                    
                                    // BOOK SHELF ITEM AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        // ITEM BOOK ONE -------------------------------------
                                        // ///////////////////////////////////////////////////
                    
                                            // BOOK COVER SIDE ===============================
                                            // ///////////////////////////////////////////////
                    
                                                var bookCoverSideOne = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}ImageContainer`)
                    
                                            // BOOK DETAILS SIDE =============================
                                            // ///////////////////////////////////////////////
                    
                                                var bookNameDetailsSide = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlineMainContainer`)
                                                var bookNameTextLineOne = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextOne`)
                                                var bookNameTextLineTwo = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextTwo`)
                                                var bookNameTextLineThree = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextThree`)
                    
                    
                    
                                                var bookAuthorDetailsSide = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}AuthorMainContainer`)
                                                var bookAuthorTextLine = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}AuthorTextTwo`)











                        

                                // NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
    
                                    logoContainer.style = ` float:right; `
    
                                    suggestionsContainer.style = ` float:left; `
                                    suggestionsTextActual.style = ` float:left; text-align:center; `
    
                                // INTRO AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
    
                                    headlinerTextContainer.style = ` width:300px; `
    
                                    headlinerTextOne.style = ` text-align:right; `
                                    headlinerTextTwo.style = ` text-align:right; `
    
                                    bodyTextContainer.style = ` width:300px; text-align:right; `
                                    bodyTextResizer.style = ` float:right; width:270px; `
    
                                    dividerCircleOne.style = `float:right; margin-left:10px; `
                                    dividerCircleTwo.style = ` float:right; margin-left:10px; `
                                    dividerCircleThree.style = ` float:right; margin-left:0px; `
    
                                // EXPANDED BOOK AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////

                                    expandBookCover.style = ` float:right; margin-left:0px; margin-right:35px; `
                                    expandBookTitle.style = ` text-align:right; `
                                    expandAuthor.style = ` text-align:right; `
                                    expandDescription.style = ` text-align:right; `
    
                                // CONTACT AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////

                                    contactHeadlinerOne.style = ` text-align:right; `
                                    contactHeadlinerTwo.style = ` text-align:right; `

                                    contactMainContainer.style = ` width:100%; display:inline-table; `
                                    contactBodyText.style = ` width:90%; float:right; text-align:right; `
                
                                        // FORM AREA -------------------------------------
                                        // ///////////////////////////////////////////////

                                            userNameField.style = ` text-align:right; `
                                            bookNameFieldOne.style = ` text-align:right; `
                                            addBookText.style = ` float:right; `
                                            commentsBlock.style = ` text-align:right; `


    
                                // BOOK SHELF ITEM AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
                
                                    // ITEM BOOK ONE -------------------------------------
                                    // ///////////////////////////////////////////////////
                
                                        // BOOK COVER SIDE ===============================
                                        // ///////////////////////////////////////////////
    
                                            bookCoverSideOne.style = ` float:right; margin-left:0px; margin-right:20px; `
    
                                        // BOOK DETAILS SIDE =============================
                                        // ///////////////////////////////////////////////
    
                                            bookNameDetailsSide.style = ` width:53%; `
    
                                            bookNameTextLineOne.style = ` text-align:right; `
                                            bookNameTextLineTwo.style = ` text-align:right; `
                                            bookNameTextLineThree.style = ` text-align:right; `
    
    
                                            bookAuthorDetailsSide.style = `  `
                                            bookAuthorTextLine.style = ` text-align:right; `



                            }



                        
                    } 

                // IF PAGE IS DIRECTED RIGHT =============================
                // ///////////////////////////////////////////////////////

                    else if ( contentDirectionSwitch == "right" ) {




                        // RUN LOOP TO AFFECT ALL BOOK ITEMS xxxxxxxxxxxxxxxxxx
                        // ////////////////////////////////////////////////////

                            for ( bookItemCountSet = 0; bookItemCountSet < 5; bookItemCountSet++ ) {







                                

                                // GET VARIABLES FOR CLASS MAKE ///////////////////////////////
                                // ///////////////////////////////////////////////////////////
                    
                                    var makeClassNumber = classNumberMiddleCounter[bookItemCountSet]
                    
                                // GET PAGE VARIABLES TO STYLE ///////////////////////////////
                                // ///////////////////////////////////////////////////////////
                    
                                    // NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        var logoContainer = document.querySelector(".klipsumNavBarLogoSide")
                    
                                        var suggestionsContainer = document.querySelector(".klipsumNavBarContentSide")
                                        var suggestionsTextActual = document.querySelector(".klipsumNavBarContentItemOne")
                    
                                    // INTRO AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        var headlinerTextContainer = document.querySelector(".klipsumHeaderIntroContainer")
                    
                                        var headlinerTextOne = document.querySelector(".klipsumHeaderIntroLineOne")
                                        var headlinerTextTwo = document.querySelector(".klipsumHeaderIntroLineTwo")
                    
                                        var bodyTextContainer = document.querySelector(".klipsumSubHeaderTextContainer")
                                        var bodyTextResizer = document.querySelector(".klipsumSubHeaderTextResizer")
                    
                                        var dividerCircleOne = document.querySelector(".klipsumLineDividerBlockOne")
                                        var dividerCircleTwo = document.querySelector(".klipsumLineDividerBlockTwo")
                                        var dividerCircleThree = document.querySelector(".klipsumLineDividerBlockThree")
                    
                                    // EXPANDED BOOK AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////

                                        var expandBookCover = document.querySelector(".sideMenuDeepDiveSideBookCoverContainer")
                                        var expandBookTitle = document.querySelector(".sideMenuDeepDiveSideHeaderContainer")

                                        var expandAuthor = document.querySelector(".sideMenuDeepDiveSideSubHeaderContainer")

                                        var expandDescription = document.querySelector(".sideMenuDeepDiveSideDescriptionTextContainer")
                    
                                    // CONTACT US AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////

                                        var contactHeadlinerOne = document.querySelector(".sideMenuSuggestionsSideHeaderOne")
                                        var contactHeadlinerTwo = document.querySelector(".sideMenuSuggestionsSideHeaderTwo")

                                        var contactMainContainer = document.querySelector(".sideMenuSuggestionsSideBodyTextContainer")
                                        var contactBodyText = document.querySelector(".sideMenuSuggestionsSideBodyText")
                    
                                    // BOOK SHELF ITEM AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                    // ///////////////////////////////////////////////////////
                    
                                        // ITEM BOOK ONE -------------------------------------
                                        // ///////////////////////////////////////////////////
                    
                                            // BOOK COVER SIDE ===============================
                                            // ///////////////////////////////////////////////
                    
                                                var bookCoverSideOne = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}ImageContainer`)
                    
                                            // BOOK DETAILS SIDE =============================
                                            // ///////////////////////////////////////////////
                    
                                                var bookNameDetailsSide = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlineMainContainer`)
                                                var bookNameTextLineOne = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextOne`)
                                                var bookNameTextLineTwo = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextTwo`)
                                                var bookNameTextLineThree = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}HeadlinerTextThree`)
                    
                    
                    
                                                var bookAuthorDetailsSide = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}AuthorMainContainer`)
                                                var bookAuthorTextLine = document.querySelector(`.klipsumBookShelfBook${makeClassNumber}AuthorTextTwo`)











                        

                                // NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
    
                                    logoContainer.style = ` float:left; `
    
                                    suggestionsContainer.style = ` float:right; `
                                    suggestionsTextActual.style = ` float:right; text-align:center; `
    
                                // INTRO AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
    
                                    headlinerTextContainer.style = ` width:300px; `
    
                                    headlinerTextOne.style = ` text-align:left; `
                                    headlinerTextTwo.style = ` text-align:left; `
    
                                    bodyTextContainer.style = ` width:300px; text-align:left; `
                                    bodyTextResizer.style = ` float:left; width:270px; `
    
                                    dividerCircleOne.style = `float:left; margin-left:0px; `
                                    dividerCircleTwo.style = ` float:left; margin-left:10px; `
                                    dividerCircleThree.style = ` float:left; margin-left:10px; `
    
                                // EXPANDED BOOK AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////

                                    expandBookCover.style = ` float:left; margin-left:35px; margin-right:0px; `
                                    expandBookTitle.style = ` text-align:left; `
                                    expandAuthor.style = ` text-align:left; `
                                    expandDescription.style = ` text-align:left; `
    
                                // CONTACT AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////

                                    contactHeadlinerOne.style = ` text-align:left; `
                                    contactHeadlinerTwo.style = ` text-align:left; `

                                    contactMainContainer.style = ` width:90%; display:block; `
                                    contactBodyText.style = ` width:100%; float:none; text-align:left; `
                
                                        // FORM AREA -------------------------------------
                                        // ///////////////////////////////////////////////

                                            userNameField.style = ` text-align:left; `
                                            bookNameFieldOne.style = ` text-align:left; `
                                            addBookText.style = ` float:left; `
                                            commentsBlock.style = ` text-align:left; `


    
                                // BOOK SHELF ITEM AREA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ///////////////////////////////////////////////////////
                
                                    // ITEM BOOK ONE -------------------------------------
                                    // ///////////////////////////////////////////////////
                
                                        // BOOK COVER SIDE ===============================
                                        // ///////////////////////////////////////////////
    
                                            bookCoverSideOne.style = ` float:left; margin-left:20px; margin-right:0px; `
    
                                        // BOOK DETAILS SIDE =============================
                                        // ///////////////////////////////////////////////
    
                                            bookNameDetailsSide.style = ` width:53%; `
    
                                            bookNameTextLineOne.style = ` text-align:left; `
                                            bookNameTextLineTwo.style = ` text-align:left; `
                                            bookNameTextLineThree.style = ` text-align:left; `
    
                                            
                                            bookAuthorDetailsSide.style = `  `
                                            bookAuthorTextLine.style = ` text-align:left; `



                            }



                        
                    } 

        }



// CREATE NEW BOOK INPUT ==================================================
// ////////////////////////////////////////////////////////////////////////

    function createNewBookInputField () {

        // DECLARE VARIABLES FOR THIS SECTION xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ////////////////////////////////////////////////////////////////

            // GET LANGUAGE AND PAGE DIRECTION ----------------------------
            // ////////////////////////////////////////////////////////////

                var getPageDirectionForInputCreate = sessionStorage.getItem("pageDirection")
                var getPageLanguageTranslation = sessionStorage.getItem("language")

                var languageSelectedForInput = languagesAvailable.indexOf(getPageLanguageTranslation)


            // COUNT HOW MANY FIELDS EXIST INSIDE THIS MAIN CONTAINER -----
            // ////////////////////////////////////////////////////////////

                var getNumberOfDivs = bookNameFieldsContainer.childElementCount

                var numberOfDivsForClassMaker = classNumberMiddleCounter[getNumberOfDivs]






        // MAKE NEW INPUT FIELD ELEMENT FUNCTION xxxxxxxxxxxxxxxxxxxxxxxxxx
        // ////////////////////////////////////////////////////////////////

            // FOR DEFAULT ENGLISH PAGE LOAD ------------------------------
            // ////////////////////////////////////////////////////////////

                function defaultEnglishLoad () {








                                


                                    
                                    // CHECK IF NUMBER OF FIELDS DOE NOT EXCEED 5 -----------------
                                    // ////////////////////////////////////////////////////////////

                                        if ( getNumberOfDivs != 3 ) {



                                            // COUNT INPUTS AND SEE IF THEY ARE EMPTY AND MOVE FROM THERE
                                            // ////////////////////////////////////////////////////

                                                var getDivsContainer = document.querySelector(".bookNameInputsContainer")

                                                var getNumberOfInputs = getDivsContainer.children.length

                                                var makeNumberReductionForClass = (getNumberOfInputs - 1)

                                                var makeInputClassName = `extraBookName${classNumberMiddleCounter[makeNumberReductionForClass]}InputActual`

                                                var getLatestInput = document.querySelector(`.${makeInputClassName}`)


                                            // CHECK IF FIRST FIELD IS FILLED AND THEN CREATE NEW ONE IF EMPTY
                                            // ////////////////////////////////////////////////////

                                                if ( 
                                                    
                                                    getLatestInput.value == "" || 
                                                    getLatestInput.value.length < 4
                                                
                                                ) {

                                                    console.log("Not happy...")

                                                } else {




                                                    // CREATE MAIN INPUT SURROUNDING CONTAINER ------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newInputField = document.createElement("div")
                                                        newInputField.className = `extraBookName${numberOfDivsForClassMaker}FieldContainer`

                                                            // STYLE MAIN CONTAINER ======================
                                                            // ///////////////////////////////////////////

                                                                newInputField.style = `
                                                                
                                                                    width:100%;
                                                                    margin-top:20px;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // APPEND FIELD SURROUNDER INTO MAIN FIELD CONTAINER
                                                            // ////////////////////////////////////////////

                                                                bookNameFieldsContainer.appendChild(newInputField)










                                                    // CREATE INPUT BUFFER ZONE CONTAINER -----------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newBufferField = document.createElement("div")
                                                        newBufferField.className = `extraBookName${numberOfDivsForClassMaker}BufferContainer`

                                                            // STYLE BUFFER CONTAINER ====================
                                                            // ///////////////////////////////////////////

                                                                newBufferField.style = `
                                                                
                                                                    width:100%;
                                                                    padding:10px 0px;
                                                                    border-radius:5px;
                                                                    background:#FFFFFF;
                                                                    box-shadow:0px 20px 30px -10px rgba(0, 0, 0, 0.3);
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // APPEND FIELD BUFFER TO SURROUNDER BLOCK ====
                                                            // ////////////////////////////////////////////

                                                                newInputField.appendChild(newBufferField)








                                                    


                                                    // CREATE INPUT ELEMENT ACTUAL ------------------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newInputActualField = document.createElement("input")
                                                        newInputActualField.className = `extraBookName${numberOfDivsForClassMaker}InputActual`

                                                            // STYLE INPUT ELEMENT ACTUAL =================
                                                            // ///////////////////////////////////////////

                                                            newInputActualField.style = `
                                                                
                                                                    width:90%;
                                                                    outline:none;
                                                                    margin:0px auto;
                                                                    text-align:left;
                                                                    background:rgba(0, 0, 0, 0.0);
                                                                    font-family:'Oxygen', sans-serif;
                                                                    border:0px solid rgba(0, 0, 0, 0.0);
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // ADD ATTRIBUTES TO INPUT ELEMENT ACTUAL ====
                                                            // ///////////////////////////////////////////

                                                                newInputActualField.setAttribute("type","text")
                                                                newInputActualField.setAttribute("maxlength","30")
                                                                newInputActualField.setAttribute("id",`extraBookName${numberOfDivsForClassMaker}InputActual`)
                                                                newInputActualField.setAttribute("name",`extraBookName${numberOfDivsForClassMaker}InputActual`)
                                                                newInputActualField.setAttribute("placeholder","enter book name")

                                                            // APPEND INPUT ELEMENT ACTUAL TO FIELD BUFFER BLOCK
                                                            // ////////////////////////////////////////////

                                                                newBufferField.appendChild(newInputActualField)

                                                            // RESET TEXT ALIGNER .........................
                                                            // ////////////////////////////////////////////

                                                            textAligner = ""




                                                }


                                            



                                        } else {

                                            var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                            if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                            

                                                errorMessage = errorMessageBox[1][1]
        
                                                errorHandlingBox(errorMessage);


                                            } else {
                                            

                                                errorMessage = errorMessageBox[getTranslatorNumber][1]
        
                                                errorHandlingBox(errorMessage); 


                                            }

                                        }





                            


                }





            // FOR DEFAULT ENGLISH PAGE LOAD ------------------------------
            // ////////////////////////////////////////////////////////////

                function selectedLanguageLoad () {


                    

                var getTranslatedTray = addedInputFieldsTranslations[languageSelectedForInput][0] 








                                


                                    
                                    // CHECK IF NUMBER OF FIELDS DOE NOT EXCEED 5 -----------------
                                    // ////////////////////////////////////////////////////////////

                                        if ( getNumberOfDivs != 3 ) {



                                            // COUNT INPUTS AND SEE IF THEY ARE EMPTY AND MOVE FROM THERE
                                            // ////////////////////////////////////////////////////

                                                var getDivsContainer = document.querySelector(".bookNameInputsContainer")

                                                var getNumberOfInputs = getDivsContainer.children.length

                                                var makeNumberReductionForClass = (getNumberOfInputs - 1)

                                                var makeInputClassName = `extraBookName${classNumberMiddleCounter[makeNumberReductionForClass]}InputActual`

                                                var getLatestInput = document.querySelector(`.${makeInputClassName}`)


                                            // CHECK IF FIRST FIELD IS FILLED AND THEN CREATE NEW ONE IF EMPTY
                                            // ////////////////////////////////////////////////////

                                                if ( 
                                                    
                                                    getLatestInput.value == "" || 
                                                    getLatestInput.value.length < 4
                                                
                                                ) {

                                                    console.log("Not happy...")

                                                } else {






                                                    // CREATE MAIN INPUT SURROUNDING CONTAINER ------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newInputField = document.createElement("div")
                                                        newInputField.className = `extraBookName${numberOfDivsForClassMaker}FieldContainer`

                                                            // STYLE MAIN CONTAINER ======================
                                                            // ///////////////////////////////////////////

                                                                newInputField.style = `
                                                                
                                                                    width:100%;
                                                                    margin-top:20px;
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // APPEND FIELD SURROUNDER INTO MAIN FIELD CONTAINER
                                                            // ////////////////////////////////////////////

                                                                bookNameFieldsContainer.appendChild(newInputField)










                                                    // CREATE INPUT BUFFER ZONE CONTAINER -----------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newBufferField = document.createElement("div")
                                                        newBufferField.className = `extraBookName${numberOfDivsForClassMaker}BufferContainer`

                                                            // STYLE BUFFER CONTAINER ====================
                                                            // ///////////////////////////////////////////

                                                                newBufferField.style = `
                                                                
                                                                    width:100%;
                                                                    padding:10px 0px;
                                                                    border-radius:5px;
                                                                    background:#FFFFFF;
                                                                    box-shadow:0px 20px 30px -10px rgba(0, 0, 0, 0.3);
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // APPEND FIELD BUFFER TO SURROUNDER BLOCK ====
                                                            // ////////////////////////////////////////////

                                                                newInputField.appendChild(newBufferField)








                                                    // CHANGE DIRECTION FOR TEXT ALIGN --------------------
                                                    // ////////////////////////////////////////////////////

                                                        var textAligner = getPageDirectionForInputCreate

                                                        if ( getPageDirectionForInputCreate == "left" ) {

                                                            textAligner = "right"

                                                        } else {

                                                            textAligner = "left"

                                                        }


                                                    // CREATE INPUT ELEMENT ACTUAL ------------------------
                                                    // ////////////////////////////////////////////////////
                                        
                                                        var newInputActualField = document.createElement("input")
                                                        newInputActualField.className = `extraBookName${numberOfDivsForClassMaker}InputActual`

                                                            // STYLE INPUT ELEMENT ACTUAL =================
                                                            // ///////////////////////////////////////////

                                                            newInputActualField.style = `
                                                                
                                                                    width:90%;
                                                                    outline:none;
                                                                    margin:0px auto;
                                                                    text-align:${textAligner};
                                                                    background:rgba(0, 0, 0, 0.0);
                                                                    font-family:'Oxygen', sans-serif;
                                                                    border:0px solid rgba(0, 0, 0, 0.0);
                                                                    transition:all 600ms ease;
                                                                    -o-transition:all 600ms ease;
                                                                    -ms-transition:all 600ms ease;
                                                                    -moz-transition:all 600ms ease;
                                                                    -webkit-transition:all 600ms ease;

                                                                `

                                                            // ADD ATTRIBUTES TO INPUT ELEMENT ACTUAL ====
                                                            // ///////////////////////////////////////////

                                                                newInputActualField.setAttribute("type","text")
                                                                newInputActualField.setAttribute("maxlength","30")
                                                                newInputActualField.setAttribute("id",`extraBookName${numberOfDivsForClassMaker}InputActual`)
                                                                newInputActualField.setAttribute("name",`extraBookName${numberOfDivsForClassMaker}InputActual`)
                                                                newInputActualField.setAttribute("placeholder",`${getTranslatedTray}`)

                                                            // APPEND INPUT ELEMENT ACTUAL TO FIELD BUFFER BLOCK
                                                            // ////////////////////////////////////////////

                                                                newBufferField.appendChild(newInputActualField)

                                                            // RESET TEXT ALIGNER .........................
                                                            // ////////////////////////////////////////////

                                                            textAligner = ""






                                                }


                                            



                                        } else {

                                            var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                            if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                            

                                                errorMessage = errorMessageBox[1][1]
        
                                                errorHandlingBox(errorMessage);


                                            } else {
                                            

                                                errorMessage = errorMessageBox[getTranslatorNumber][1]
        
                                                errorHandlingBox(errorMessage); 


                                            }

                                        }





                            


                }


            // CHECK PAGE LANGAUGE AND ADD TRANSLATIONS -------------------
            // ////////////////////////////////////////////////////////////

                // CHECK IF SESSION ITEM EXISTS OR NOT xxxxxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////

                    // IF NOT THEN DEFAULT TO ENGLISH >>>>>>>>>>>>>>>>>>>>>
                    // ////////////////////////////////////////////////////

                            if ( 
                                
                                    ( 
                                        
                                        getPageDirectionForInputCreate == null  ||
                                        getPageDirectionForInputCreate == undefined  ||
                                        getPageDirectionForInputCreate == ""
                                    
                                    ) ||



                                    ( 
                                        
                                        getPageLanguageTranslation == null  ||
                                        getPageLanguageTranslation == undefined  ||
                                        getPageLanguageTranslation == ""
                                    
                                    ) 
                                
                                ) 
                                
                            {

                                defaultEnglishLoad()

                            }





                    // IF SO THEN CHANGE TO SELECTED LANGUAG >>>>>>>>>>>>>>
                    // ////////////////////////////////////////////////////

                            else {

                                selectedLanguageLoad()

                            }


    }
















    

// FUNCTIONS FOR OPEN DEEP DIVER MENU SUGGESTIONS SIDE xxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function openDeepDiveMenuSuggestionsSide () {

        // OPEN EXTRA CONTENT MENU ---------------------------------------
        // ///////////////////////////////////////////////////////////////

            // FIRST BRING FORWARD EXTRA CONTENT xxxxxxxxxxxxxxxxxxxxxxxxx
            // ///////////////////////////////////////////////////////////

                extraMenuEntireContainer.style = `
                                    
                    z-index:3;
                    left:-250%;
                    transition:all 600ms ease;
                    -webkit-transition:all 600ms ease;
                    -moz-transition:all 600ms ease;
                    -o-transition:all 600ms ease;
                    -ms-transition:all 600ms ease;

                `

                    // THEN BRING IN MAIN EXTRA CONTENT MENU ============
                    // //////////////////////////////////////////////////

                        setTimeout(() => {

                            // SLIDE CONTAINER TO BOOK DEEP DIVE SECTION xxxxxxxxxxxxxxxx
                            // //////////////////////////////////////////////////////////
            
                                extraMenuSliderControl.style = `
                                
                                    margin-left:-100%;
                                    z-index:3;
                                
                                `


                                extraMenuEntireContainer.style = `
                                        
                                    z-index:3;
                                    left:0%;
                                    transition:all 600ms ease;
                                    -webkit-transition:all 600ms ease;
                                    -moz-transition:all 600ms ease;
                                    -o-transition:all 600ms ease;
                                    -ms-transition:all 600ms ease;

                                `

                        }, 200)
    }
















    

// FUNCTIONS FOR ICON RESETS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // FOR PLAY BUTTON ====================================================
    // ////////////////////////////////////////////////////////////////////

        function elementsPlayBlock (classHopper) {

            // ARRAYS ----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                var classNumberReference = [

                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "Five"

                ]

                var classNumberArrays = []


                    // COMPARE AND POPULATE ARRAY FOR CLASSNAMES NUMBS ---
                    // ///////////////////////////////////////////////////

                        for (
                            
                                populateCounter = 0;
                                populateCounter != classNumberReference.length;
                                populateCounter ++
                            
                            ) {


                                // IF HOPPER NUMBER IS INCLUDED THEN SKIP =
                                // ////////////////////////////////////////

                                    if ( 
                                        
                                        classHopper != classNumberReference[populateCounter] &&

                                        (
                                            classNumberReference[populateCounter] != undefined || 
                                            classNumberReference[populateCounter] != null
                                        ) 

                                    ) 
                                        
                                        {

                                            classNumberArrays.push(classNumberReference[populateCounter])

                                        } 

                                    
                                // IF HOPER NUMBER DOESNT EXIST THEN PUSH =
                                // ////////////////////////////////////////

                                    else {

                                    }

                            }






            // VARS ------------------------------------------------------
            // ///////////////////////////////////////////////////////////

                // SET ONE CLICKERS VARIABLES ============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayClicker`)

                    var pauseButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseClicker`)

                    var stopButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonClickerOn`)

                    var downloadButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadButtonClickerOn`)

                    var enterButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterButtonClickerOn`)

                // SET ONE STYLES VARIABLES ==============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedIcon = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayButtonActual`)

                    var pauseButtonSelectedActualOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseButtonActual`)

                        var pauseButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineOne`)
                        var pauseButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineTwo`)

                    var stopButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonActual`)

                    var downCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleOne`)
                    var downCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleTwo`)
                    var downCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleThree`)
                    var downCircButtonSelectedIconFour = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleFour`)

                    var menuCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleOne`)
                    var menuCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleTwo`)
                    var menuCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleThree`)





                // SET TO CHANGE =========================================
                // ///////////////////////////////////////////////////////


                    // RUN FOR LOOP TO SWITCH OFF OTHER ELEMENTS =========
                    // ///////////////////////////////////////////////////


                        for ( 
                            
                                classNumbCounter = 0;
                                classNumbCounter != classNumberArrays.length;
                                classNumbCounter ++ 
                        
                            ) {


                                // DECLARE VARIABLES FOR CLICKERS xxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayClicker`)

                                    var pauseButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseClicker`)

                                    var stopButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonClickerOn`)
                
                                    var downloadButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadButtonClickerOn`)
                
                                    var enterButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterButtonClickerOn`)


                                // DECLARE VARIABLES FOR STYLES xxxxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherIcon = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayButtonActual`)

                                    var pauseButtonOtherActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseButtonActual`)

                                            var pauseButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineOne`)
                                            var pauseButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineTwo`)
    
                                    var stopButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonActual`)
    
                                    var downCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleOne`)
                                    var downCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleTwo`)
                                    var downCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleThree`)
                                    var downCircButtonOtherIconFour = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleFour`)
    
                                    var menuCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleOne`)
                                    var menuCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleTwo`)
                                    var menuCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleThree`)




                                // CHANGE STATES OF CLICKERS xxxxxxxxxxxxx
                                // ///////////////////////////////////////


                                    playButtonOtherClicker.style = `
                                    
                                        z-index:1;
                                    
                                    `

                                    pauseButtonOtherClicker.style = `
                                    
                                        z-index:-1;
                                    
                                    `




                                // CHANGE STYLES TO DEFAULT xxxxxxxxxxxxxx
                                // ///////////////////////////////////////

                                    // SET PLAY TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        playButtonOtherIcon.style = `
                                            
                                                opacity:1;

                                            `

                                                // SET PAUSE TO READY MODE
                                                // ///////////////////////

                                                    pauseButtonOtherActualOne.style = `
                                                    
                                                        opacity:0;

                                                    `

                                                    pauseButtonOtherIconOne.style = `
                                                    
                                                        background:#c7b09a;

                                                    `

                                                    pauseButtonOtherIconTwo.style = `
                                                    
                                                        background:#c7b09a;

                                                    `








                                    // SET STOP TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        stopButtonOtherClicker.style = `
                                        
                                            z-index:-1;

                                        `


                                            // SET STOP TO STANDBY STYLE x
                                            // ///////////////////////////

                                                stopButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#c7b09a;
                                                
                                                `



                                                




                                    // SET DOWNLOAD TO USED STYLE xxxxxxxx
                                    // ///////////////////////////////////

                                        downloadButtonOtherClicker.style = `
                                        
                                            z-index:1;

                                        `

                                            // SET DOWNLOAD TO STANDBY STYLE
                                            // ///////////////////////////

                                                downCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconFour.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                                                






                                    // SET MENU TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        enterButtonOtherClicker.style = `
                                        
                                            z-index:2;

                                        `

                                            // SET MENU TO STANDBY STYLE x
                                            // ///////////////////////////

                                                menuCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                            }


                                

                            
                        


                    

                    








            // STYLE CHANGES FOR MAIN ITEMS ------------------------------
            // ///////////////////////////////////////////////////////////

                // SET PLAY CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedClicker.style = `
                    
                        z-index:-1;

                    `

                // SET PLAY TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedIcon.style = `
                    
                        opacity:0;

                    `








                // SET STOP CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    pauseButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `

                        // SET PAUSE TO READY MODE -----------------------
                        // ///////////////////////////////////////////////

                            pauseButtonSelectedActualOne.style = `
                            
                                opacity:1;

                            `

                            pauseButtonSelectedIconOne.style = `
                            
                                background:#FFFFFF;

                            `

                            pauseButtonSelectedIconTwo.style = `
                            
                                background:#FFFFFF;

                            `













                // SET STOP CLICKER AVAILABLE STYLE xxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////


                    stopButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `


                        // SET STOP TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            stopButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `











                            



                // SET DOWNLOAD CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    downloadButtonSelectedClicker.style = `
                    
                        z-index:-1;

                    `

                        // SET DOWNLOAD TO STANDBY STYLE xxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            downCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#c7b09a;
                            
                            `


                            downCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#c7b09a;
                            
                            `


                            downCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#c7b09a;
                            
                            `


                            downCircButtonSelectedIconFour.style = `
                            
                                opacity:1;
                                background:#c7b09a;
                            
                            `











                            




                // SET MENU CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    enterButtonSelectedClicker.style = `
                    
                            z-index:2;

                    `


                        // SET MENU TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            menuCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `

        }










    // FOR PAUSE BUTTON ===================================================
    // ////////////////////////////////////////////////////////////////////

        function elementsPauseBlock (classHopper) {

            // ARRAYS ----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                var classNumberReference = [

                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "Five"

                ]

                var classNumberArrays = []


                    // COMPARE AND POPULATE ARRAY FOR CLASSNAMES NUMBS ---
                    // ///////////////////////////////////////////////////

                        for (
                            
                                populateCounter = 0;
                                populateCounter != classNumberReference.length;
                                populateCounter ++
                            
                            ) {


                                // IF HOPPER NUMBER IS INCLUDED THEN SKIP =
                                // ////////////////////////////////////////

                                    if ( 
                                        
                                        classHopper != classNumberReference[populateCounter] &&

                                        (
                                            classNumberReference[populateCounter] != undefined || 
                                            classNumberReference[populateCounter] != null
                                        ) 

                                    ) 
                                        
                                        {

                                            classNumberArrays.push(classNumberReference[populateCounter])

                                        } 

                                    
                                // IF HOPER NUMBER DOESNT EXIST THEN PUSH =
                                // ////////////////////////////////////////

                                    else {

                                    }

                            }






            // VARS ------------------------------------------------------
            // ///////////////////////////////////////////////////////////

                // SET ONE CLICKERS VARIABLES ============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayClicker`)

                    var pauseButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseClicker`)

                    var stopButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonClickerOn`)

                    var downloadButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadButtonClickerOn`)

                    var enterButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterButtonClickerOn`)

                // SET ONE STYLES VARIABLES ==============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedIcon = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayButtonActual`)

                    var pauseButtonSelectedActualOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseButtonActual`)

                        var pauseButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineOne`)
                        var pauseButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineTwo`)

                    var stopButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonActual`)

                    var downCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleOne`)
                    var downCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleTwo`)
                    var downCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleThree`)
                    var downCircButtonSelectedIconFour = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleFour`)

                    var menuCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleOne`)
                    var menuCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleTwo`)
                    var menuCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleThree`)





                // SET TO CHANGE =========================================
                // ///////////////////////////////////////////////////////


                    // RUN FOR LOOP TO SWITCH OFF OTHER ELEMENTS =========
                    // ///////////////////////////////////////////////////


                        for ( 
                            
                                classNumbCounter = 0;
                                classNumbCounter != classNumberArrays.length;
                                classNumbCounter ++ 
                        
                            ) {


                                // DECLARE VARIABLES FOR CLICKERS xxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayClicker`)

                                    var pauseButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseClicker`)

                                    var stopButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonClickerOn`)
                
                                    var downloadButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadButtonClickerOn`)
                
                                    var enterButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterButtonClickerOn`)


                                // DECLARE VARIABLES FOR STYLES xxxxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherIcon = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayButtonActual`)

                                    var pauseButtonOtherActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseButtonActual`)

                                            var pauseButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineOne`)
                                            var pauseButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineTwo`)
    
                                    var stopButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonActual`)
    
                                    var downCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleOne`)
                                    var downCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleTwo`)
                                    var downCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleThree`)
                                    var downCircButtonOtherIconFour = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleFour`)
    
                                    var menuCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleOne`)
                                    var menuCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleTwo`)
                                    var menuCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleThree`)




                                // CHANGE STATES OF CLICKERS xxxxxxxxxxxxx
                                // ///////////////////////////////////////


                                    playButtonOtherClicker.style = `
                                    
                                        z-index:1;
                                    
                                    `

                                    pauseButtonOtherClicker.style = `
                                    
                                        z-index:-1;
                                    
                                    `




                                // CHANGE STYLES TO DEFAULT xxxxxxxxxxxxxx
                                // ///////////////////////////////////////

                                    // SET PLAY TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        playButtonOtherIcon.style = `
                                            
                                                opacity:1;

                                            `

                                                // SET PAUSE TO READY MODE
                                                // ///////////////////////

                                                    pauseButtonOtherActualOne.style = `
                                                    
                                                        opacity:0;

                                                    `

                                                    pauseButtonOtherIconOne.style = `
                                                    
                                                        background:#c7b09a;

                                                    `

                                                    pauseButtonOtherIconTwo.style = `
                                                    
                                                        background:#c7b09a;

                                                    `








                                    // SET STOP TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        stopButtonOtherClicker.style = `
                                        
                                            z-index:-1;

                                        `


                                            // SET STOP TO STANDBY STYLE x
                                            // ///////////////////////////

                                                stopButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#c7b09a;
                                                
                                                `



                                                




                                    // SET DOWNLOAD TO USED STYLE xxxxxxxx
                                    // ///////////////////////////////////

                                        downloadButtonOtherClicker.style = `
                                        
                                            z-index:1;

                                        `

                                            // SET DOWNLOAD TO STANDBY STYLE
                                            // ///////////////////////////

                                                downCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconFour.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                                                






                                    // SET MENU TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        enterButtonOtherClicker.style = `
                                        
                                            z-index:2;

                                        `

                                            // SET MENU TO STANDBY STYLE x
                                            // ///////////////////////////

                                                menuCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                            }


                                

                            
                        


                    

                    








            // STYLE CHANGES FOR MAIN ITEMS ------------------------------
            // ///////////////////////////////////////////////////////////

                // SET PLAY CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `

                // SET PLAY TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedIcon.style = `
                    
                        opacity:1;

                    `








                // SET STOP CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    pauseButtonSelectedClicker.style = `
                    
                        z-index:-1;

                    `

                        // SET PAUSE TO READY MODE -----------------------
                        // ///////////////////////////////////////////////

                            pauseButtonSelectedActualOne.style = `
                            
                                opacity:0;

                            `

                            pauseButtonSelectedIconOne.style = `
                            
                                background:#c7b09a;

                            `

                            pauseButtonSelectedIconTwo.style = `
                            
                                background:#c7b09a;

                            `













                // SET STOP CLICKER AVAILABLE STYLE xxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////


                    stopButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `


                        // SET STOP TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            stopButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `











                            



                // SET DOWNLOAD CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    downloadButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `

                        // SET DOWNLOAD TO STANDBY STYLE xxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            downCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconFour.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `











                            




                // SET MENU CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    enterButtonSelectedClicker.style = `
                    
                            z-index:2;

                    `


                        // SET MENU TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            menuCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `

        }










    // FOR STOP BUTTON ====================================================
    // ////////////////////////////////////////////////////////////////////

        function elementsStopBlock (classHopper) {

            // ARRAYS ----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                var classNumberReference = [

                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "Five"

                ]

                var classNumberArrays = []


                    // COMPARE AND POPULATE ARRAY FOR CLASSNAMES NUMBS ---
                    // ///////////////////////////////////////////////////

                        for (
                            
                                populateCounter = 0;
                                populateCounter != classNumberReference.length;
                                populateCounter ++
                            
                            ) {


                                // IF HOPPER NUMBER IS INCLUDED THEN SKIP =
                                // ////////////////////////////////////////

                                    if ( 
                                        
                                        classHopper != classNumberReference[populateCounter] &&

                                        (
                                            classNumberReference[populateCounter] != undefined || 
                                            classNumberReference[populateCounter] != null
                                        ) 

                                    ) 
                                        
                                        {

                                            classNumberArrays.push(classNumberReference[populateCounter])

                                        } 

                                    
                                // IF HOPER NUMBER DOESNT EXIST THEN PUSH =
                                // ////////////////////////////////////////

                                    else {

                                    }

                            }






            // VARS ------------------------------------------------------
            // ///////////////////////////////////////////////////////////

                // SET ONE CLICKERS VARIABLES ============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayClicker`)

                    var pauseButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseClicker`)

                    var stopButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonClickerOn`)

                    var downloadButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadButtonClickerOn`)

                    var enterButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterButtonClickerOn`)

                // SET ONE STYLES VARIABLES ==============================
                // ///////////////////////////////////////////////////////

                    var playButtonSelectedIcon = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPlayButtonActual`)

                    var pauseButtonSelectedActualOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsPauseButtonActual`)

                        var pauseButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineOne`)
                        var pauseButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlPauseIconLineTwo`)

                    var stopButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsStopButtonActual`)

                    var downCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleOne`)
                    var downCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleTwo`)
                    var downCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleThree`)
                    var downCircButtonSelectedIconFour = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleFour`)

                    var menuCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleOne`)
                    var menuCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleTwo`)
                    var menuCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsEnterCircleThree`)





                // SET TO CHANGE =========================================
                // ///////////////////////////////////////////////////////


                    // RUN FOR LOOP TO SWITCH OFF OTHER ELEMENTS =========
                    // ///////////////////////////////////////////////////


                        for ( 
                            
                                classNumbCounter = 0;
                                classNumbCounter != classNumberArrays.length;
                                classNumbCounter ++ 
                        
                            ) {


                                // DECLARE VARIABLES FOR CLICKERS xxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayClicker`)

                                    var pauseButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseClicker`)

                                    var stopButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonClickerOn`)
                
                                    var downloadButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadButtonClickerOn`)
                
                                    var enterButtonOtherClicker = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterButtonClickerOn`)


                                // DECLARE VARIABLES FOR STYLES xxxxxxxxxx
                                // ///////////////////////////////////////

                                    var playButtonOtherIcon = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPlayButtonActual`)

                                    var pauseButtonOtherActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsPauseButtonActual`)

                                            var pauseButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineOne`)
                                            var pauseButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlPauseIconLineTwo`)
    
                                    var stopButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsStopButtonActual`)
    
                                    var downCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleOne`)
                                    var downCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleTwo`)
                                    var downCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleThree`)
                                    var downCircButtonOtherIconFour = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsDownloadCircleFour`)
    
                                    var menuCircButtonOtherIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleOne`)
                                    var menuCircButtonOtherIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleTwo`)
                                    var menuCircButtonOtherIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberArrays[classNumbCounter]}ControlsEnterCircleThree`)




                                // CHANGE STATES OF CLICKERS xxxxxxxxxxxxx
                                // ///////////////////////////////////////


                                    playButtonOtherClicker.style = `
                                    
                                        z-index:1;
                                    
                                    `

                                    pauseButtonOtherClicker.style = `
                                    
                                        z-index:-1;
                                    
                                    `




                                // CHANGE STYLES TO DEFAULT xxxxxxxxxxxxxx
                                // ///////////////////////////////////////

                                    // SET PLAY TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        playButtonOtherIcon.style = `
                                            
                                                opacity:1;

                                            `

                                                // SET PAUSE TO READY MODE
                                                // ///////////////////////

                                                    pauseButtonOtherActualOne.style = `
                                                    
                                                        opacity:0;

                                                    `

                                                    pauseButtonOtherIconOne.style = `
                                                    
                                                        background:#c7b09a;

                                                    `

                                                    pauseButtonOtherIconTwo.style = `
                                                    
                                                        background:#c7b09a;

                                                    `








                                    // SET STOP TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        stopButtonOtherClicker.style = `
                                        
                                            z-index:-1;

                                        `


                                            // SET STOP TO STANDBY STYLE x
                                            // ///////////////////////////

                                                stopButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#c7b09a;
                                                
                                                `



                                                




                                    // SET DOWNLOAD TO USED STYLE xxxxxxxx
                                    // ///////////////////////////////////

                                        downloadButtonOtherClicker.style = `
                                        
                                            z-index:1;

                                        `

                                            // SET DOWNLOAD TO STANDBY STYLE
                                            // ///////////////////////////

                                                downCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                downCircButtonOtherIconFour.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                                                






                                    // SET MENU TO USED STYLE xxxxxxxxxxxx
                                    // ///////////////////////////////////

                                        enterButtonOtherClicker.style = `
                                        
                                            z-index:2;

                                        `

                                            // SET MENU TO STANDBY STYLE x
                                            // ///////////////////////////

                                                menuCircButtonOtherIconOne.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconTwo.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `


                                                menuCircButtonOtherIconThree.style = `
                                                
                                                    opacity:1;
                                                    background:#FFFFFF;
                                                
                                                `



                            }


                                

                            
                        


                    

                    








            // STYLE CHANGES FOR MAIN ITEMS ------------------------------
            // ///////////////////////////////////////////////////////////

                // SET PLAY CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `

                // SET PLAY TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    playButtonSelectedIcon.style = `
                    
                        opacity:1;

                    `








                // SET STOP CLICKER TO USED STYLE xxxxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    pauseButtonSelectedClicker.style = `
                    
                        z-index:-1;

                    `

                        // SET PAUSE TO READY MODE -----------------------
                        // ///////////////////////////////////////////////

                            pauseButtonSelectedActualOne.style = `
                            
                                opacity:0;

                            `

                            pauseButtonSelectedIconOne.style = `
                            
                                background:#c7b09a;

                            `

                            pauseButtonSelectedIconTwo.style = `
                            
                                background:#c7b09a;

                            `













                // SET STOP CLICKER AVAILABLE STYLE xxxxxxxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////


                    stopButtonSelectedClicker.style = `
                    
                        z-index:-1;

                    `


                        // SET STOP TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            stopButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#c7b09a;
                            
                            `











                            



                // SET DOWNLOAD CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    downloadButtonSelectedClicker.style = `
                    
                        z-index:1;

                    `

                        // SET DOWNLOAD TO STANDBY STYLE xxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            downCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            downCircButtonSelectedIconFour.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `











                            




                // SET MENU CLICKER TO UNAVAILABLE STYLE xxxxxxxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    enterButtonSelectedClicker.style = `
                    
                            z-index:2;

                    `


                        // SET MENU TO STANDBY STYLE xxxxxxxxxxxxxxxxxxxxx
                        // ///////////////////////////////////////////////

                            menuCircButtonSelectedIconOne.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconTwo.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `


                            menuCircButtonSelectedIconThree.style = `
                            
                                opacity:1;
                                background:#FFFFFF;
                            
                            `

        }










    // FOR DOWNLOAD BUTTON ================================================
    // ////////////////////////////////////////////////////////////////////

        function elementsDownloadBlock (classHopper) {

            // ARRAYS ----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                var classNumberReference = [

                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "Five"

                ]

                var classNumberArrays = []


                    // COMPARE AND POPULATE ARRAY FOR CLASSNAMES NUMBS ---
                    // ///////////////////////////////////////////////////

                        for (
                            
                                populateCounter = 0;
                                populateCounter != classNumberReference.length;
                                populateCounter ++
                            
                            ) {


                                // IF HOPPER NUMBER IS INCLUDED THEN SKIP =
                                // ////////////////////////////////////////

                                    if ( 
                                        
                                        classHopper != classNumberReference[populateCounter] &&

                                        (
                                            classNumberReference[populateCounter] != undefined || 
                                            classNumberReference[populateCounter] != null
                                        ) 

                                    ) 
                                        
                                        {

                                            classNumberArrays.push(classNumberReference[populateCounter])

                                        } 

                                    
                                // IF HOPER NUMBER DOESNT EXIST THEN PUSH =
                                // ////////////////////////////////////////

                                    else {

                                    }

                            }






            // VARS ------------------------------------------------------
            // ///////////////////////////////////////////////////////////

                // SET ONE CLICKERS VARIABLES ============================
                // ///////////////////////////////////////////////////////

                    var downloadButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadButtonClickerOn`)

                // SET ONE STYLES VARIABLES ==============================
                // ///////////////////////////////////////////////////////

                    var downCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleOne`)
                    var downCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleTwo`)
                    var downCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleThree`)
                    var downCircButtonSelectedIconFour = document.querySelector(`.klipsumBookShelfBook${classHopper}ControlsDownloadCircleFour`)





                // REMOVE BUTTON AND DISABLE ICONS =======================
                // ///////////////////////////////////////////////////////

                    downloadButtonSelectedClicker.style = `
                    
                        display:none;

                    `

                    downCircButtonSelectedIconOne.style = `
                    
                        background:#c7b09a;

                    `

                    downCircButtonSelectedIconTwo.style = `
                    
                        background:#c7b09a;

                    `

                    downCircButtonSelectedIconThree.style = `
                    
                        background:#c7b09a;

                    `

                    downCircButtonSelectedIconFour.style = `
                    
                        background:#c7b09a;

                    `

        }
















    

// FUNCTIONS FOR CLICK TESTER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function checkClickedElement () {

        // USE SELECTED CLICKED ELEMENT CLASS NAME ------------------------
        // ////////////////////////////////////////////////////////////////

            var getSelectedClassName = classNameGetArray[0];









        // CHECK ELEMENT CLASS NUMBER =============================================
        // ////////////////////////////////////////////////////////////////////////


            // ELEMENT ONE CLASS CHECK AND FILL ///////////////////////////
            // ////////////////////////////////////////////////////////////

                if ( getSelectedClassName.includes("One") ) {


                    // CHANGE ELEMENT SELECTOR CLASS NUMBER ===============
                    // ////////////////////////////////////////////////////

                        elelemtClickedNumberMapper = 0;



                    // RUN BUTTON DETECT FUNCTIONS ================================
                    // ////////////////////////////////////////////////////////////

                        buttonDetectExecute(elelemtClickedNumberMapper)


                }
                
                







                    
            // ELEMENT TWO CLASS CHECK AND FILL ///////////////////////////
            // ////////////////////////////////////////////////////////////
            
                else if ( getSelectedClassName.includes("Two") ) {


                    // CHANGE ELEMENT SELECTOR CLASS NUMBER ===============
                    // ////////////////////////////////////////////////////

                        elelemtClickedNumberMapper = 1;



                    // RUN BUTTON DETECT FUNCTIONS ================================
                    // ////////////////////////////////////////////////////////////

                        buttonDetectExecute(elelemtClickedNumberMapper)


                }
                
                







                    
            // ELEMENT TWO CLASS CHECK AND FILL ///////////////////////////
            // ////////////////////////////////////////////////////////////
            
                else if ( getSelectedClassName.includes("Three") ) {


                    // CHANGE ELEMENT SELECTOR CLASS NUMBER ===============
                    // ////////////////////////////////////////////////////

                        elelemtClickedNumberMapper = 2;



                    // RUN BUTTON DETECT FUNCTIONS ================================
                    // ////////////////////////////////////////////////////////////

                        buttonDetectExecute(elelemtClickedNumberMapper)


                }
                
                







                    
            // ELEMENT TWO CLASS CHECK AND FILL ///////////////////////////
            // ////////////////////////////////////////////////////////////
            
                else if ( getSelectedClassName.includes("Four") ) {


                    // CHANGE ELEMENT SELECTOR CLASS NUMBER ===============
                    // ////////////////////////////////////////////////////

                        elelemtClickedNumberMapper = 3;



                    // RUN BUTTON DETECT FUNCTIONS ================================
                    // ////////////////////////////////////////////////////////////

                        buttonDetectExecute(elelemtClickedNumberMapper)


                }
                
                







                    
            // ELEMENT TWO CLASS CHECK AND FILL ///////////////////////////
            // ////////////////////////////////////////////////////////////
            
                else if ( getSelectedClassName.includes("Five") ) {


                    // CHANGE ELEMENT SELECTOR CLASS NUMBER ===============
                    // ////////////////////////////////////////////////////

                        elelemtClickedNumberMapper = 4;



                    // RUN BUTTON DETECT FUNCTIONS ================================
                    // ////////////////////////////////////////////////////////////

                        buttonDetectExecute(elelemtClickedNumberMapper)


                }









        // EMPTY OUT ARRAY FOR NEXT CLASS NAME TAKE -----------------------
        // ////////////////////////////////////////////////////////////////

             classNameGetArray = [];

    }
















    

// BUTTON DETECT AND BUTTON EXECUTION FUNCTION ================
// ////////////////////////////////////////////////////////////

    function buttonDetectExecute (numberMapper) {

        // USE SELECTED CLICKED ELEMENT CLASS NAME ------------------------
        // ////////////////////////////////////////////////////////////////

            var getSelectedClassName = classNameGetArray[0];



        // VAR FOR CLASS NUMBER ===============================
        // ////////////////////////////////////////////////////

            var classNumber = classNumberMiddleCounter[numberMapper]



                // BOOK PLAYER ELEMENTS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////////
            
                    playButtonClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPlayClicker`);
            
                    playButtonActual = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPlayButtonActual`);
            
                    
            
                    pauseButtonClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPauseClicker`);
            
                        pauseButtonMain = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPauseButtonActual`);
                        pauseButtonActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlPauseIconLineOne`);
                        pauseButtonActualTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlPauseIconLineTwo`);
            
            
                    
                    stopButtonIcon = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsStopButtonActual`);
            
            
            
                    downloadButtonIconElemOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsDownloadCircleOne`);
                    downloadButtonIconElemTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsDownloadCircleTwo`);
                    downloadButtonIconElemThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsDownloadCircleThree`);
                    downloadButtonIconElemFour = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsDownloadCircleFour`);




        // CHECK IF CLICKED ELEMENT IS PLAY BUTTON ////////////
        // ////////////////////////////////////////////////////

            if ( getSelectedClassName.includes(`klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPlayClicker`) ) {
                

                // TURN OFF PLAY CLICKER AND BUTTON ==========
                // ///////////////////////////////////////////

                    elementsPlayBlock(classNumber)


                        // EXECUTE SECONDARY FUNCTIONS ++++++++
                        // ++++++++++++++++++++++++++++++++++++

                            // UPLOAD BOOK TRACK SOURCE TO PLAYER
                            // ////////////////////////////////

                                songPlateSource.setAttribute("src", `${songSourceLinkArray[numberMapper]}`);

                                    // PLAY BOOK TRACK AFTER INTERVAL
                                    // ////////////////////////

                                        songPlateSource.play();

                                    





            } 

        // CHECK IF CLICKED ELEMENT IS PAUSE BUTTON ///////////
        // ////////////////////////////////////////////////////
            
            else if (getSelectedClassName.includes(`klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsPauseClicker`) ) {

                // TURN ON PLAY CLICKER AND BUTTON ===========
                // ///////////////////////////////////////////

                    elementsPauseBlock(classNumber)

                        // EXECUTE SECONDARY FUNCTIONS ++++++++
                        // ++++++++++++++++++++++++++++++++++++

                            pauseBookTrack();

                            

            } 

        // CHECK IF CLICKED ELEMENT IS STOP BUTTON ////////////
        // ////////////////////////////////////////////////////
            
            else if (getSelectedClassName.includes(`klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsStopButtonClickerOn`) ) {

                // TURN OFF STOP CLICKER AND BUTTON ==========
                // ///////////////////////////////////////////

                    elementsStopBlock(classNumber)

                        // EXECUTE SECONDARY FUNCTIONS ++++++++
                        // ++++++++++++++++++++++++++++++++++++

                            stopAndResetBookTrack();

            } 

        // CHECK IF CLICKED ELEMENT IS DOWNLOAD BUTTON ////////
        // ////////////////////////////////////////////////////
            
            else if (getSelectedClassName.includes(`linkControl${classNumberMiddleCounter[numberMapper]}`)
                
                ) {


                        // EXECUTE SECONDARY FUNCTIONS ++++++++
                        // ++++++++++++++++++++++++++++++++++++

                            elementsDownloadBlock(classNumber)

            } 

        // CHECK IF CLICKED ELEMENT IS ENTER BUTTON ///////////
        // ////////////////////////////////////////////////////
            
            else if (getSelectedClassName.includes(`klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}ControlsEnterButtonClickerOn`)
                
                ) {




                        // EXECUTE SECONDARY FUNCTIONS ++++++++
                        // ++++++++++++++++++++++++++++++++++++

                            openBookMenu();


                                // GET ALL ELEMENTS WITHIN BOOK ELEMENT ONE
                                // ////////////////////////////

                                    bookCoverImage = bookCoverSourceLinkArray[numberMapper];

                                    var bookHeadlineOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}HeadlinerTextOne`);
                                    var bookHeadlineTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}HeadlinerTextTwo`);
                                    var bookHeadlineThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}HeadlinerTextThree`);

                                    var bookAuthor = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[numberMapper]}AuthorTextTwo`);






                                    var imagePlacer = document.querySelector(".sideMenuDeepDiveSideBookCoverActual");

                                    var headlineTextOne = document.querySelector(".sideMenuDeepDiveSideHeaderOne");
                                    var headlineTextTwo = document.querySelector(".sideMenuDeepDiveSideHeaderTwo");
                                    var headlineTextThree = document.querySelector(".sideMenuDeepDiveSideHeaderThree");

                                    var authorLineText = document.querySelector(".sideMenuDeepDiveSideSubHeaderOne");

                                    // var descriptionParaOne = document.querySelector(".sideMenuDeepDiveSideDescriptionTextOne");
                                    // var descriptionParaTwo = document.querySelector(".sideMenuDeepDiveSideDescriptionTextTwo");

                                    var getBookLinkButton = document.querySelector(".sideMenuDeepDiveSideGetBookButtonContainer");





                                // POPULATE EXTRA CONTENT BOOK CORNER
                                // ////////////////////////////

                                    imagePlacer.style = `
                                    
                                        background:url("${bookCoverImage}");
                                        background-size:cover;
                                        background-position:center;
                                        background-repeat:no-repeat;
                                    
                                    `

                                    headlineTextOne.textContent = bookHeadlineOne.textContent;
                                    headlineTextTwo.textContent = bookHeadlineTwo.textContent;
                                    headlineTextThree.textContent = bookHeadlineThree.textContent;

                                    authorLineText.textContent = `${bookAuthor.textContent}`;






                                        // LINK DESCRIPTIONS FOR BOOKS ONTO DEEP DIVE READ
                                        // //////////////////////

                                            var bookDescriptionParaOne = document.querySelector(`.sideMenuDeepDiveSideDescriptionTextOne`);
                                            var bookDescriptionParaTwo = document.querySelector(`.sideMenuDeepDiveSideDescriptionTextTwo`);

                                            // FILL UP POPULATE BOOK HEADLINE STYLE ===============
                                            // ////////////////////////////////////////////////////

                                                // POPULATE PER NUMBER COUNTER xxxxxxxxxxxxxxxxxxxx
                                                // ////////////////////////////////////////////////


                                                    bookDescriptionParaOne.textContent = `${ descriptionTextOneArray[numberMapper] }`;
                                                    bookDescriptionParaTwo.textContent = `${ descriptionTextTwoArray[numberMapper] }`;







                                        // ISSUE NEW EVENT AND READY FOR CLICK 
                                        // /////////////////////


                                            getBookLinkButton.addEventListener("click", () => {

                                                window.open(`${bookLinkArray[numberMapper]}`);

                                            });

            }

    }
















    

// FUNCTIONS FOR RANDOM CONTENT FILLER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    function randomizeAndSelectFiveContentsBlock ( ) {

        // FIRST EMPTY OUT ARRAYS ========================================
        // ///////////////////////////////////////////////////////////////

            randomFiveCatcher = [];


            songSourceLinkArray = [];
            bookCoverSourceLinkArray = [];
            headlinerTextArrayOne = [];
            headlinerTextArrayTwo = [];
            headlinerTextArrayThree = [];
            authorTextArray = [];

            descriptionTextOneArray = [];
            descriptionTextTwoArray = [];

            bookLinkArray = [];

            bookNameShortName = []

        // RUN FOR LOOP FOR RANDOM SELECT POPULATE =======================
        // ///////////////////////////////////////////////////////////////

            for (arrayLengthCounter = 0; arrayLengthCounter < 5; arrayLengthCounter++) {

                

                // EMPTY OUT RANDOM STRING =======================================
                // ///////////////////////////////////////////////////////////////

                    var randomizeContentSelect = contentPopulateArrays[(Math.floor(Math.random() * contentPopulateArrays.length))];

                // CHECK IF ELEMENTS ARE ALREADY INSIDE ARRAY xxxxxxxxxxxx
                // ///////////////////////////////////////////////////////

                    // FIND INDEX OF RANDOM ELEMENT ======================
                    // ///////////////////////////////////////////////////

                        var indexOfChosenElement = contentPopulateArrays.indexOf(randomizeContentSelect);

                    if (randomFiveCatcher.includes(contentPopulateArrays[indexOfChosenElement])) {

                        // SUBTRACT MINUS ONE FROM COUNTER ===============
                        // ///////////////////////////////////////////////

                            arrayLengthCounter --;
                            

                    }

                     else {


                        // if ( indexOfChosenElement == 19 ) {

                        //     location.reload

                        // }

                        randomFiveCatcher.push(randomizeContentSelect);









                            // THEN PUSH SONG SOURCE LINKS INTO ARRAY ////
                            // ///////////////////////////////////////////

                                var bookElementCoverImageLinkSource = randomizeContentSelect[0];
                                var bookElementHeadlinerTextSourceOne = randomizeContentSelect[1];
                                var bookElementHeadlinerTextSourceTwo = randomizeContentSelect[2];
                                var bookElementHeadlinerTextSourceThree = randomizeContentSelect[3];
                                var bookElementAuthorTextSource = randomizeContentSelect[4];
                                var bookElementSongLLinkSource = randomizeContentSelect[5];

                                var bookElementDescriptionTextOne = randomizeContentSelect[6];
                                var bookElementDescriptionTextTwo = randomizeContentSelect[7];

                                var bookElementPurchaseLink = randomizeContentSelect[8];

                                var bookElementNameShorthand = randomizeContentSelect[9]




                                bookCoverSourceLinkArray.push(bookElementCoverImageLinkSource);
                                headlinerTextArrayOne.push(bookElementHeadlinerTextSourceOne);
                                headlinerTextArrayTwo.push(bookElementHeadlinerTextSourceTwo);
                                headlinerTextArrayThree.push(bookElementHeadlinerTextSourceThree);
                                authorTextArray.push(bookElementAuthorTextSource);
                                songSourceLinkArray.push(bookElementSongLLinkSource);

                                descriptionTextOneArray.push(bookElementDescriptionTextOne);
                                descriptionTextTwoArray.push(bookElementDescriptionTextTwo);

                                bookLinkArray.push(bookElementPurchaseLink);

                                bookNameShortName.push(bookElementNameShorthand)

                        randomizeContentSelect = "";

                     }



            }


                // DEPLOY OTHER FILLERS ==================================
                // ///////////////////////////////////////////////////////

                    fillBookCovers();
                    fillBookHeadliner();
                    fillBookAuthor();
                    fillBookDownloads();

    }

    randomizeAndSelectFiveContentsBlock();
















    

// FUNCTIONS FOR INDIVIDUAL FILLERS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // FOR BOOK COVERS FILLER +++++++++++++++++++++++++++++++++++++++++++++
    // ////////////////////////////////////////////////////////////////////

        function fillBookCovers () {

            // MAKE VARS FOR BOOK COVERS ----------------------------------
            // ////////////////////////////////////////////////////////////

                for ( classNumberMiddleCounterNumber; classNumberMiddleCounterNumber != 5; classNumberMiddleCounterNumber++ ) {

                    var bookCover = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classNumberMiddleCounterNumber]}ImageActual`);

                    // FILL UP POPULATE BOOK COVER STYLE ==================
                    // ////////////////////////////////////////////////////

                        bookCover.style = `
                        
                            background:url("${bookCoverSourceLinkArray[classNumberMiddleCounterNumber]}");
                            background-size:cover;
                            background-repeat:no-repeat;
                            background-position:center;
                        
                        `

                }


            // EMPTY OUT AND CLEAR ----------------------------------------
            // ////////////////////////////////////////////////////////////

                classNumberMiddleCounterNumber = 0;

        }







    // FOR BOOK HEADLINE FILLER +++++++++++++++++++++++++++++++++++++++++++
    // ////////////////////////////////////////////////////////////////////

        function fillBookHeadliner () {

            // MAKE VARS FOR BOOK HEADLINER TEXT SPOTS --------------------
            // ////////////////////////////////////////////////////////////

                for ( classNumberMiddleCounterNumber; classNumberMiddleCounterNumber != 5; classNumberMiddleCounterNumber++ ) {

                    var bookHeadlinerOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classNumberMiddleCounterNumber]}HeadlinerTextOne`);
                    var bookHeadlinerTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classNumberMiddleCounterNumber]}HeadlinerTextTwo`);
                    var bookHeadlinerThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classNumberMiddleCounterNumber]}HeadlinerTextThree`);

                    // FILL UP POPULATE BOOK HEADLINE STYLE ===============
                    // ////////////////////////////////////////////////////

                        bookHeadlinerOne.textContent = `${headlinerTextArrayOne[classNumberMiddleCounterNumber]}`;
                        bookHeadlinerTwo.textContent = `${headlinerTextArrayTwo[classNumberMiddleCounterNumber]}`;
                        bookHeadlinerThree.textContent = `${headlinerTextArrayThree[classNumberMiddleCounterNumber]}`;

                }


            // EMPTY OUT AND CLEAR ----------------------------------------
            // ////////////////////////////////////////////////////////////

                classNumberMiddleCounterNumber = 0;

        }







    // FOR BOOK AUTHOR FILLER +++++++++++++++++++++++++++++++++++++++++++++
    // ////////////////////////////////////////////////////////////////////

        function fillBookAuthor () {

            // MAKE VARS FOR BOOK AUTHORS TEXT SPOTS ----------------------
            // ////////////////////////////////////////////////////////////

                
                    for ( classNumberMiddleCounterNumber; classNumberMiddleCounterNumber != 5; classNumberMiddleCounterNumber++ ) {

                        var bookAuthor = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classNumberMiddleCounterNumber]}AuthorTextTwo`);

                        var author = sessionStorage.getItem("translatorNumber")

                        var pageDirectionRetrieve = sessionStorage.getItem("pageDirection")

                        var getAuthorOwnershipTranslation = authorOwnership[author]


                            // CHECK IF NUMBER EXISTS =============================
                            // ////////////////////////////////////////////////////

                                // IF IT DOES NOT EXIST DEFAULT xxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////

                                    if ( 
                                        
                                            author == null ||
                                            author == undefined ||
                                            author == ""
                                        
                                        ) 
                                        
                                        {

                                            bookAuthor.textContent = `By: ${authorTextArray[classNumberMiddleCounterNumber]}`;

                                        }



                                // IF IT DOES EXIST xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////

                                    else {

                                        // CHECK LANGAUGE AND PAGE DIRECTION ------
                                        // ////////////////////////////////////////

                                            // CHECK PAGE DIRECTION AND APPLY /////
                                            // ////////////////////////////////////

                                                if ( pageDirectionRetrieve == "left" ) {


                                                    // FILL LEFT SIDE AUTHORS =====
                                                    // ////////////////////////////

                                                        bookAuthor.textContent = `${authorTextArray[classNumberMiddleCounterNumber]} ${getAuthorOwnershipTranslation}`;


                                                }

                                                else if ( pageDirectionRetrieve == "right" ) {


                                                    // FILL LEFT SIDE AUTHORS =====
                                                    // ////////////////////////////

                                                        bookAuthor.textContent = `${getAuthorOwnershipTranslation} ${authorTextArray[classNumberMiddleCounterNumber]}`;


                                                }

                                    }

                    }


            // EMPTY OUT AND CLEAR ----------------------------------------
            // ////////////////////////////////////////////////////////////

                classNumberMiddleCounterNumber = 0;


        }







    // FOR BOOK DOWNLOADS FILLER ++++++++++++++++++++++++++++++++++++++++++
    // ////////////////////////////////////////////////////////////////////

        function fillBookDownloads () {

            // MAKE DATE --------------------------------------------------
            // ////////////////////////////////////////////////////////////

                var getDate = Date.now()

            // MAKE VARS FOR BOOK AUTHORS TEXT SPOTS ----------------------
            // ////////////////////////////////////////////////////////////

                
                    for ( classNumberMiddleCounterNumber; classNumberMiddleCounterNumber != 5; classNumberMiddleCounterNumber++ ) {

                        var downloadLink = document.querySelector(`.linkControl${classNumberMiddleCounter[classNumberMiddleCounterNumber]}`);


                        // SPLIT HREF =========================================
                        // ////////////////////////////////////////////////////

                        var getDownloadLink = `${songSourceLinkArray[classNumberMiddleCounterNumber]}`;

                        var splitHref = getDownloadLink.split("//");


                        // FILL UP POPULATE BOOK HEADLINE STYLE ===============
                        // ////////////////////////////////////////////////////

                            downloadLink.setAttribute("href", splitHref[1]);
                                
                            downloadLink.setAttribute("download", `klipsumBookSample_${bookNameShortName[classNumberMiddleCounterNumber]}_${getDate}.mp3`);

                    }


            // EMPTY OUT AND CLEAR ----------------------------------------
            // ////////////////////////////////////////////////////////////

                classNumberMiddleCounterNumber = 0;


        }

        
































    

// FUNCTIONS FOR AUDIO xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // PAUSE AUDIO xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        function pauseBookTrack () {

            if ( songPlateSource && !songPlateSource.paused ) {

                songPlateSource.currentTime = songPlateSource.currentTime

                console.log("WHATS THIS TIME: " + songPlateSource.currentTime)
                
                songPlateSource.pause();

                songPlateSource.currentTime = songPlateSource.currentTime

            }

        }







    // STOP AUDIO xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        function stopAndResetBookTrack () {

            songPlateSource.pause();

                // THEN RESET xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////////

                    songPlateSource.currentTime = 0;

        }







    // END AUDIO xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        function endAudioButtonResets () {

            // ARRAYS ----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                var classNumberReference = [

                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "Five"

                ]








            // LOOPS -----------------------------------------------------
            // ///////////////////////////////////////////////////////////

                for ( 

                        classHopperNumber = 0;
                        classHopperNumber != classNumberReference.length;
                        classHopperNumber ++


                 ) {






                    // VARS ----------------------------------------------
                    // ///////////////////////////////////////////////////

                        // SET ONE CLICKERS VARIABLES ====================
                        // ///////////////////////////////////////////////

                            var playButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsPlayClicker`)

                            var pauseButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsPauseClicker`)

                            var stopButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsStopButtonClickerOn`)

                            var downloadButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsDownloadButtonClickerOn`)

                            var enterButtonSelectedClicker = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsEnterButtonClickerOn`)

                        // SET ONE STYLES VARIABLES ======================
                        // ///////////////////////////////////////////////

                            var playButtonSelectedIcon = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsPlayButtonActual`)

                            var pauseButtonSelectedActualOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsPauseButtonActual`)

                                var pauseButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlPauseIconLineOne`)
                                var pauseButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlPauseIconLineTwo`)

                            var stopButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsStopButtonActual`)

                            var downCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsDownloadCircleOne`)
                            var downCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsDownloadCircleTwo`)
                            var downCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsDownloadCircleThree`)
                            var downCircButtonSelectedIconFour = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsDownloadCircleFour`)

                            var menuCircButtonSelectedIconOne = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsEnterCircleOne`)
                            var menuCircButtonSelectedIconTwo = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsEnterCircleTwo`)
                            var menuCircButtonSelectedIconThree = document.querySelector(`.klipsumBookShelfBook${classNumberMiddleCounter[classHopperNumber]}ControlsEnterCircleThree`)











                    // RESET PLAY BUTTON xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ///////////////////////////////////////////////////

                        // RESET PLAY CLICKER ----------------------------
                        // ///////////////////////////////////////////////

                            playButtonSelectedClicker.style = `
                            
                                z-index:1;

                            `

                        // RESET PLAY ICON -------------------------------
                        // ///////////////////////////////////////////////

                            playButtonSelectedIcon.style = `
                            
                                opacity:1;

                            `










                    // RESET PAUSE BUTTON xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ///////////////////////////////////////////////////

                        // RESET PAUSE CLICKER ---------------------------
                        // ///////////////////////////////////////////////

                            pauseButtonSelectedClicker.style = `
                            
                                z-index:-1;

                            `

                        // RESET PAUSE ICONS -----------------------------
                        // ///////////////////////////////////////////////

                            pauseButtonSelectedActualOne.style = `
                            
                                opacity:0;

                            `

                            pauseButtonSelectedIconOne.style = `
                            
                                background:#c7b09a;

                            `

                            pauseButtonSelectedIconTwo.style = `
                            
                                background:#c7b09a;

                            `










                    // RESET STOP BUTTON xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ///////////////////////////////////////////////////

                        // RESET STOP CLICKER ----------------------------
                        // ///////////////////////////////////////////////

                            stopButtonSelectedClicker.style = `
                            
                                z-index:-1;

                            `

                        // RESET STOP CLICKER ----------------------------
                        // ///////////////////////////////////////////////

                            stopButtonSelectedIconOne.style = `
                            
                                background:#c7b09a;

                            `










                    // RESET DOWNLOAD BUTTON xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ///////////////////////////////////////////////////

                        // RESET DOWNLOAD CLICKER ------------------------
                        // ///////////////////////////////////////////////

                            downloadButtonSelectedClicker.style = `
                            
                                z-index:1;

                            `

                        // RESET DOWNLOAD CLICKER ------------------------
                        // ///////////////////////////////////////////////

                            downCircButtonSelectedIconOne.style = `
                            
                                background:#FFFFFF;

                            `

                            downCircButtonSelectedIconTwo.style = `
                            
                                background:#FFFFFF;

                            `

                            downCircButtonSelectedIconThree.style = `
                            
                                background:#FFFFFF;

                            `

                            downCircButtonSelectedIconFour.style = `
                            
                                background:#FFFFFF;

                            `










                    // RESET MENU BUTTON xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    // ///////////////////////////////////////////////////

                        // RESET MENU CLICKER ----------------------------
                        // ///////////////////////////////////////////////

                            enterButtonSelectedClicker.style = `
                            
                                z-index:2;

                            `

                        // RESET MENU CLICKER ----------------------------
                        // ///////////////////////////////////////////////

                            menuCircButtonSelectedIconOne.style = `
                            
                                background:#FFFFFF;

                            `

                            menuCircButtonSelectedIconTwo.style = `
                            
                                background:#FFFFFF;

                            `

                            menuCircButtonSelectedIconThree.style = `
                            
                                background:#FFFFFF;

                            `


                }

        }









































// ----------------------------------------------------------------------------
// EVENTS /////////////////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------

// EVENTS FOR CLICK TESTER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    document.addEventListener("click", function(e){

        // GET CLICKED ELEMENT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ////////////////////////////////////////////////////////////

            classNameGetArray.push(e.srcElement.className);



        // FIRE OFF FUNCTIONS FOR ELEMENTS DETECT xxxxxxxxxxxxxxxxxxxxx
        // ////////////////////////////////////////////////////////////

            checkClickedElement();

    });








// EVENTS FOR NAV BAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // EXTRA CONTENT CONTAINER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        suggestionsButton.addEventListener("click", () => {

            openDeepDiveMenuSuggestionsSide();

        })

        openContactButton.addEventListener("click", () => {

            openContactScreen()

        })

        addBookNameButton.addEventListener("click", () => {

            createNewBookInputField()
            
        })

        submitButton.addEventListener("click", (e) => {

            // DISABLE PAGE REFRESH =======================================
            // ////////////////////////////////////////////////////////////

                e.preventDefault()

            // MAKE FIELDS TO SUBMIT FOR FORM =============================
            // ////////////////////////////////////////////////////////////

                // ARRAY FOR SUBMISSION CONTENTS xxxxxxxxxxxxxxxxxxxxxxxxxx
                // ////////////////////////////////////////////////////////

                    var submissionElementsCollect = []
                    var getMainFields = [

                        userNameField,
                        bookNameFieldOne,
                        commentsBlock

                    ]


                    // CHECK IF ALL FIELDS ARE FILLED IN >>>>>>>>>>>>>>>>>>
                    // ////////////////////////////////////////////////////

                        for ( counter = 0; counter < getMainFields.length; counter ++ ) {

                            
                            

                            // BOOK NAME EMPTY ''''''''''''''''''''''''
                            // ////////////////////////////////////////

                                if ( getMainFields[0].value == "" ) 
                                    
                                {

                                    var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                    if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                    

                                        errorMessage = errorMessageBox[1][2]
    
                                        errorHandlingBox(errorMessage);


                                    } else {
                                    

                                        errorMessage = errorMessageBox[getTranslatorNumber][2]
    
                                        errorHandlingBox(errorMessage);


                                    }

                                }



                            // BOOK RECOMMENDATION EMPTY ''''''''''''''
                            // ////////////////////////////////////////

                                else if ( getMainFields[1].value == "" ) 
                                    
                                {

                                    var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                    if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                    

                                        errorMessage = errorMessageBox[1][3]
    
                                        errorHandlingBox(errorMessage);


                                    } else {
                                    

                                        errorMessage = errorMessageBox[getTranslatorNumber][3]
    
                                        errorHandlingBox(errorMessage);


                                    }

                                }



                            // BOOK COMMENTS EMPTY ''''''''''''''''''''
                            // ////////////////////////////////////////

                                else if ( getMainFields[2].value == "" ) 
                                    
                                {

                                    var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                    if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                    

                                        errorMessage = errorMessageBox[1][4]
    
                                        errorHandlingBox(errorMessage);


                                    } else {
                                    

                                        errorMessage = errorMessageBox[getTranslatorNumber][4]
    
                                        errorHandlingBox(errorMessage);


                                    }

                                }



                            else {




                                e.preventDefault()



                                // DROP DOWN SUCCESS BLOCK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                    var getTranslatorNumber = sessionStorage.getItem("translatorNumber")

                                    if ( getTranslatorNumber == null || getTranslatorNumber == undefined ) {
                                    

                                        completedMessage = completedMessageBox[1][0]
    
                                        completedHandlingBox(completedMessage);


                                    } else {
                                    

                                        completedMessage = completedMessageBox[getTranslatorNumber][0]
    
                                        completedHandlingBox(completedMessage);


                                    }



                                

                                // DEAFULT GENERAL FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                    var contributorNameSubmit = document.querySelector(".contributorName")


                                        // PUSH THIS PART INTO SUBMISSION FIRST ^^^^^^^^^^^
                                        // ////////////////////////////////////////////////

                                            submissionElementsCollect = [

                                                contributorNameSubmit.value
                                                
                                            ]











                                // BOOK RECOMMENDATIONS FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                    var countElements = document.querySelector(".bookNameInputsContainer").children.length

                                // BOOK RECOMMENDATIONS FIELDS xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////











                                // FUN LOOP FOR EXTRA FIELDS AND POPULATE SUBMIT ARRAY xxxx
                                // ////////////////////////////////////////////////////////

                                    for ( extraRecFieldCounter = 0; extraRecFieldCounter < countElements; extraRecFieldCounter ++ ) {

                                        // VARIABLES FOR CLASSNAMES OF EXTRA FIELDS //////
                                        // ///////////////////////////////////////////////

                                            var RecommendationClassMapper = `extraBookName${classNumberMiddleCounter[extraRecFieldCounter]}InputActual`
                                            var contributorRecommendationsSubmit = document.querySelector(`.${RecommendationClassMapper}`)


                                                // PUSH THIS PART INTO SUBMISSION FIRST ^^^^^^^^^^^
                                                // ////////////////////////////////////////////////

                                                    submissionElementsCollect.push(contributorRecommendationsSubmit.value)

                                    }





                                // COMENTS FIELD xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                    var contributorCommentsSubmit = document.querySelector(".comments")


                                        // PUSH THIS PART INTO SUBMISSION FIRST ^^^^^^^^^^^
                                        // ////////////////////////////////////////////////

                                            submissionElementsCollect.push(contributorCommentsSubmit.value)











                                // SUBMIT FORM HERE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                 sendMail(classNumberMiddleCounter)

                                











                                // CLEAR ALL FIELDS AND CLOSE WINDOW xxxxxxxxxxxxxxxxxxxxxx
                                // ////////////////////////////////////////////////////////

                                    for ( counter = 0; counter < getMainFields.length; counter ++ ) {

                                        getMainFields[counter].value = ""

                                    }

                                        // REMOVE BACK BUTTON CLICKER --------------------
                                        // ///////////////////////////////////////////////

                                            cloaseButtonContact.style = `
                                            
                                                z-index:-1;

                                            `

                                        // CLOSE SUGGESTIONS BLOCK AND FADE OUT ----------
                                        // ///////////////////////////////////////////////

                                            mainContactForm.style = `
                                            
                                                opacity:0;

                                            `

                                                // FADE OUT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                // ///////////////////////////////////////

                                                    setTimeout(() => {

                                                        mainContactForm.style = `
                                                    
                                                            opacity:0;
                                                            display:none;

                                                        `

                                                    }, 1000)

                                        // RESET MAIN SLIDER OVERALL TO DEFAULT ----------
                                        // ///////////////////////////////////////////////

                                            extraMenuEntireContainer.style = `
                                            
                                                z-index:-1;
                                                left:-250%;

                                            `

                                        // RESET SLIDER TO DEFAULT -----------------------
                                        // ///////////////////////////////////////////////

                                            extraMenuSliderControl.style = `
                                            
                                                margin-left:100%;

                                            `



                            }


                        }

                    

        })




        closeButtonGeneral.addEventListener("click", () => {

            closeExtraContentMenu();

        })

        cloaseButtonContact.addEventListener("click", () => {

            closeContactScreen();

        })








// EVENTS FOR LANGUAGE SELECTOR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    // DROP DOWN OPEN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        languageDropDownOn.addEventListener("click", function () {

            openLanguageMenu()

        })

    // DROP DOWN CLOSE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        languageDropDownOff.addEventListener("click", function () {

            closeLanguageMenu()

        })

    // DROP DOWN SELECTED LANGUAGES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // ////////////////////////////////////////////////////////////////////

        // LANGUAGE ONE SELECTED ------------------------------------------
        // ////////////////////////////////////////////////////////////////

            languageDropDownLangOne.addEventListener("click", function (e) {

                selectedLanguageClicker = e.srcElement.className
                selectedLanguage()

            })

        // LANGUAGE TWO SELECTED ------------------------------------------
        // ////////////////////////////////////////////////////////////////

            languageDropDownLangTwo.addEventListener("click", function (e) {

                selectedLanguageClicker = e.srcElement.className
                selectedLanguage()

            })








// CHECK END TRACK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////

    songPlateSource.addEventListener("ended", function () {

        // RESET ALL ICONS TO DEFAULT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ////////////////////////////////////////////////////////////////


            endAudioButtonResets()



    })