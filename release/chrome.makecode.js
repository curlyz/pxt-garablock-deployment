/*
    This script is the main brain of MakeCode
    It is written in JavaScript because im giving up on how long the build took
    With this it is way easy to add new features on reload

*/

var perf = {}
window.perf = perf


var { arduino, avrbro, buffer, msgpack, observablehq, plotly, stk500, swal, teachable, tfjs, idb } = core.getAVRBro()
window.swal = swal
window.msgpack = msgpack

function getStartText() {
    return `Start #${app_tsx.state.projectName}`
}


var translation = {
    "   Maybe: {0} ({1} at '{2}')\n": "   Maybe: {0} ({1} at '{2}')\n",
    " - Copy": " - Copy",
    " or ": " or ",
    "\"{0}\"": "\"{0}\"",
    "%1 get value at %2": "%1 lấy phần tử tại vị trí %2",
    "%1 of %2 and %3": "%1 of %2 and %3",
    "%1 set value at %2 to %3": "%1 đặt phần từ tại vị trí %2 là %3",
    "%{0} %property": "%{0} %property",
    "'delete' not supported on array": "'delete' not supported on array",
    "'this' used outside of a method": "'this' used outside of a method",
    "'{0}' is a reserved name.": "'{0}' is a reserved name.",
    "'{0}' is not a type near '{1}'": "'{0}' is not a type near '{1}'",
    ".equ redefined as label": ".equ redefined as label",
    "1 hour": "1 hour",
    "1 minute": "1 minute",
    "1 second": "1 second",
    "1/16": "1/16",
    "1/16 Note": "1/16 Note",
    "1/32": "1/32",
    "1/32 Note": "1/32 Note",
    "1/4": "1/4",
    "1/4 Note": "1/4 Note",
    "1/8": "1/8",
    "1/8 Note": "1/8 Note",
    "100 ms": "100 ms",
    "2 seconds": "2 seconds",
    "2. Pair your {0} to your browser": "2. Pair your {0} to your browser",
    "200 ms": "200 ms",
    "5 seconds": "5 seconds",
    "500 ms": "500 ms",
    "<python code>": "<python code>",
    "@hi/lo out of range": "@hi/lo out of range",
    "A MakeCode project": "A MakeCode project",
    "A letter, word, or line of text.": "A letter, word, or line of text.",
    "A#": "A#",
    "About": "About",
    "About...": "About...",
    "Accessible Blocks": "Accessible Blocks",
    "Accessible Blocks Off": "Accessible Blocks Off",
    "Accessible Blocks On": "Accessible Blocks On",
    "Activity {0}": "Activity {0}",
    "Add Comment": "Thêm nhận xét",
    "Add a new {0}...": "Add a new {0}...",
    "Add a parameter": "Add a parameter",
    "Add an extension to the project": "Add an extension to the project",
    "Add argument": "Add argument",
    "Add breakpoint": "Add breakpoint",
    "Add custom blocks?": "Add custom blocks?",
    "Add extensions?": "Add extensions?",
    "Add license": "Add license",
    "Add localized file": "Add localized file",
    "Add measure": "Add measure",
    "Add new file?": "Add new file?",
    "Add return value": "Add return value",
    "Add your code here": "Add your code here",
    "Add {0} parameter": "Add {0} parameter",
    "Added {0} to files in {1}.": "Added {0} to files in {1}.",
    "Adding extension...": "Adding extension...",
    "Adds two numbers together": "Adds two numbers together",
    "Advanced": "Advanced",
    "Alert": "Alert",
    "All blocks are new.": "All blocks are new.",
    "Angle": "Angle",
    "Animals": "Animals",
    "Animated bar chart": "Animated bar chart",
    "Animation": "Animation",
    "Apply": "Apply",
    "Aquatic": "Aquatic",
    "Are you sure?": "Are you sure?",
    "Arg '{0}' missing annotation": "Arg '{0}' missing annotation",
    "Array": "Array",
    "Asset Name": "Asset Name",
    "Asset Preview": "Asset Preview",
    "Assets": "Assets",
    "Assets not supported here.": "Assets not supported here.",
    "Assigns a value to a variable": "Assigns a value to a variable",
    "At inline assembly:\n": "At inline assembly:\n",
    "Authorize MakeCode": "Authorize MakeCode",
    "Back": "Back",
    "Back to application": "Back to application",
    "Back to safety": "Back to safety",
    "Background": "Background",
    "Based on {0}": "Based on {0}",
    "Beta": "Beta",
    "Beta Editor": "Beta Editor",
    "Blocks": "Blocks",
    "Blocks Error List": "Blocks Error List",
    "Blocks and {0}": "Blocks and {0}",
    "Blocks, {0}, and {1}": "Blocks, {0}, and {1}",
    "Boards": "Boards",
    "Boolean": "Boolean",
    "Breadcrumb": "Breadcrumb",
    "Buildings": "Buildings",
    "Burger": "Burger",
    "Buy": "Buy",
    "C#": "C#",
    "Call Stack": "Call Stack",
    "Call a function": "Call a function",
    "Call the user-defined function.": "Call the user-defined function.",
    "Cancel": "Cancel",
    "Cannot Connect Device": "Cannot Connect Device",
    "Cannot access {0} while offline": "Cannot access {0} while offline",
    "Cannot add {0} extension": "Cannot add {0} extension",
    "Cannot compute enum value": "Cannot compute enum value",
    "Canvas Pan Tool": "Canvas Pan Tool",
    "Car": "Car",
    "Casting not supported in blocks": "Casting not supported in blocks",
    "Cat": "Cat",
    "Categories": "Categories",
    "Change development board": "Change development board",
    "Changes the value of item by 1": "Changes the value of item by 1",
    "Checkout the master branch...": "Checkout the master branch...",
    "Cherry": "Cherry",
    "Choose Hardware": "Choose Hardware",
    "Choose a camera": "Cài đặt webcam",
    "Choose your hardware": "Choose your hardware",
    "Circle Tool": "Circle Tool",
    "Clear": "Clear",
    "Click for help": "Click for help",
    "Click for one-click downloads.": "Click for one-click downloads.",
    "Click to download again": "Click to download again",
    "Click to select hardware": "Click to select hardware",
    "Click to show a hint!": "Click to show a hint!",
    "Close": "Close",
    "Cloud Projects": "Cloud Projects",
    "Code": "Code",
    "Code is running...": "Code is running...",
    "Code options": "Code options",
    "Collapse": "Collapse",
    "Collapse Block": "Thu nhỏ khối",
    "Collapse Blocks": "Thu nhỏ tất cả",
    "Collapse Error List": "Collapse Error List",
    "Collapse blocks": "Thu nhỏ tất cả",
    "Collapse the side documentation": "Collapse the side documentation",
    "Color Palette": "Color Palette",
    "Color Select Tool": "Color Select Tool",
    "Color {0}": "Color {0}",
    "Color {0} ({1})": "Color {0} ({1})",
    "Colors": "Colors",
    "Comic moving {1} file to {0}": "Comic moving {1} file to {0}",
    "Commit and push changes": "Commit and push changes",
    "Commit conflict": "Commit conflict",
    "Commit conflict in {0}": "Commit conflict in {0}",
    "Commit to update Pages.": "Commit to update Pages.",
    "Commit your changes...": "Commit your changes...",
    "Comparison": "So sánh",
    "Compilation failed": "Compilation failed",
    "Computer": "Computer",
    "Conditionals": "Điều kiện",
    "Boolean": "Boolean!",
    "Confirm": "Confirm",
    "Confirm merge": "Confirm merge",
    "Connect Device": "Connect Device",
    "Connect device": "Connect device",
    "Connect to your {0}\u2026": "Connect to your {0}\u2026",
    "Connected to {0}": "Connected to {0}",
    "Connecting to your {0}": "Connecting to your {0}",
    "Connecting...": "Connecting...",
    "Console": "Console",
    "Content URL": "Content URL",
    "Continue": "Tiếp tục",
    "Continue Anyway": "Continue Anyway",
    "Continue execution": "Continue execution",
    "Convert code to Blocks": "Convert code to Blocks",
    "Convert code to JavaScript": "Convert code to JavaScript",
    "Convert code to Python": "Convert code to Python",
    "Copied!": "Copied!",
    "Copy": "Copy",
    "Copy the URL of the project.": "Copy the URL of the project.",
    "Could not find operator {0}": "Could not find operator {0}",
    "Could not import tutorial": "Could not import tutorial",
    "Cowbell": "Cowbell",
    "Create": "Create",
    "Create 'call {0}'": "Tạo khối 'gọi hàm {0}'",
    "Create 'get %1'": "Create 'get %1'",
    "Create 'get {0}'": "Create 'get {0}'",
    "Create 'set %1'": "Create 'set %1'",
    "Create GitHub repository": "Create GitHub repository",
    "Create New Asset": "Create New Asset",
    "Create a Project {0}": "Create a Project {0}",
    "Create a function.": "Create a function.",
    "Create a new asset": "Create a new asset",
    "Create a new kind...": "Create a new kind...",
    "Create a new tile": "Create a new tile",
    "Create a new {0} asset": "Create a new {0} asset",
    "Create new GitHub repository": "Create new GitHub repository",
    "Create new branch": "Create new branch",
    "Create new...": "Create new...",
    "Create pull request": "Create pull request",
    "Create release": "Create release",
    "Creates a new Array": "Creates a new Array",
    "Creates a new array.": "Creates a new array.",
    "Creates a new empty project": "Creates a new empty project",
    "Critical update failed": "Critical update failed",
    "Critical update required": "Critical update required",
    "Current release: {0}": "Current release: {0}",
    "Current value for '{0}'": "Current value for '{0}'",
    "Curve": "Curve",
    "Custom": "Custom",
    "Custom blocks": "Custom blocks",
    "D#": "D#",
    "DOWN": "DOWN",
    "DRIVE": "DRIVE",
    "Data Log": "Data Log",
    "De-select all projects": "De-select all projects",
    "Debug Extension Code": "Debug Extension Code",
    "Debug this project": "Debug this project",
    "Debugger": "Debugger",
    "Debugger statement": "Debugger statement",
    "Debugger toolbar": "Debugger toolbar",
    "Declares a variable named 'item'": "Declares a variable named 'item'",
    "Define a function": "Define a function",
    "Delete": "Delete",
    "Delete All Blocks": "Xóa tất cả khối",
    "Delete Asset": "Delete Asset",
    "Delete Block": "Xóa khối",
    "Delete Blocks": "Xóa các khối",
    "Delete Current Frame": "Delete Current Frame",
    "Delete Palette": "Delete Palette",
    "Delete Profile": "Delete Profile",
    "Delete Project": "Xóa dự án",
    "Delete all {0} blocks?": "Delete all {0} blocks?",
    "Delete extension {0}": "Delete extension {0}",
    "Delete file {0}": "Delete file {0}",
    "Delete palette": "Delete palette",
    "Delete the \"%1\" variable": "Delete the \"%1\" variable",
    "Delete the selected asset": "Delete the selected asset",
    "Delete the selected tile": "Delete the selected tile",
    "Describe your changes": "Describe your changes",
    "Describe your changes.": "Describe your changes.",
    "Detect Hardware with WebUSB": "Detect Hardware with WebUSB",
    "Device": "Device",
    "Device in use or not found.": "Device in use or not found.",
    "Disable Block": "Disable Block",
    "Disable Slow-Mo": "Disable Slow-Mo",
    "Disabled": "Disabled",
    "Discard and go to Blocks": "Discard and go to Blocks",
    "Disconnect": "Disconnect",
    "Disconnect GitHub": "Disconnect GitHub",
    "Do you want to fork {0}?": "Do you want to fork {0}?",
    "Docs": "Tài liệu",
    "Documentation": "Documentation",
    "Dog": "Dog",
    "Don't show this again": "Don't show this again",
    "Done": "Done",
    "Download": "Download",
    "Download Again": "Download Again",
    "Download Anyway": "Download Anyway",
    "Download Zip": "Download Zip",
    "Download as File": "Download as File",
    "Download code via Web Bluetooth": "Download code via Web Bluetooth",
    "Download completed...": "Download completed...",
    "Download gifs of the simulator": "Download gifs of the simulator",
    "Download options": "Download options",
    "Download ready...": "Download ready...",
    "Download your code to the {0}": "Download your code to the {0}",
    "Downloaded!": "Downloaded!",
    "Downloading...": "Downloading...",
    "Draw walls": "Draw walls",
    "Dropdown menu {0}": "Dropdown menu {0}",
    "Drums": "Drums",
    "Duck": "Duck",
    "Dungeon": "Dungeon",
    "Duplicate": "Duplicate",
    "Duplicate Comment": "Duplicate Comment",
    "Duplicate Current Frame": "Duplicate Current Frame",
    "Duplicate Project": "Duplicate Project",
    "Duplicate function declaration": "Duplicate function declaration",
    "Duplicate the selected asset": "Duplicate the selected asset",
    "Duplicate the selected tile": "Duplicate the selected tile",
    "Duration (milliseconds)": "Duration (milliseconds)",
    "Duration (ms)": "Duration (ms)",
    "Edit": "Edit",
    "Edit Function": "Chỉnh sửa hàm",
    "Edit Settings As text": "Edit Settings As text",
    "Edit the selected asset": "Edit the selected asset",
    "Edit the selected tile": "Edit the selected tile",
    "Edit this page on GitHub": "Edit this page on GitHub",
    "Edit this project": "Edit this project",
    "Editor": "Editor",
    "Editor Extensions": "Editor Extensions",
    "Editor toolbar": "Editor toolbar",
    "Effect": "Effect",
    "Electronics": "Electronics",
    "Enable Block": "Enable Block",
    "Enabled": "Enabled",
    "Enter your project name here": "Enter your project name here",
    "Erase Tool": "Erase Tool",
    "Error List": "Error List",
    "Events must be top level": "Events must be top level",
    "Everything seems fine!\n": "Everything seems fine!\n",
    "Examples": "Examples",
    "Exception:": "Exception:",
    "Exit Debug Mode": "Exit Debug Mode",
    "Exit fullscreen mode": "Exit fullscreen mode",
    "Exit tutorial": "Exit tutorial",
    "Expand": "Mở rộng",
    "Expand Block": "Mở rộng khối",
    "Expand Blocks": "Mở rộng tất cả khối",
    "Expand the side documentation": "Expand the side documentation",
    "Experimental Hardware": "Experimental Hardware",
    "Experiments": "Experiments",
    "Experiments changed": "Experiments changed",
    "Experiments enabled.": "Experiments enabled.",
    "Explorer": "Explorer",
    "Export data": "Export data",
    "Exporting data....": "Exporting data....",
    "Exporting text....": "Exporting text....",
    "Extension Errors": "Extension Errors",
    "Extension search results": "Extension search results",
    "Extension zone": "Extension zone",
    "Extension {0}:\n": "Extension {0}:\n",
    "Extensions": "Mở rộng",
    "External Inputs": "External Inputs",
    "Extracting files...": "Extracting files...",
    "F#": "F#",
    "Failed to connect": "Failed to connect",
    "Falling": "Falling",
    "False": "False",
    "Feedback": "Feedback",
    "File already exists": "File already exists",
    "File explorer toolbar": "File explorer toolbar",
    "Files in folder {0}": "Files in folder {0}",
    "Fill Tool": "Fill Tool",
    "Filter": "Filter",
    "Find...": "Tìm kiếm...",
    "Finish": "Finish",
    "Finish the tutorial.": "Finish the tutorial.",
    "Finishing up...": "Finishing up...",
    "Fish": "Fish",
    "Flashing device...": "Flashing device...",
    "Flip horizontal": "Flip horizontal",
    "Flip vertical": "Flip vertical",
    "Food": "Food",
    "Forest": "Forest",
    "Fork repository": "Fork repository",
    "Format Code": "Sắp xếp khối",
    "Frequency": "Frequency",
    "Functions": "Hàm",
    "Furniture": "Furniture",
    "G#": "G#",
    "Gallery": "Gallery",
    "Generate Similar Sound": "Generate Similar Sound",
    "Get latest": "Get latest",
    "Getting started": "Getting started",
    "Gilroy": "Gilroy",
    "GitHub": "GitHub",
    "GitHub Pages JavaScript": "GitHub Pages JavaScript",
    "GitHub didn't accept token": "GitHub didn't accept token",
    "GitHub editor": "GitHub editor",
    "GitHub release created.": "GitHub release created.",
    "GitHub token generation page": "GitHub token generation page",
    "Give Feedback": "Give Feedback",
    "Give your project a name.": "Give your project a name.",
    "Globals": "Globals",
    "Go Back": "Go Back",
    "Go Home": "Go Home",
    "Go ahead!": "Go ahead!",
    "Go back": "Go back",
    "Go back to create a new project": "Go back to create a new project",
    "Go back to live editor": "Go back to live editor",
    "Go to Definition": "Đi tới định nghĩa hàm",
    "Go to GitHub": "Go to GitHub",
    "Go to error": "Go to error",
    "Go to step {0} of {1}": "Go to step {0} of {1}",
    "Go to the old editor": "Go to the old editor",
    "Go to {0}: {1}": "Go to {0}: {1}",
    "Got it!": "Got it!",
    "Green Screen Off": "Tắt màn xanh",
    "Green Screen On": "Bật màn xanh",
    "Green background": "Green background",
    "Green screen": "Green screen",
    "Grid view": "Grid view",
    "Grid:": "Grid:",
    "HIGH": "HIGH",
    "Hardware": "Phần cứng",
    "Forum": "Diễn đàn",
    "Hello": "Hello",
    "Help": "Hỗ trợ",
    "Help on {0} dialog": "Help on {0} dialog",
    "Help resource not found": "Help resource not found",
    "Hi-Hat": "Hi-Hat",
    "Hide Previous Frame": "Hide Previous Frame",
    "Hide optional arguments": "Hide optional arguments",
    "Hide the simulator": "Hide the simulator",
    "High A": "High A",
    "High A#": "High A#",
    "High B": "High B",
    "High C": "High C",
    "High C#": "High C#",
    "High Contrast Off": "Tắt tương phản",
    "High Contrast On": "Bật tương phản",
    "High D": "High D",
    "High D#": "High D#",
    "High E": "High E",
    "High F": "High F",
    "High F#": "High F#",
    "High G": "High G",
    "High G#": "High G#",
    "History": "History",
    "Home": "Home",
    "Home screen": "Home screen",
    "Hopeful": "Hopeful",
    "Host multiplayer game": "Host multiplayer game",
    "How do I add a new language?": "How do I add a new language?",
    "How to unpair your {0}": "How to unpair your {0}",
    "How to use this pull request": "How to use this pull request",
    "Hz": "Hz",
    "I'm done!": "I'm done!",
    "Ignore errors and open": "Ignore errors and open",
    "Ignore the changes from GitHub.": "Ignore the changes from GitHub.",
    "Image": "Image",
    "Image Height": "Image Height",
    "Image Width": "Image Width",
    "Image of {0}": "Image of {0}",
    "Import": "Import",
    "Import Extension Files": "Import Extension Files",
    "Import File": "Import File",
    "Import File...": "Import File...",
    "Import Project": "Import Project",
    "Import URL...": "Import URL...",
    "Import a project": "Import a project",
    "Import zip file?": "Import zip file?",
    "Incompatible Code": "Incompatible Code",
    "Initialize empty repo": "Initialize empty repo",
    "Inline Inputs": "Inline Inputs",
    "Insert": "Insert",
    "Installing update...": "Installing update...",
    "Interpolation": "Interpolation",
    "Interval Between Frames (ms)": "Interval Between Frames (ms)",
    "Invalid Input": "Invalid Input",
    "Invalid encoded PNG format": "Invalid encoded PNG format",
    "Invalid file": "Invalid file",
    "Invalid file name": "Invalid file name",
    "Invalid magic in encoded PNG": "Invalid magic in encoded PNG",
    "Invalid pxt.json file.": "Invalid pxt.json file.",
    "Invalid repository name.": "Invalid repository name.",
    "Invalid tagged template": "Invalid tagged template",
    "Invalid tutorial format": "Invalid tutorial format",
    "Invalid {0} response {1} at {2}": "Invalid {0} response {1} at {2}",
    "Is there a bug?": "Is there a bug?",
    "Is this content inappropriate?": "Is this content inappropriate?",
    "It's empty in here": "It's empty in here",
    "JavaScript editor": "JavaScript editor",
    "JavaScript expression": "JavaScript expression",
    "JavaScript statement": "JavaScript statement",
    "Jump": "Jump",
    "Jump to Toolbox": "Jump to Toolbox",
    "Keep both": "Keep both",
    "Keep local": "Keep local",
    "Keep remote": "Keep remote",
    "Kick Drum": "Kick Drum",
    "LOSE": "LOSE",
    "LOW": "LOW",
    "Ladybug": "Ladybug",
    "Language": "Ngôn ngữ",
    "Large Cursor (5px)": "Large Cursor (5px)",
    "Laser": "Laser",
    "Last Modified": "Last Modified",
    "Launch Immersive Reader": "Launch Immersive Reader",
    "Launch in fullscreen": "Launch in fullscreen",
    "Learn about GitHub Pages.": "Learn about GitHub Pages.",
    "Learn about releases.": "Learn about releases.",
    "Learn about testing extensions.": "Learn about testing extensions.",
    "Learn about version numbers.": "Learn about version numbers.",
    "Learn more": "Learn more",
    "Learn more about GitHub": "Learn more about GitHub",
    "Learn more about hardware": "Learn more about hardware",
    "Learn more about licenses.": "Learn more about licenses.",
    "Learn more!": "Learn more!",
    "Lemon": "Lemon",
    "Less...": "Less...",
    "Line Tool": "Line Tool",
    "Line {0}: {1}": "Line {0}: {1}",
    "Linear": "Linear",
    "List of available languages": "List of available languages",
    "List view": "List view",
    "Loading blocks...": "Loading blocks...",
    "Local": "Local",
    "Local GitHub Projects": "Local GitHub Projects",
    "Local GitHub extension": "Local GitHub extension",
    "Lock Aspect Ratio": "Lock Aspect Ratio",
    "Log out of GitHub": "Log out of GitHub",
    "Logarithmic": "Logarithmic",
    "Loop": "Loop",
    "Low A": "Low A",
    "Low A#": "Low A#",
    "Low B": "Low B",
    "Low C": "Low C",
    "Low C#": "Low C#",
    "Low D": "Low D",
    "Low D#": "Low D#",
    "Low E": "Low E",
    "Low F": "Low F",
    "Low F#": "Low F#",
    "Low G": "Low G",
    "Low G#": "Low G#",
    "Made with \u2764\ufe0f in {0}.": "Made with \u2764\ufe0f in {0}.",
    "Make": "Make",
    "Make a Function...": "Tạo hàm...",
    "Make a Variable...": "Tạo biến...",
    "MakeCode Home": "MakeCode Home",
    "MakeCode extension for my gadget": "MakeCode extension for my gadget",
    "Marquee Tool": "Marquee Tool",
    "Measures:": "Measures:",
    "Medium Cursor (3px)": "Medium Cursor (3px)",
    "Merge conflict": "Merge conflict",
    "Merge pull request": "Merge pull request",
    "Middle A": "Middle A",
    "Middle A#": "Middle A#",
    "Middle B": "Middle B",
    "Middle C": "Middle C",
    "Middle C#": "Middle C#",
    "Middle D": "Middle D",
    "Middle D#": "Middle D#",
    "Middle E": "Middle E",
    "Middle F": "Middle F",
    "Middle F#": "Middle F#",
    "Middle G": "Middle G",
    "Middle G#": "Middle G#",
    "Miscellaneous": "Miscellaneous",
    "Modify": "Modify",
    "More...": "Thêm...",
    "Multiplies two numbers together": "Multiplies two numbers together",
    "Music Workspace": "Music Workspace",
    "Mute audio": "Mute audio",
    "My Assets": "My Assets",
    "My Profile": "My Profile",
    "My Projects": "My Projects",
    "My Tiles": "My Tiles",
    "Mystery": "Mystery",
    "Name": "Name",
    "Name Your Custom Palette": "Name Your Custom Palette",
    "Name must not be empty": "Name must not be empty",
    "Namespaces cannot be nested.": "Namespaces cannot be nested.",
    "Navigate": "Navigate",
    "Navigate to: ": "Navigate to: ",
    "Network request failed": "Network request failed",
    "New": "New",
    "New Connected Tab": "New Connected Tab",
    "New Project": "New Project",
    "New Tab": "New Tab",
    "New branch name": "New branch name",
    "New function name:": "New function name:",
    "New palette": "New palette",
    "New variable name:": "Đặt tên biến:",
    "New variable...": "Tạo biến mới...",
    "New {0}:": "New {0}:",
    "Next": "Next",
    "No": "No",
    "No asset name": "No asset name",
    "No asset selected": "No asset selected",
    "No basic blocks...": "No basic blocks...",
    "No basic results...": "No basic results...",
    "No call info found": "No call info found",
    "No changes.": "No changes.",
    "No data to export": "No data to export",
    "No local changes found.": "No local changes found.",
    "No module named '{0}'": "No module named '{0}'",
    "No search results...": "No search results...",
    "No such repository or branch.": "No such repository or branch.",
    "No variables to show": "No variables to show",
    "Noise": "Noise",
    "None": "None",
    "Not a git extension.": "Not a git extension.",
    "Not overwriting {0}.": "Not overwriting {0}.",
    "Nothing to commit!": "Nothing to commit!",
    "Number": "Number",
    "OFF": "TẮT",
    "ON": "MỞ",
    "Offline": "Offline",
    "Ok": "Ok",
    "Okay": "Okay",
    "Only show selected instrument": "Only show selected instrument",
    "Ooops, could not read file": "Ooops, could not read file",
    "Oops": "Oops",
    "Oops, something went wrong": "Oops, something went wrong",
    "Oops, this project is too new!": "Oops, this project is too new!",
    "Oops, we could not write to {0}.": "Oops, we could not write to {0}.",
    "Open": "Open",
    "Open Example": "Open Example",
    "Open Pages": "Open Pages",
    "Open Project": "Open Project",
    "Open Project in a new tab": "Open Project in a new tab",
    "Open YouTube video in new window": "Open YouTube video in new window",
    "Open an editor in a new tab.": "Open an editor in a new tab.",
    "Open assembly instructions": "Open assembly instructions",
    "Open device console": "Open device console",
    "Open documentation": "Open documentation",
    "Open documentation in new tab": "Open documentation in new tab",
    "Open file from your computer": "Open file from your computer",
    "Open files from your computer": "Open files from your computer",
    "Open in Editor": "Open in Editor",
    "Open in Forum": "Open in Forum",
    "Open in New Connected Tab": "Open in New Connected Tab",
    "Open in New Tab": "Open in New Tab",
    "Open in VS Code": "Open in VS Code",
    "Open in fullscreen": "Open in fullscreen",
    "Open in {0}": "Open in {0}",
    "Open link in new window": "Open link in new window",
    "Open project URL": "Open project URL",
    "Open repository in GitHub.": "Open repository in GitHub.",
    "Open simulator console": "Open simulator console",
    "Open the color palette": "Open the color palette",
    "Open this page at {0}": "Open this page at {0}",
    "Open {0} data": "Open {0} data",
    "Open {0} file": "Open {0} file",
    "PXT_COMM_BASE not defined": "PXT_COMM_BASE not defined",
    "Paint Tool": "Paint Tool",
    "Pair": "Pair",
    "Pair Bluetooth": "Pair Bluetooth",
    "Pair Now": "Pair Now",
    "Pairing Bluetooth device...": "Pairing Bluetooth device...",
    "Pairing error: {0}": "Pairing error: {0}",
    "Palette Name": "Palette Name",
    "Paris": "Paris",
    "Paste GitHub token here:": "Paste GitHub token here:",
    "Pause execution": "Pause execution",
    "Pause recording": "Pause recording",
    "People": "People",
    "Pick a name...": "Pick a name...",
    "Pick a release version": "Pick a release version",
    "Play": "Play",
    "Play Animation Preview": "Play Animation Preview",
    "Play Video Lesson": "Play Video Lesson",
    "Player {0}": "Player {0}",
    "Please log in to {0}": "Please log in to {0}",
    "Please pick a different name.": "Please pick a different name.",
    "Please sign in to GitHub again.": "Please sign in to GitHub again.",
    "Please wait": "Please wait",
    "Pop out video": "Pop out video",
    "Preparing your zip file...": "Preparing your zip file...",
    "Press \"Connect\"": "Press \"Connect\"",
    "Press the Pair button below.": "Press the Pair button below.",
    "Preview": "Preview",
    "Preview Sound": "Preview Sound",
    "Preview {0}": "Preview {0}",
    "Print Code": "Print Code",
    "Print preview": "Print preview",
    "Print this page": "Print this page",
    "Print...": "In...",
    "Privacy": "Privacy",
    "Problems": "Problems",
    "Profile deleted!": "Profile deleted!",
    "Program Error: {0}": "Program Error: {0}",
    "Program too large": "Program too large",
    "Project '{0}' had a conflict!": "Project '{0}' had a conflict!",
    "Project Saved!": "Project Saved!",
    "Project Settings": "Project Settings",
    "Project cartridge": "Project cartridge",
    "Project has a conflict!": "Project has a conflict!",
    "Project has no name {0}": "Project has no name {0}",
    "Project saved to cloud": "Project saved to cloud",
    "Projects": "Projects",
    "Pull changes": "Pull changes",
    "Pull request (#{0})": "Pull request (#{0})",
    "Quit": "Quit",
    "Radio": "Radio",
    "Read more at {0}": "Read more at {0}",
    "Received: {0}": "Received: {0}",
    "Recommended": "Recommended",
    "Recommended Extensions": "Recommended Extensions",
    "Reconnecting to your {0}": "Reconnecting to your {0}",
    "Rectangle Tool": "Rectangle Tool",
    "Redo": "Redo",
    "Reference": "Reference",
    "Refresh extension {0}": "Refresh extension {0}",
    "Register": "Register",
    "Release zone": "Release zone",
    "Reload": "Reload",
    "Remember me": "Remember me",
    "Remove Comment": "Xóa các ghi chú",
    "Remove breakpoint": "Remove breakpoint",
    "Remove extension(s) and add {0}": "Remove extension(s) and add {0}",
    "Remove it": "Remove it",
    "Remove measure": "Remove measure",
    "Remove return value": "Remove return value",
    "Remove {0}": "Remove {0}",
    "Remove {0} extension": "Remove {0} extension",
    "Removing {0}...": "Removing {0}...",
    "Rename Your Custom Palette": "Rename Your Custom Palette",
    "Rename all '%1' variables to:": "Đổi tên biến '%1' thành to:",
    "Rename palette": "Rename palette",
    "Rename variable...": "Rename variable...",
    "Rename your project": "Rename your project",
    "Replace my code": "Replace my code",
    "Report": "Report",
    "Report Abuse": "Report Abuse",
    "Report Abuse...": "Report Abuse...",
    "Report sent. Thank you!": "Report sent. Thank you!",
    "Repository '{0}' already exists.": "Repository '{0}' already exists.",
    "Repository description": "Repository description",
    "Repository name": "Repository name",
    "Repository visibility setting": "Repository visibility setting",
    "Reset": "Reset",
    "Resolve conflict": "Resolve conflict",
    "Resolve conflicts": "Resolve conflicts",
    "Restart debugging": "Restart debugging",
    "Restart the simulator": "Restart the simulator",
    "Restore": "Restore",
    "Restore '{0} {1}'": "Restore '{0} {1}'",
    "Returns either true or false.": "Returns either true or false.",
    "Returns the sine of the argument": "Returns the sine of the argument",
    "Reveal optional arguments": "Reveal optional arguments",
    "Reverse": "Reverse",
    "Revert": "Revert",
    "Revert all": "Revert all",
    "Revert all changes": "Revert all changes",
    "Revert file": "Revert file",
    "Rising": "Rising",
    "Rotate clockwise": "Rotate clockwise",
    "Rotate counterclockwise": "Rotate counterclockwise",
    "Run Simulator": "Run Simulator",
    "Run code when the program starts": "Run code when the program starts",
    "Save": "Save",
    "Save Project": "Save Project",
    "Save for offline": "Save for offline",
    "Save raw text": "Save raw text",
    "Save the project": "Save the project",
    "Save your changes in GitHub.": "Save your changes in GitHub.",
    "Saved to cloud": "Saved to cloud",
    "Saved to cloud!": "Saved to cloud!",
    "Saving file...": "Saving file...",
    "Saving project to cloud...": "Saving project to cloud...",
    "Saving to cloud...": "Saving to cloud...",
    "Saving...": "Saving...",
    "Sawtooth": "Sawtooth",
    "Scale": "Scale",
    "Search": "Search",
    "Search Documentation": "Search Documentation",
    "Search or enter project URL...": "Search or enter project URL...",
    "Search...": "Search...",
    "See all projects": "See all projects",
    "See more": "See more",
    "See previous": "See previous",
    "Select Language": "Select Language",
    "Select a {0} file to open.": "Select a {0} file to open.",
    "Select all projects": "Select all projects",
    "Select code editor language": "Select code editor language",
    "Sending abuse report...": "Sending abuse report...",
    "Settings saved": "Settings saved",
    "Share": "Share",
    "Share Project": "Share Project",
    "Share this tutorial": "Share this tutorial",
    "Shared QR Code": "Shared QR Code",
    "Show": "Show",
    "Show Hint": "Show Hint",
    "Show Instructions": "Show Instructions",
    "Show Previous Frame": "Show Previous Frame",
    "Show Simulator": "Show Simulator",
    "Show bass clef": "Show bass clef",
    "Show data": "Show data",
    "Show the simulator": "Show the simulator",
    "Show walls": "Show walls",
    "Side menu": "Side menu",
    "Sign In": "Sign In",
    "Sign in": "Sign in",
    "Sign in to see cloud projects": "Sign in to see cloud projects",
    "Sign in with GitHub": "Sign in with GitHub",
    "Sign out": "Sign out",
    "Signed in: {0}": "Signed in: {0}",
    "Signed out": "Signed out",
    "Signed out from GitHub": "Signed out from GitHub",
    "Signing you in to {0}...": "Signing you in to {0}...",
    "Signing you into GitHub...": "Signing you into GitHub...",
    "Simulator": "Simulator",
    "Simulator Gifs": "Simulator Gifs",
    "Simulator Screenshots": "Simulator Screenshots",
    "Simulator toolbar": "Simulator toolbar",
    "Sine": "Sine",
    "Sitka": "Sitka",
    "Size": "Size",
    "Skip": "Skip",
    "Skip to JavaScript editor": "Skip to JavaScript editor",
    "Skip to Python editor": "Skip to Python editor",
    "Skip to main content": "Skip to main content",
    "Slow-Mo": "Slow-Mo",
    "Small Cursor (1px)": "Small Cursor (1px)",
    "Snapshot": "Chụp hình",
    "Snapshot and publish your code.": "Snapshot and publish your code.",
    "Snare": "Snare",
    "Snippet Builder": "Snippet Builder",
    "Some blocks were changed.": "Some blocks were changed.",
    "Some extensions will be removed": "Some extensions will be removed",
    "Something changed.": "Something changed.",
    "Song": "Song",
    "Sort by Last Modified {0}": "Sort by Last Modified {0}",
    "Sort by Name {0}": "Sort by Name {0}",
    "Sort by dropdown": "Sort by dropdown",
    "Space": "Space",
    "Sports": "Sports",
    "Square": "Square",
    "Squash and merge": "Squash and merge",
    "Squash and merge?": "Squash and merge?",
    "Staff grid resolution": "Staff grid resolution",
    "Start": "Start",
    "Start Tutorial": "Start Tutorial",
    "Start recording": "Start recording",
    "Start the simulator": "Start the simulator",
    "Starting": "Starting",
    "Starting the simulator": "Starting the simulator",
    "Static Python": "Static Python",
    "Stay in JavaScript": "Stay in JavaScript",
    "Stay in Python": "Stay in Python",
    "Step into": "Step into",
    "Step out": "Step out",
    "Step over": "Step over",
    "Step {0} of {1}": "Step {0} of {1}",
    "Stop": "Stop",
    "Stop Animation Preview": "Stop Animation Preview",
    "Stop Sound Preview": "Stop Sound Preview",
    "Stop the simulator": "Stop the simulator",
    "Stopping update...": "Stopping update...",
    "Submit": "Submit",
    "Support": "Support",
    "Swamp": "Swamp",
    "Switch sort order to {0}": "Switch sort order to {0}",
    "Switch to a different branch": "Switch to a different branch",
    "Switch to master branch": "Switch to master branch",
    "Symbol '{0}' is missing pyName": "Symbol '{0}' is missing pyName",
    "Symbol '{0}' is missing pyQName": "Symbol '{0}' is missing pyQName",
    "Sync branch": "Sync branch",
    "Syntax error in pxt.json": "Syntax error in pxt.json",
    "TAB indentaion not supported": "TAB indentaion not supported",
    "TCP sockets not available here": "TCP sockets not available here",
    "Take Screenshot": "Take Screenshot",
    "Take Screenshot (shortcut {0})": "Take Screenshot (shortcut {0})",
    "Take me back": "Take me back",
    "Tempo:": "Tempo:",
    "Temporary Asset": "Temporary Asset",
    "Tenor A": "Tenor A",
    "Tenor A#": "Tenor A#",
    "Tenor B": "Tenor B",
    "Tenor C": "Tenor C",
    "Tenor C#": "Tenor C#",
    "Tenor D": "Tenor D",
    "Tenor D#": "Tenor D#",
    "Tenor E": "Tenor E",
    "Tenor F": "Tenor F",
    "Tenor F#": "Tenor F#",
    "Tenor G": "Tenor G",
    "Tenor G#": "Tenor G#",
    "Terms of Use": "Terms of Use",
    "Test Extension": "Test Extension",
    "Text": "Text",
    "There are local changes.": "There are local changes.",
    "This Pull Request is closed!": "This Pull Request is closed!",
    "This repository looks empty.": "This repository looks empty.",
    "Tile": "Tile",
    "Tilemap": "Tilemap",
    "Timeout waiting for fork": "Timeout waiting for fork",
    "Toggle category {0}": "Toggle category {0}",
    "Toggle debug mode": "Toggle debug mode",
    "Toggle the simulator": "Toggle the simulator",
    "Toggle the {0} category": "Toggle the {0} category",
    "Token stored but not validated": "Token stored but not validated",
    "Token validated and stored": "Token validated and stored",
    "Tokyo": "Tokyo",
    "Tom": "Tom",
    "Toolbox": "Toolbox",
    "Toolbox crashed..": "Toolbox crashed..",
    "Tour": "Tour",
    "Track selection": "Track selection",
    "Translate": "Translate",
    "Translate the editor": "Translate the editor",
    "Translate this block": "Translate this block",
    "Transportation": "Transportation",
    "Tremolo": "Tremolo",
    "Triangle": "Triangle",
    "True": "True",
    "Try Again": "Try Again",
    "Try out the new snippet dialogs.": "Try out the new snippet dialogs.",
    "Try to fix": "Try to fix",
    "Turn off eraser tool": "Turn off eraser tool",
    "Turn on eraser tool": "Turn on eraser tool",
    "Tutorial Block Diffs": "Tutorial Block Diffs",
    "Tutorial step {0}": "Tutorial step {0}",
    "Tutorial {0} not found": "Tutorial {0} not found",
    "Tutorials": "Tutorials",
    "Type": "Type",
    "Type a name for your project": "Type a name for your project",
    "Type your name to confirm": "Type your name to confirm",
    "UP": "UP",
    "USB error on device {0} ({1})": "USB error on device {0} ({1})",
    "Unable to connect to cloud": "Unable to connect to cloud",
    "Unable to delete": "Unable to delete",
    "Unapproved Content": "Unapproved Content",
    "Undo": "Undo",
    "Unknown or undeclared identifier": "Unknown or undeclared identifier",
    "Unknown property access for {0}": "Unknown property access for {0}",
    "Unknown type for expression": "Unknown type for expression",
    "Unlink {0} from GitHub": "Unlink {0} from GitHub",
    "Unlock Aspect Ratio": "Unlock Aspect Ratio",
    "Unmute audio": "Unmute audio",
    "Untitled": "Untitled",
    "Update Firmware": "Update Firmware",
    "Update complete": "Update complete",
    "Update {0}": "Update {0}",
    "Updating extension {0} of {1}...": "Updating extension {0} of {1}...",
    "Updating...": "Updating...",
    "Upload": "Upload",
    "Upload failed, please try again.": "Upload failed, please try again.",
    "Uploaded!": "Uploaded!",
    "Uploading...": "Uploading...",
    "Use Developer token": "Use Developer token",
    "Use as Extension": "Use as Extension",
    "User Menu": "User Menu",
    "User picture": "User picture",
    "User-provided content": "User-provided content",
    "Variable '{0}' is never assigned": "Variable '{0}' is never assigned",
    "Variables": "Variables",
    "Vibrato": "Vibrato",
    "View All": "View All",
    "View all projects": "View all projects",
    "View commits": "View commits",
    "View latest row...": "View latest row...",
    "View project assets": "View project assets",
    "View {0} hero image": "View {0} hero image",
    "Volume": "Volume",
    "WIN": "WIN",
    "Want faster downloads?": "Want faster downloads?",
    "Warble": "Warble",
    "Watch Playlist": "Watch Playlist",
    "Watch Video": "Watch Video",
    "Water Drop": "Water Drop",
    "Waveform:": "Waveform:",
    "We couldn't find your {0}.": "We couldn't find your {0}.",
    "Whitespace changes only.": "Whitespace changes only.",
    "Why do you find it offensive?": "Why do you find it offensive?",
    "Wiring Instructions": "Wiring Instructions",
    "World": "World",
    "Would you like to delete '{0}'?": "Would you like to delete '{0}'?",
    "Yes": "Yes",
    "Your Functions": "Your Functions",
    "Your GitHub Repo...": "Your GitHub Repo...",
    "Your Variables": "Danh sách biến",
    "Zoom In": "Zoom In",
    "Zoom Out": "Zoom Out",
    "a": "a",
    "a `true` or `false` value": "a `true` or `false` value",
    "a conditional statement": "a conditional statement",
    "a decimal number": "a decimal number",
    "a few blocks": "a few blocks",
    "a few seconds ago": "a few seconds ago",
    "a minute ago": "a minute ago",
    "a piece of text": "a piece of text",
    "a whole number": "a whole number",
    "absolute number": "absolute number",
    "absolute of %1": "giá trị tuyệt đối %1",
    "absolute value of a number": "absolute value of a number",
    "added, changed or moved": "added, changed or moved",
    "adding extensions...": "adding extensions...",
    "adding {0}: {1}": "adding {0}: {1}",
    "an hour ago": "một tiếng trước",
    "an integer number": "an integer number",
    "apply requested changes if any": "apply requested changes if any",
    "arg": "arg",
    "argument": "argument",
    "arguments after **": "arguments after **",
    "arithmetic operation": "arithmetic operation",
    "array": "array",
    "array length": "array length",
    "array of": "tạo danh sách với",
    "ascending": "ascending",
    "assembly error": "assembly error",
    "assert missing message": "assert missing message",
    "asset": "asset",
    "assign the value of a variable": "assign the value of a variable",
    "at {0} (line {1})": "at {0} (line {1})",
    "b": "b",
    "bad assignment target": "bad assignment target",
    "bad field access": "bad field access",
    "bad target identifier": "bad target identifier",
    "binary op missing ts type": "binary op missing ts type",
    "black": "black",
    "blue": "blue",
    "board": "board",
    "bool": "bool",
    "boolean operation": "boolean operation",
    "break": "phá vòng lặp",
    "breakpoint": "breakpoint",
    "brown": "brown",
    "c": "c",
    "call": "gọi hàm",
    "call expr missing ts type": "call expr missing ts type",
    "call function": "gọi hàm",
    "call the function": "call the function",
    "calling non-function": "calling non-function",
    "camera {0}": "camera {0}",
    "can't find DAL.CFG_{0}": "can't find DAL.CFG_{0}",
    "can't find called function '{0}'": "can't find called function '{0}'",
    "cannot determine parent of {0}": "cannot determine parent of {0}",
    "cannot find captured value: {0}": "cannot find captured value: {0}",
    "cannot find outer loop": "cannot find outer loop",
    "cannot find type '{0}'": "cannot find type '{0}'",
    "cannot get class field": "cannot get class field",
    "cannot inherit from this type": "cannot inherit from this type",
    "cannot locate identifer": "cannot locate identifer",
    "cannot parse number at '{0}'": "cannot parse number at '{0}'",
    "change %1 by %2": "cộng dồn %1 với %2",
    "change %{0} %property by %{1}": "change %{0} %property by %{1}",
    "class expressions": "class expressions",
    "click on **New Project**": "click on **New Project**",
    "collapsed": "collapsed",
    "comparing two numbers": "comparing two numbers",
    "conflict!": "conflict!",
    "continue": "tiếp tục",
    "continue on non-loop": "continue on non-loop",
    "create GitHub repository": "create GitHub repository",
    "create an array": "create an array",
    "creating branch...": "creating branch...",
    "creating new project...": "creating new project...",
    "creating pull request...": "creating pull request...",
    "creating release...": "creating release...",
    "creating {0} repository...": "creating {0} repository...",
    "dark purple": "dark purple",
    "decorators not allowed here": "decorators not allowed here",
    "define the function": "define the function",
    "definition missing ts type": "definition missing ts type",
    "delete": "delete",
    "deleted": "deleted",
    "descending": "descending",
    "describe parameter here": "describe parameter here",
    "describe value here": "describe value here",
    "describe your function here": "describe your function here",
    "device": "device",
    "dialog": "dialog",
    "dict element": "dict element",
    "directive error: {0}": "directive error: {0}",
    "division remainder": "division remainder",
    "doSomething": "doSomething",
    "down": "down",
    "downloading extension...": "downloading extension...",
    "empty array": "danh sách trống",
    "end of file in a string": "end of file in a string",
    "error": "error",
    "errors in inline assembly": "errors in inline assembly",
    "exception: {0}": "exception: {0}",
    "expanded": "expanded",
    "expected an indented block": "expected an indented block",
    "expecting 2, 4, 8, or 16": "expecting 2, 4, 8, or 16",
    "expecting atom": "expecting atom",
    "expecting identifier": "expecting identifier",
    "expecting int16": "expecting int16",
    "expecting int32": "expecting int32",
    "expecting name": "expecting name",
    "expecting number": "expecting number",
    "expecting number, got '{0}'": "expecting number, got '{0}'",
    "expecting one argument": "expecting one argument",
    "expecting one or two numbers": "expecting one or two numbers",
    "expecting one value": "expecting one value",
    "expecting string": "expecting string",
    "expecting string in .object": "expecting string in .object",
    "expecting uint8": "expecting uint8",
    "expecting {0}": "expecting {0}",
    "expression": "expression",
    "field {0} not found": "field {0} not found",
    "filename is empty.": "filename is empty.",
    "for %1 from 0 to %2": "chạy %1 từ 0 tới %2",
    "for element %1 of %2": "với từng %1 của %2",
    "for in loops": "for in loops",
    "for of loops": "for of loops",
    "formal arg missing initializer": "formal arg missing initializer",
    "formal arg missing py type": "formal arg missing py type",
    "full recompile required": "full recompile required",
    "function": "hàm",
    "function missing pyRetType": "function missing pyRetType",
    "get a value in an array": "get a value in an array",
    "get accessor method": "get accessor method",
    "get the value of a variable": "get the value of a variable",
    "green": "green",
    "helpers.{0} isn't a function": "helpers.{0} isn't a function",
    "helpers.{0} not found": "helpers.{0} not found",
    "import extension": "import extension",
    "importing GitHub project...": "importing GitHub project...",
    "in a few seconds": "in a few seconds",
    "in a minute": "in a minute",
    "in an hour": "in an hour",
    "in {0} day{0:s}": "in {0} day{0:s}",
    "in {0} hour{0:s}": "in {0} hour{0:s}",
    "in {0} minute{0:s}": "in {0} minute{0:s}",
    "in {0} month{0:s}": "in {0} month{0:s}",
    "in {0} year{0:s}": "in {0} year{0:s}",
    "invalid pxt.json file": "invalid pxt.json file",
    "invalid syntax": "invalid syntax",
    "join": "join",
    "join items to create text": "join items to create text",
    "larger value of 2 numbers": "larger value of 2 numbers",
    "leaving tutorial...": "leaving tutorial...",
    "left": "left",
    "length of %1": "độ dài của %1",
    "length of array %1": "độ dài của danh sách %1",
    "level": "level",
    "light blue": "light blue",
    "light purple": "light purple",
    "loading editor...": "loading editor...",
    "loading project...": "loading project...",
    "loading...": "loading...",
    "local changes": "local changes",
    "logical negation": "logical negation",
    "math function": "math function",
    "merge once approved": "merge once approved",
    "merging pull request...": "merging pull request...",
    "message": "message",
    "minimum or maximum of 2 numbers": "minimum or maximum of 2 numbers",
    "more": "more",
    "myAnim": "myAnim",
    "myImage": "myImage",
    "myTile": "myTile",
    "not %1": "không phải %1",
    "not changed": "not changed",
    "now": "now",
    "num": "num",
    "offline": "offline",
    "on start %1 %2": "on start %1 %2",
    "on start event": "on start event",
    "open [@HOMEURL@](@HOMEURL@)": "open [@HOMEURL@](@HOMEURL@)",
    "or ": "hoặc ",
    "orange": "orange",
    "pause until": "chờ tới khi",
    "pause until %1": "chờ tới khi %1",
    "pause %1 ms": "chờ %1 ms",
    "pink": "pink",
    "player 1": "player 1",
    "player 2": "player 2",
    "preparing {0} repository...": "preparing {0} repository...",
    "pulling changes from GitHub...": "pulling changes from GitHub...",
    "purple": "purple",
    "red": "red",
    "repeat %1 times": "lặp lại %1 lần",
    "restoring commit...": "restoring commit...",
    "return": "return",
    "return %1": "trả về %1",
    "right": "right",
    "rounding functions": "rounding functions",
    "run code ": "run code ",
    "saved": "saved",
    "saved!": "saved!",
    "saving file failed...": "saving file failed...",
    "saving...": "saving...",
    "screenshot": "screenshot",
    "searching GitHub repositories...": "searching GitHub repositories...",
    "secondary": "secondary",
    "set %1 to %2": "đặt %1 là %2",
    "set %{0} %property to %{1}": "set %{0} %property to %{1}",
    "set a value in an array": "set a value in an array",
    "simulator": "simulator",
    "smaller value of 2 numbers": "smaller value of 2 numbers",
    "source": "source",
    "starting tutorial...": "starting tutorial...",
    "switching to JavaScript...": "switching to JavaScript...",
    "switching to Python...": "switching to Python...",
    "switching to blocks...": "switching to blocks...",
    "syncing...": "syncing...",
    "tempo": "tempo",
    "test {0}": "test {0}",
    "text": "text",
    "the name of the property to read": "the name of the property to read",
    "the new value of the property": "the new value of the property",
    "tile": "tile",
    "transparency": "transparency",
    "transparent": "transparent",
    "unexpected operator": "unexpected operator",
    "unsupported operator": "unsupported operator",
    "up": "up",
    "validating GitHub token...": "validating GitHub token...",
    "value": "value",
    "version mismatch": "version mismatch",
    "version not specified for {0}": "version not specified for {0}",
    "warning": "warning",
    "while %1": "lặp khi %1",
    "white": "white",
    "yellow": "yellow",
    "forever": "lặp vô tận",
    
    "{0}": "{0}",
    "{0} / {1}": "{0} / {1}",
    "{0} Logo": "{0} Logo",
    "{0} Only": "{0} Only",
    "{0} day{0:s} ago": "{0} ngày{0:s} trước",
    "{0} error list": "{0} error list",
    "{0} hour{0:s} ago": "{0} hour{0:s} trước",
    "{0} is up to date": "{0} is up to date",
    "{0} minute{0:s} ago": "{0} phút{0:s} trước",
    "{0} month{0:s} ago": "{0} tháng{0:s} trước",
    "{0} not currently supported": "{0} not currently supported",
    "{0} not supported": "{0} not supported",
    "{0} or {1}...": "{0} or {1}...",
    "{0} result matching '{1}'": "{0} result matching '{1}'",
    "{0} runtime": "{0} runtime",
    "{0} second{0:s} ago": "{0} giây{0:s} trước",
    "{0} version:": "{0} version:",
    "{0} version: {1}": "{0} version: {1}",
    "{0} version{1}": "{0} version{1}",
    "{0} year{0:s} ago": "{0} năm{0:s} trước",
    "{0}, {1}": "{0}, {1}",
    "{0}/{1}": "{0}/{1}",
    "{0}: {1}": "{0}: {1}",
    "{id:block}Duplicate": "{id:block}Nhân đôi",
    "{id:block}number": "{id:block}number",
    "{id:boolean}false": "sai",
    "{id:boolean}true": "đúng",
    "{id:category}Advanced": "Nâng cao",
    "{id:category}Arrays": "Danh sách",
    "{id:category}Basic": "{id:category}Cơ bản",
    "{id:category}Extensions": "{id:category}Mở rộng",
    "{id:category}Functions": "{id:category}Hàm",
    "{id:category}Logic": "{id:category}Logic",
    "{id:category}Loops": "{id:category}Vòng lặp",
    "{id:category}Math": "{id:category}Toán",
    "{id:category}Search": "{id:category}Tìm kiếm",
    "{id:category}Text": "{id:category}Chuỗi",
    "{id:category}Tutorials": "{id:category}Tutorials",
    "{id:category}Variables": "{id:category}Biến số",
    "{id:category}Input": "{id:category}Cảm biến",
    "{id:csvfilename}console": "{id:csvfilename}console",
    "{id:csvfilename}data": "{id:csvfilename}data",
    "{id:csvseparator}\t": "{id:csvseparator}\t",
    "{id:for_of}do": "thì",
    "{id:for}do": "thì",
    "{id:keyboard symbol}enter": "{id:keyboard symbol}enter",
    "{id:keyboard symbol}space": "{id:keyboard symbol}space",
    "{id:logic}else": "còn lại thì",
    "{id:logic}else if": "còn nếu",
    "{id:logic}if": "nếu",
    "{id:logic}then": "thì",
    "{id:note}A": "{id:note}A",
    "{id:note}B": "{id:note}B",
    "{id:note}C": "{id:note}C",
    "{id:note}D": "{id:note}D",
    "{id:note}E": "{id:note}E",
    "{id:note}F": "{id:note}F",
    "{id:note}G": "{id:note}G",
    "{id:op}**": "**",
    "{id:op}+": "+",
    "{id:op}-": "-",
    "{id:op}/": "/",
    "{id:op}acos": "acos",
    "{id:op}and": "và",
    "{id:op}asin": "asin",
    "{id:op}atan2": "atan2",
    "{id:op}ceiling": "làm tròn lên",
    "{id:op}cos": "cos",
    "{id:op}floor": "làm tròn xuống",
    "{id:op}integer \u00d7": "số nguyên \u00d7",
    "{id:op}max": "lớn nhất",
    "{id:op}min": "nhỏ nhất",
    "{id:op}or": "hoặc",
    "{id:op}round": "làm tròn",
    "{id:op}sin": "sin",
    "{id:op}square root": "căn bậc",
    "{id:op}tan": "tan",
    "{id:op}truncate": "rút gọn",
    "{id:op}\u00d7": "\u00d7",
    "{id:repeat}do": "",
    "{id:snippets}list": "{id:snippets}danh sách",
    "{id:var}index": "{id:var}vị trí",
    "{id:var}item": "{id:var}phần tử",
    "{id:var}list": "{id:var}danh sách",
    "{id:var}text list": "{id:var}danh sách chữ",
    "{id:var}value": "{id:var}phần từ",
    "{id:while}do": "",
    "{id:extension-tag}Hardware": "{id:extension-tag}Hardware",
    "{id:extension-tag}Sprites": "{id:extension-tag}Sprites",
    "{id:var}myImage": "{id:var}myImage",
    "{id:var}mySprite": "{id:var}mySprite",
    "{id:group}Gameplay": "{id:group}Gameplay",
    "{id:group}Servo": "{id:group}Servo",
    "{id:group}i2c": "{id:group}i2c",
    "{id:group}Modify": "{id:group}Modify",
    "{id:group}Operations": "{id:group}Operations",
    "{id:group}Read": "{id:group}Read",
    "{id:group}Create": "{id:group}Create",
    "{id:group}Drawing": "{id:group}Drawing",
    "{id:group}Transformations": "{id:group}Transformations",
    "{id:group}Melody": "{id:group}Melody",
    "{id:group}Songs": "{id:group}Songs",
    "{id:group}Sounds": "{id:group}Sounds",
    "{id:group}Tempo": "{id:group}Tempo",
    "{id:group}Tone": "{id:group}Tone",
    "{id:group}Volume": "{id:group}Volume",
    "{id:group}Animate": "{id:group}Animate",
    "{id:group}Camera": "{id:group}Camera",
    "{id:group}Countdown": "{id:group}Countdown",
    "{id:group}Dialogs": "{id:group}Dialogs",
    "{id:group}Effects": "{id:group}Effects",
    "{id:group}Game Over": "{id:group}Game Over",
    "{id:group}Image": "{id:group}Image",
    "{id:group}Life": "{id:group}Life",
    "{id:group}Lifecycle": "{id:group}Lifecycle",
    "{id:group}Locations": "{id:group}Locations",
    "{id:group}Multiplayer": "{id:group}Multiplayer",
    "{id:group}Overlaps": "{id:group}Overlaps",
    "{id:group}Physics": "{id:group}Physics",
    "{id:group}Projectiles": "{id:group}Projectiles",
    "{id:group}Prompt": "{id:group}Prompt",
    "{id:group}Scale": "{id:group}Scale",
    "{id:group}Score": "{id:group}Score",
    "{id:group}Screen": "{id:group}Screen",
    "{id:group}Single Player": "{id:group}Single Player",
    "{id:group}Theme": "{id:group}Theme",
    "{id:group}Tilemap Operations": "{id:group}Tilemap Operations",
    "{id:group}Tilemaps": "{id:group}Tilemaps",
    "remainder of %1 / %2": "số dư khi %1 / %2",
    "%1 of %2 and %3": "%1 của %2 và %3",
    "pick random %1 to %2": "ngẫu nhiên số giữa %1 và %2",
    "contrain %1 between %2 and %3": "giới hạn %1 giữa %2 và %3",
    "map %1 from low %2 high %3 to low %4 high %5": "chuyển %1 từ khoảng (%2 đến %3) sang khoảng (%4 đến %5)",
    "forever": "lặp lại",
}
window.translation = translation

if (pxt.Util.userLanguage() == 'vi') {
    pxt.Util.setLocalizedStrings(translation)
}


// intercept util.lf
var _util_lf = pxt.Util.lf
window.absent_translation = {}

// pxt.Util.lf = (sentence) => {
//     // console.log('util.lf', sentence)
//     if (sentence in translation) {
//         return translation[sentence]
//     }
//     else {
//         window.absent_translation[sentence] = true
//         return _util_lf(sentence)
//     }
//     // return _util_lf(sentence)
// }


setTimeout(async () => {
    console.log("Start IndexDB")
    window.database = await idb.openDB('garastem', 3, {
        upgrade(db) {
            db.createObjectStore('blb')
        }
    })
})

function spliceDeltaChunks(deltas, maxSize = 512) {
    var chunks = []
    var item = []
    
    for (var delta of deltas) {
        item.push(delta)
        var size = msgpack.encode(item).length
        if (size > maxSize * 0.8) {
            chunks.push([...item])
            item = []
        }
        if (size > maxSize) {
            console.log("Shouln't use deltas, chunks are large", {size, delta})
            return null
        }
    }
    if (item.length > 0){
        chunks.push([...item])
    }

    console.log(`spliceDeltaChunks  => split ${deltas.length} deltas into ${chunks.length} chunks`)
    window.deltaChunks = chunks
    return chunks

}



var storedCodeHashes = {}
window.storedCodeHashes = storedCodeHashes
async function generateCodeHash(code) {
    var hash = await sha256(code)
    console.log('generateCodeHash', hash)
    // storedCodeHashes[hash] = code
    // if (getCodeHash(hash) == null) {
    //     storedCodeHashes.push({
    //         hash, code
    //     })
    // }
    // storedCodeHashes[hash] = code
    var store = {
        id: hash,
        _storedAt: new Date().getTime(),
        code: code
    }
    await window.database.put('blb', store, hash)
    // publish an online version
    
    setTimeout(async () => {
        // TODO: push to server
        await ipc('uc.sethash', store)
    })

    return hash
}



window.generateCodeHash = generateCodeHash
async function getCodeHash(hash) {
    // if (storedCodeHashes.hasOwnProperty(hash)) {
    //     return storedCodeHashes[hash]
    // }
    var r = null;
    // storedCodeHashes.forEach(item => {
    //     if (areEqual(hash,item.hash)) {
    //         r = item.code
    //     }
    // })

    // attempt to find local first
    try {
        var r = await window.database.get('blb', hash)
        if (r != undefined) {
            var recovered = r.code
            console.log('getCodeHash', {hash, recovered})
            return recovered
        }
    }
    catch (e) {
        console.error("IDB", e, {hash})
    }
    console.log("getCodeHash: hash not found in local, try cloud")

    // // TODO: Try to find on cloud
    // if (window.socket.readyState == 1) {
    //     var req = await ipc('ipc.gethash', {
    //         id: hash
    //     })
    //     console.log('uc.gethash', req)
    // }



    return null
}
window.getCodeHash = getCodeHash


window.getFirmwareVersion = () => {
    if (window.modem.metadata == undefined) return 0;
    if (window.modem.metadata.version == undefined) return 0;
    return parseInt(window.modem.metadata.version.substring(1, window.modem.metadata.version.length))
}
async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = new Uint8Array(hashBuffer);
    return Uint8ToBase64(hashArray);
}
// await sha256('k')
window.sha256 = sha256
const areEqual = (first, second) =>
    first.length === second.length && first.every((value, index) => value === second[index]);


var dev = false
if (localStorage.getItem('DEV') == null) {
    console.log = () => { }
    console.warn = () => { }
    dev = true
}
window.sleep = async (ms) => {
    await new Promise((rs) => setTimeout(rs, ms))
}
window.deleteImageFrames = () => {
    setTimeout(async () => {
        while (Blockly.getMainWorkspace().getAllBlocks().length == 0) {
            await sleep(100)
        }
        Blockly.getMainWorkspace().getBlocksByType('frame_display').forEach(
            block => {
                block.dispose(true)
            }
        )
    })
}
isBitOn = (number, index) => {
    return Boolean(number & (1 << index));
}

window.garatool = {
    // Resouces: common objects
    device: null,
    transport: null,
    esploader: null,
    chip: null,
    connected: false,    // @done: finish   loadEspTool: asy       let req
        
    
    downloadFirmware: async (metadata, key) => {
        // new api to download prebuilt firmware based on tag
        
    },
    programDevice: async (pkg) => {
        await garatool.loadEspTool()
        if (garatool.device == null) {
            garatool.device = await navigator.serial.requestPort()
            garatool.transport = new window.Transport(garatool.device)
        }

        // @wrap this as garatool device
        try {
            garatool.esploader = new window.ESPLoader(
                garatool.transport,
                460800,
                null
            )
            // garatool.connected
        }
        catch (e){}

    },

    programDevice: async (pkg) => {
        await window.loadEspTool()
        if (garatool.device === null) {
            // May need to refresh this and store in caches
            garatool.device = await navigator.serial.requestPort()
            garatool.transport = new window.Transport(garatool.device)
            await garatool.transport.setDTR(false);
            await new Promise((resolve) => setTimeout(resolve, 100));
            await garatool.transport.setDTR(true);
        }

        try {
            garatool.esploader = new window.ESPLoader(
                garatool.transport,
                115200,
                null
            )
            garatool.connected = true
            garatool.chip = await garatool.esploader.main_fn()
            var mac = await garatool.esploader.chip.read_mac(garatool.esploader)

            var req = await ipc('makecode.request_firmware', {
                mac,
                key: localStorage.getItem('garatool.key')
            })

            console.log('RequestFirmware', req)

        }
        catch (e) {
            console.error('programDevice', e)
        }


    },
}


window.__link_handle_share_project__ = async () => {
    setTimeout(async () => {
        console.log('Usercode: GENERATE')
        let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        let xml = Blockly.Xml.domToText(dom);
        let req = await window.ipc('makecode.generate_sharelink', {
            xml: xml,
            props: await window.getWorkspaceProps(),
            sketchId: await window.sketchId(),
            mainBlockId: await window.getMainBlockId(),
            // teachable: await window.getTeachableDatabase(),
        })



        console.log(req)
        let sreq = await swal.fire({
            title: 'Shareable Link',
            text: `${req.response.token}`,
            icon: 'success',
            backdrop: false,
            input: 'text',
            focusConfirm: true,
            showCancelButton: true,
            showConfirmButton: true
        })
        console.log(sreq)
        if (sreq.isConfirmed) {
            let sharelink = sreq.value
            // await window.f(sharelink)
            //# load share code
            let loadreq = await window.ipc('makecode.get_sharelink', {
                token: sharelink,
            })
            console.log("loadreq", loadreq)
            // remember to replace the onstart block id because it is the unique id globally
            loadreq.response.data.xml = loadreq.response.data.xml.replace(
                await window.getMainBlockId(),
                loadreq.response.data.mainBlockId
            )


            Blockly.getMainWorkspace().clear()
            let dom = Blockly.Xml.textToDom(loadreq.response.data.xml)
            Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
            await window.toast({
                title: 'The sketch has been loaded successfuly',
                icon: 'success'
            })

            localStorage.setItem(`teachable.${await window.sketchId()}`, JSON.stringify(loadreq.response.data.teachable))
            console.log("Teachable Loaded to", { store: loadreq.response.data.teachable })
        }

    })
}
window.getMainBlockId = async () => {
    var id
    Blockly.getMainWorkspace().getAllBlocks().forEach((block) => {
        if (block.type == 'grobot_general_onstart') {
            id = block.id
        }
    })
    return id
}


window.generate_code = async (options) => {
    let req
    if (location.origin.includes('localhost')) {
        console.log('generator/ loading localhost version')
        req = await fetch(`${location.origin}/chrome.blockly.js`)
    }
    else {
        if (localStorage.getItem("DEV_MAKECODE") != undefined) {
            console.log('generator/ load dev version')
            req = await fetch('https://learn.garastem.com/api/v1/toolchain/blockly')
        }
        else {
            console.log('generator/ loading public version')

            req = await fetch('https://learn.garastem.com/chrome.blockly.js')
        }
    }

    if (req.status == 200) {
        let js = await req.text()
        eval(js)
    }

    window.gen.makecode.target = 'micropython'
    var generated = window.gen.workspaceToCode({ workspace: Blockly.getMainWorkspace(), language: 'micropython' })

    console.warn('generate_code', generated)
    console.warn(generated.code)
    console.warn(`Code Length: ${generated.code.length} bytes`)
    return {
        micropython: {
            code: generated.code,
            slot: generated.slot,
            flag: generated.flag
        }
    }
}
routinWebcamManager = () => {
    if (window.webcam == null) return
    if (new Date().getTime() - window.webcamLastTimestamp > 10000) {
        window.webcam.stop()
        window.webcam = null
        console.log(`camera/ turn off, not used for 10s`)
    }
}


window.showProgress = (name, current, total) => {
    if (current < 3) return
    MAX = 32
    dot = Math.floor(current / total * MAX)
    bar = '#'.repeat(dot) + '-'.repeat(MAX - dot)
    window.core.infoNotification(`${name} [${bar}]`)
    if (current == total) {
        window.core.infoNotification(`${name} [DONE]`)
    }

}

sliceIntoChunks = (arr, chunkSize) => {
    var totalLength = 0;
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        totalLength += chunk.length
        res.push(chunk);
    }
    if (totalLength != arr.length) {
        throw new Error("sliceIntoChunks is the problem");
    }
    return res;
}
base64_arraybuffer = async (data) => {
    // Use a FileReader to generate a base64 data URI
    const base64url = await new Promise((r) => {
        const reader = new FileReader()
        reader.onload = () => r(reader.result)
        reader.readAsDataURL(new Blob([data]))
    })

    /*
    The result looks like 
    "data:application/octet-stream;base64,<your base64 data>", 
    so we split off the beginning:
    */
    return base64url.split(",", 2)[1]
}

// example use:

function routineBlockDisabler() {
    // Blockly.getMainWorkspace().getAllBlocks().forEach(block => {
    //     var root = block.getRootBlock()
    //     window.root = root
        

    // })

    Blockly.Workspace.getAll().forEach(async (workspace) => {
        if (workspace != Blockly.getMainWorkspace()) return

        let blocks = workspace.getAllBlocks(true)
        Blockly.Events.disable()
        if (window.boardType != null) {
            blocks.forEach((block) => {
                block.disableReason = block.disableReason || []
                if (block.isEnabled()) {
                    if (window.hardwareDisallowBlocks[window.boardType].includes(block.type)) {
                        block.setEnabled(false)
                        block.disableReason = ['boardType']
                        block.setWarningText('Block is not available on this board')
                    }
                }
                else {
                    // block is already disabled, we consider if it was because
                    if (!window.hardwareDisallowBlocks[window.boardType].includes(block.type)) {
                        if (block.disableReason.length > 0) {
                            block.disableReason = []
                            block.setEnabled(true)
                            block.setWarningText(null)
                        }
                    }
                }
            })
        }
        else {
            // boardType not select, all block with reason go back
            blocks.forEach((block) => {
                block.disableReason = block.disableReason || []
                if (block.isEnabled() == false) {
                    // console.log('check recover', block )
                    if (block.disableReason.length > 0 || workspace.isFlyout) {
                        block.disableReason = []
                        block.setEnabled(true)
                        block.setWarningText(null)
                    }
                }
            })
        }
        Blockly.Events.enable()
    })

    __link_update_expander_blocks__()
}

function __link_update_expander_blocks__() {

    function getExtenderScope(block) {
        var parents = []
        var iter = block
        while (true) {
            var parent = iter.getSurroundParent()
            if (parent == null) break;
            if (parent.type == 'grobot_extender_scoped') {
                parents.push(parent)
            }
            iter = parent
        }
        if (parents.length == 0) return null
        return parents[0].getFieldValue("port").split(".")[1]
    }
    var analogBlocks = [
        'input_button_readvalue',
        'input_sound_read',
        'input_light_readvalue_analog',
        'input_water_readvalue_analog',
        'input_flame_readvalue_analog',
        'input_gas_readvalue_analog',
        'input_slider_readvalue',
    ]
    var blocks = []
    Blockly.getMainWorkspace().getAllBlocks().forEach(block => {
        if (!analogBlocks.includes(block.type)) return
        if (!block.isEnabled()) return
        // when user is dragging, this checking should not work

        blocks.push(block)
    })

    for (var block of blocks) {
        // console.log("Checking", block.type)
        var scope = getExtenderScope(block)
        if (scope == null) {
            Blockly.getMainWorkspace().centerOnBlock(block.id)
            core.warningNotification(`Warning: This need to be inside an Extender block`)
        }
    }

}

//* User log in and log out via WebSocket. The websocket is only transporter layer
//* 
var user = {
    status: () => {

    },

}

window.ipc = async (event, data, timeout = 5000) => {
    while (window.socket == null) {
        await window.sleep(10)
    }

    let uuid = uuidv4()
    let pkg = {
        event: event,
        uuid: uuid,
        data: data,
        SECRET: null,
        DEV: 'MAKECODE'

    }
    console.log('window.ipc.send', { event, data })
    while (window.socket.readyState != 1) {
        console.log('watiting for socket')
        await window.sleep(1000)
    }
    window.mailbox[uuid] = null
    let msgpack = window.core.getAVRBro().msgpack
    var zipped = core.getAVRBro().pako.deflate(msgpack.encode(pkg))
    window.socket.send(zipped)

    var start = new Date().getTime()
    while (window.mailbox[uuid] == null) {
        await window.sleep(10)
        if (new Date().getTime() - start > timeout) {
            console.warn("IPC: Timedout", { event, data })
            break
        }
    }
    let response = window.mailbox[uuid]
    delete window.mailbox[uuid]
    console.log('window.ipc', { pkg, response })
    if (response == null) {
        console.error("Please check with Server")
    }
    return response

}
async function calibrationProcess() {
    if (modem.connected == false) {
        window.toast({
            title: "Calibrate Process",
            text: "Please retry after connected with GRobot",
            icon: "error",
            timer: 5000,
        })
        return;
    }
    if (getFirmwareVersion() < 20) {
        window.toast({
            title: "Calibrate Process",
            text: "Calibration require newer firmware version, please upgrade first",
            icon: "error",
            timer: 5000
        })
    }

    var currentOffset = 0;
    var sentOffset = 0;
    var interval = setInterval(async () => {
        if (currentOffset != sentOffset) {
            sentOffset = currentOffset;
            console.log("value sent", currentOffset);

            var { success, response } = await modem.writePako({
                event: 'exec',
                data: `import xMotor;xMotor.set_calibration(${currentOffset});xMotor.execute_sync(xMotor.Action(xMotor.FORWARD, ${baseSpeed}));`
            })
        }
    }, 1000)

    await swal.fire({
        title: "Calibration Process",
        icon: "info",
        input: "range",
        inputAttributes: {
            min: -50,
            max: 50,
            step: 1
        },
        inputValue: 0,
        backdrop: false,
        showCancelButton: true,
        didOpen: () => {
            const input = swal.getInput()
            console.log("on open", input)
            window.input = input
            input.oninput = event => {
                currentOffset = parseInt(event.target.value)
            }
        }
    })
    clearInterval(interval)

    console.log("Clean up")
    await modem.writePako({
        event: `exec`,
        data: `import xMotor;xMotor.execute_sync(xMotor.Action(xMotor.STOP, 0))`
    })
}
window.calibrationProcess = calibrationProcess
async function upgradeFirmwareProcess() {

    window.toast({
        title: "Please connect with USB cable",
        text: "select the port and click Pair",
        timer: 30000,
        icon: 'info'
    })
    function ui8ToBstr(u8Array) {
        let b_str = "";
        for (let i = 0; i < u8Array.length; i++) {
            b_str += String.fromCharCode(u8Array[i]);
        }
        return b_str;
    }

    var req = await fetch('https://api.garastem.com/api/v1/toolchain/esptool')
    eval(await req.text())

    var device = await navigator.serial.requestPort()
    var transport = new Transport(device)
    var esploader = new ESPLoader({ transport, baudrate: 115200 })
    var chip = await esploader.main_fn()
    var mac = await esploader.chip.read_mac(esploader)
    await esploader.flash_spi_attach(0)
    await transport.disconnect()
    console.log("Requesting firmware", mac)
    window.toast({
        title: "Upgrading firmware",
        text: "Please wait ...",
        timer: 60000,
        icon: 'info'
    })
    var req = await fetch('https://api.garastem.com/api/v1/toolchain/makecode/download_firmware/' + mac)
    var buffer = await req.arrayBuffer()

    var { pako, msgpack } = core.getAVRBro()
    var pkg = msgpack.decode(pako.inflate(buffer))

    var fileArray = []
    pkg.partitions.forEach(part => {
        fileArray.push({
            data: ui8ToBstr(part.data),
            address: part.address
        })
    })

    var flashOptions = {
        fileArray,
        flashSize: 'keep',
        eraseAll: true,
        reportProgress: (fileIndex, written, total) => {
            console.log({ fileIndex, written, total })
            window.showProgress(`upgrade [${fileIndex}]`, written, total)
        },
        compress: false,
        // calculateMD5Hash: (image) => CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)),
    }
    // await transport.setDTR(false);
    // await esploader.hard_reset()
    // await new Promise((resolve) => setTimeout(resolve, 100));
    // await transport.setDTR(true);
    // var chip = await esploader.main_fn()
    // await esploader.connect('default_reset')
    console.clear()
    var transport = new Transport(device)
    try {
        var esploader = new ESPLoader({ transport, baudrate: 115200 })
        var chip = await esploader.main_fn()
        // await window.usbJTAGSerialReset(transport)
        await esploader.flash_spi_attach(0)

        var RTCCNTL_BASE_REG = 0x60008000
        var RTC_CNTL_SWD_CONF_REG = RTCCNTL_BASE_REG + 0x00AC
        var RTC_CNTL_SWD_AUTO_FEED_EN = 1 << 31
        var RTC_CNTL_SWD_WPROTECT_REG = RTCCNTL_BASE_REG + 0x00B0
        var RTC_CNTL_SWD_WKEY = 0x8F1D312A
        var RTC_CNTL_WDTCONFIG0_REG = RTCCNTL_BASE_REG + 0x0090
        var RTC_CNTL_WDTWPROTECT_REG = RTCCNTL_BASE_REG + 0x00A8
        var RTC_CNTL_WDT_WKEY = 0x50D83AA1

        await esploader.write_reg(RTC_CNTL_WDTWPROTECT_REG, RTC_CNTL_WDT_WKEY)
        await esploader.write_reg(RTC_CNTL_WDTCONFIG0_REG, 0)
        await esploader.write_reg(RTC_CNTL_WDTWPROTECT_REG, 0)

        // # Automatically feed SWD
        await esploader.write_reg(RTC_CNTL_SWD_WPROTECT_REG, RTC_CNTL_SWD_WKEY)
        await esploader.write_reg(
            RTC_CNTL_SWD_CONF_REG,
            await esploader.read_reg(RTC_CNTL_SWD_CONF_REG)
            | RTC_CNTL_SWD_AUTO_FEED_EN,
        )
        await esploader.write_reg(RTC_CNTL_SWD_WPROTECT_REG, 0)


        await esploader.write_flash(flashOptions)
        await esploader.hard_reset()
        window.toast({
            title: "Upgrade completed",
            timer: 20000,
            icon: 'success'
        })
    }
    catch (e){
        window.toast({
            icon: "error",
            title: "Upgrade failed",
            text: e,
            timer: 30000
        })
        throw e
    }
    finally {
        await transport.disconnect();
    }
}

function attachHotkey() {
    // Blockly.getMainWorkspace().addEventListener((evt) => {
    //     if (evt.)
    // Blockly.getMainWorkspace().addChangeListener((evt) => {
    //     // console.log("Event", evt.type)
    //     userChangeCount += 1
    //     if (evt.type == 'drag') {
    //         isDragging = true
    //     }
    //     if (evt.type == 'end_drag') {
    //         isDragging = false;

    //     }
    // })

    // })

    Blockly.getMainWorkspace().addChangeListener(evt => {
        if (evt.type != 'click') return;
        // console.error("clickeven", evt);
        let blockId = evt.blockId;
        window.selectedBlockIdForCopy = blockId;
    })


    document.addEventListener('keydown', async (evt) => {
        console.log(evt)
        evt.key = evt.key.toLowerCase()
        if (evt.key == 'Escape') {
            await window.actionExitBoard()
        }

        if (evt.shiftKey && evt.ctrlKey && evt.code == 'KeyK') {
            var lastKey = localStorage.getItem('garatool.key')

            let key = await Blockly.prompt(
                'Please input GaraTOOL key: ',
                lastKey || 'No key was ever used',
                (key) => {
                    console.log('Key', key)
                    localStorage.setItem('garatool.key', key)
                },
            )
        }
        if ((evt.ctrlKey || evt.metaKey) && evt.code == 'KeyY') {
            let req = await swal.fire({
                title: 'Upgrade Firmware',
                text: 'This upgrade will make sure your device is compatible with the latest GaraBlock',
                showCancelButton: true,
                showConfirmButton: true,
                backdrop: false,
            })
            console.log("confirm", req)
            if (req.isConfirmed) {
                try {
                    await upgradeFirmwareProcess()
                }
                catch (e) {
                    window.toast({
                        title: "Failed to upgrade firmware",
                        icon: 'error'
                    })
                    console.error(e)
                }
            }
        }
        if ((evt.ctrlKey || evt.metaKey) && evt.code == 'KeyC') {
            if (window.selectedBlock != null) {
                await __link_copy_block__()
            }

        }
        if ((evt.ctrlKey || evt.metaKey) && evt.shiftKey && evt.code == 'KeyV') {
            window.shouldFolowBlock = true
            await __link_paste_block__()
        }
        if ((evt.ctrlKey || evt.metaKey)  && evt.code == 'KeyV') {
            window.shouldFolowBlock = true
        }
    })
}


async function __link_copy_block__() {
    let block = Blockly.getMainWorkspace().getBlockById(window.selectedBlockIdForCopy);
    if (block.type == 'grobot_general_onstart') {
        core.infoNotification(`Can't copy this block`)
        return
    }
    let dom = Blockly.Xml.blockToDom(block, true);
    let text = Blockly.Xml.domToText(dom);

    navigator.clipboard.writeText(text)
    core.infoNotification(`Copied: ${block.getDescendants().length} blocks`)

}

async function __link_paste_block__() {
    let text = await navigator.clipboard.readText()
    if (!text.startsWith('<block')) return

    var dom = Blockly.Xml.textToDom(text);
    var block = Blockly.Xml.domToBlock(dom, Blockly.getMainWorkspace());
    Blockly.getMainWorkspace().addBlock(block);
    core.infoNotification(`Pasted: ${block.getDescendants().length} blocks`)
}


class LineBreakTransformer {
    constructor() {
        this.container = '';
    }

    transform(chunk, controller) {
        this.container += chunk;
        const lines = this.container.split('\r\n');
        this.container = lines.pop();
        lines.forEach(line => controller.enqueue(line));
    }

    flush(controller) {
        controller.enqueue(this.container);
    }
}


window.Uint8ToBase64 = u8Arr => {
    var CHUNK_SIZE = 0x8000; //arbitrary number
    var index = 0;
    var length = u8Arr.length;
    var result = '';
    var slice;
    while (index < length) {
        slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
    }
    return btoa(result);
}

window.toast = (config) => {
    swal.fire({
        title: config?.title || "Title",
        text: config?.text || "",
        toast: true,
        icon: config?.icon || "success",
        timer: config?.timer || 1333,
        timerProgressBar: true,
        position: "top-end",
        showConfirmButton: false,
        didOpen: toast => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
        }
    })
}
window.uuidv4 = () => {
    // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    //     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    // );
    let d = new Date().getTime(),
        d2 = (performance && performance.now && performance.now() * 1000) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
    });
}
window.fade = (hex, lum) => {
    lum = lum / 100;
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    var rgb = "#";
    var c;
    var i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += `00${c}`.substr(c.length);
    }
    return rgb;
}
window.infoNotification = msg => {
    console.info(msg)
    try {
        window.core.infoNotification(msg)
    }
    catch (err) {
        console.log('window.core.infoNotification', { msg })
    }
}
window.openInNewTab = href => {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: href
    }).click()
}
window.openLambdaEditor = (sketchId) => {
    let url = `https://learn.garastem.com/lambda/?sketchId=${sketchId}`
    openInNewTab(href)
}
// window.labelSize = { "CLOCK": { "width": 769, "height": 200 }, "tag_weather": { "width": 392, "height": 124 }, "t": { "width": 1200, "height": 1283 }, "tag_relay": { "width": 456, "height": 124 }, "INFRARED": { "width": 1230, "height": 200 }, "LIST": { "width": 615, "height": 200 }, "tag_led": { "width": 396, "height": 124 }, "iojima": { "width": 923, "height": 200 }, "zeRGBa": { "width": 923, "height": 200 }, "SCHEDULE": { "width": 1230, "height": 200 }, "tag_servo": { "width": 456, "height": 124 }, "blynk_logo": { "width": 408, "height": 406 }, "BUTTON": { "width": 923, "height": 200 }, "WATER": { "width": 769, "height": 200 }, "hahaha": { "width": 923, "height": 200 }, "PIXEL": { "width": 769, "height": 200 }, "SPEECH": { "width": 923, "height": 200 }, "EMAIL": { "width": 769, "height": 200 }, "MP3": { "width": 461, "height": 200 }, "POT": { "width": 461, "height": 200 }, "DIGITS_DISPLAY": { "width": 2153, "height": 200 }, "circle_art": { "width": 2084, "height": 2084 }, "tag_speaker": { "width": 496, "height": 124 }, "wire": { "width": 217, "height": 250 }, "tag_line": { "width": 300, "height": 124 }, "BLYNK": { "width": 769, "height": 200 }, "GRAPH": { "width": 769, "height": 200 }, "COLOUR": { "width": 923, "height": 200 }, "STEP": { "width": 615, "height": 200 }, "GAS": { "width": 461, "height": 200 }, "tag_gas": { "width": 244, "height": 124 }, "ROTARY": { "width": 923, "height": 200 }, "SONOFF": { "width": 923, "height": 200 }, "SPEAKER": { "width": 1076, "height": 200 }, "tag_g11": { "width": 292, "height": 124 }, "CONTROLLER": { "width": 1538, "height": 200 }, "PLOTTER": { "width": 1076, "height": 200 }, "m": { "width": 388, "height": 395 }, "RTC": { "width": 461, "height": 200 }, "stroke": { "width": 6, "height": 119 }, "tag_siri_action": { "width": 388, "height": 124 }, "tag_g2": { "width": 292, "height": 124 }, "tag_camera": { "width": 360, "height": 124 }, "STREAM": { "width": 923, "height": 200 }, "Mask group-1": { "width": 52, "height": 52 }, "logo_wifi": { "width": 120, "height": 120 }, "tag_sheet": { "width": 284, "height": 124 }, "tag_distance": { "width": 400, "height": 124 }, "tag_": { "width": 440, "height": 124 }, "BUZZER": { "width": 923, "height": 200 }, "tag_slider": { "width": 508, "height": 124 }, "tag_link": { "width": 288, "height": 124 }, "tag_laser_2": { "width": 456, "height": 124 }, "MOISTURE": { "width": 1230, "height": 200 }, "WIFI": { "width": 615, "height": 200 }, "DIGITS": { "width": 923, "height": 200 }, "CAMERA": { "width": 923, "height": 200 }, "LORA": { "width": 615, "height": 200 }, "REMOTE": { "width": 923, "height": 200 }, "HARDWARE": { "width": 1230, "height": 200 }, "tag_lcd": { "width": 456, "height": 124 }, "CLAP": { "width": 615, "height": 200 }, "MICROPHONE": { "width": 440, "height": 124 }, "tag_g24": { "width": 292, "height": 124 }, "POTENTIOMETERb": { "width": 2153, "height": 200 }, "HUMIDITY": { "width": 1230, "height": 200 }, "tag_g14": { "width": 292, "height": 124 }, "tag_microphone-1": { "width": 440, "height": 124 }, "tag_g17": { "width": 292, "height": 124 }, "SNAP": { "width": 615, "height": 200 }, "WEATHER": { "width": 1076, "height": 200 }, "MUSIC": { "width": 769, "height": 200 }, "SharedVariable": { "width": 2153, "height": 200 }, "tag_g9": { "width": 292, "height": 124 }, "FLAME_SENSOR": { "width": 1846, "height": 200 }, "POTENTIOMETER": { "width": 2000, "height": 200 }, "tag_group_action": { "width": 484, "height": 124 }, "IFTTT": { "width": 769, "height": 200 }, "VIBRATION": { "width": 1384, "height": 200 }, "python": { "width": 240, "height": 240 }, "NETWORK": { "width": 1076, "height": 200 }, "tag_g27": { "width": 292, "height": 124 }, "STORAGE": { "width": 1076, "height": 200 }, "arrow_down": { "width": 235, "height": 396 }, "COLOUR_SENSOR": { "width": 2000, "height": 200 }, "LINE": { "width": 615, "height": 200 }, "SHARED_VARIABLE": { "width": 2307, "height": 200 }, "p": { "width": 240, "height": 240 }, "APP": { "width": 461, "height": 200 }, "tag_bluetooth": { "width": 120, "height": 120 }, "WEBHOOK": { "width": 1076, "height": 200 }, "VALUE_DISPLAY": { "width": 2000, "height": 200 }, "tag_g26": { "width": 292, "height": 124 }, "tag_bluetooth_action": { "width": 280, "height": 120 }, "tag_button-1": { "width": 300, "height": 124 }, "tag_g29": { "width": 292, "height": 124 }, "PLOT": { "width": 615, "height": 200 }, "DICTIONARY": { "width": 1538, "height": 200 }, "NOTIFICATION": { "width": 1846, "height": 200 }, "WEBCAM": { "width": 923, "height": 200 }, "tag_g1": { "width": 292, "height": 124 }, "RELAY": { "width": 769, "height": 200 }, "JOYSTICK": { "width": 1230, "height": 200 }, "MOTOR": { "width": 769, "height": 200 }, "LINE_FINDER": { "width": 1692, "height": 200 }, "tag_messenger_action": { "width": 572, "height": 124 }, "BLUETOOTH": { "width": 1384, "height": 200 }, "tag_wifi": { "width": 288, "height": 124 }, "CODELAB": { "width": 1076, "height": 200 }, "tag_g30": { "width": 292, "height": 124 }, "TOUCH": { "width": 769, "height": 200 }, "teachable_machine": { "width": 956, "height": 158 }, "c": { "width": 1489, "height": 1489 }, "tag_ifttt_action": { "width": 448, "height": 124 }, "LOUDNESS_SENSOR": { "width": 2307, "height": 200 }, "tag_g16": { "width": 292, "height": 124 }, "THINGSPEAK": { "width": 1538, "height": 200 }, "tag_python": { "width": 324, "height": 124 }, "TEMPERATURE": { "width": 1692, "height": 200 }, "Mask group": { "width": 104, "height": 104 }, "TOPIC": { "width": 769, "height": 200 }, "tag_motion": { "width": 348, "height": 124 }, "VIBRATOR": { "width": 1230, "height": 200 }, "start": { "width": 410, "height": 218 }, "LED": { "width": 461, "height": 200 }, "tag_g18": { "width": 292, "height": 124 }, "LOUDNESS": { "width": 1230, "height": 200 }, "tag_pixel": { "width": 456, "height": 124 }, "tag_g6": { "width": 292, "height": 124 }, "tag_tensorflow": { "width": 560, "height": 124 }, "DISPLAY": { "width": 1076, "height": 200 }, "tag_g5": { "width": 292, "height": 124 }, "LIGHT": { "width": 769, "height": 200 }, "tag_g20": { "width": 292, "height": 124 }, "LCD": { "width": 461, "height": 200 }, "SOUND": { "width": 769, "height": 200 }, "ww": { "width": 850, "height": 850 }, "tag_infrared_action": { "width": 548, "height": 124 }, "POT_SWITCH": { "width": 1538, "height": 200 }, "DISTANCE": { "width": 1230, "height": 200 }, "tag_light": { "width": 300, "height": 124 }, "STRING": { "width": 923, "height": 200 }, "FILE": { "width": 615, "height": 200 }, "tag_g15": { "width": 292, "height": 124 }, "PRESSURE": { "width": 1230, "height": 200 }, "GAUGE": { "width": 769, "height": 200 }, "w": { "width": 850, "height": 850 }, "LED_BAR": { "width": 1076, "height": 200 }, "tag_messenger": { "width": 408, "height": 124 }, "tag_sheet_action": { "width": 444, "height": 124 }, "tag_g13": { "width": 292, "height": 124 }, "CLOUD_VARIABLE": { "width": 2153, "height": 200 }, "tag_g22": { "width": 292, "height": 124 }, "MOTION": { "width": 923, "height": 200 }, "tag_g7": { "width": 292, "height": 124 }, "tag_thingspeak_action": { "width": 608, "height": 124 }, "VIBRATION_SENSOR": { "width": 2461, "height": 200 }, "tag_clock": { "width": 284, "height": 128 }, "emusic": { "width": 100, "height": 102 }, "SNAP_ACTION": { "width": 1692, "height": 200 }, "LASER": { "width": 769, "height": 200 }, "RAIN": { "width": 615, "height": 200 }, "tag_button": { "width": 344, "height": 124 }, "SHARED": { "width": 923, "height": 200 }, "tag_weather-1": { "width": 440, "height": 124 }, "tag_wifi_action": { "width": 448, "height": 124 }, "CSV": { "width": 461, "height": 200 }, "tag_g28": { "width": 292, "height": 124 }, "tag_g10": { "width": 292, "height": 124 }, "hihihhi": { "width": 1076, "height": 200 }, "SERIAL": { "width": 923, "height": 200 }, "SLIDER": { "width": 923, "height": 200 }, "tag_g25": { "width": 292, "height": 124 }, "WIDGET": { "width": 923, "height": 200 }, "tag_water": { "width": 332, "height": 126 }, "tag_microphone": { "width": 440, "height": 124 }, "tag_g19": { "width": 292, "height": 124 }, "COMMON_VARIABLE": { "width": 2307, "height": 200 }, "s": { "width": 554, "height": 516 }, "MESSENGER": { "width": 1384, "height": 200 }, "tag_g23": { "width": 292, "height": 124 }, "HALL_SENSOR": { "width": 1692, "height": 200 }, "tag_siri": { "width": 228, "height": 124 }, "SERVO": { "width": 769, "height": 200 }, "tag_g3": { "width": 292, "height": 124 }, "REALTIME": { "width": 1230, "height": 200 }, "MAGNETIC": { "width": 1230, "height": 200 }, "CHART": { "width": 769, "height": 200 }, "SWITCH": { "width": 923, "height": 200 }, "SHEET": { "width": 769, "height": 200 }, "tag_sound": { "width": 304, "height": 124 }, "TIMER": { "width": 769, "height": 200 }, "VARIABLE": { "width": 1230, "height": 200 }, "CloudVariable": { "width": 2000, "height": 200 }, "tag_laser": { "width": 296, "height": 124 }, "NUMBER": { "width": 923, "height": 200 }, "tag_flame": { "width": 344, "height": 124 }, "hehehe": { "width": 923, "height": 200 }, "tag_g8": { "width": 292, "height": 124 }, "XPATH": { "width": 769, "height": 200 }, "ROUTINE": { "width": 1076, "height": 200 }, "tag_g4": { "width": 292, "height": 124 }, "TERMINAL": { "width": 1230, "height": 200 }, "VALUE DISPLAY": { "width": 2000, "height": 200 }, "FIRE": { "width": 615, "height": 200 }, "BLOCKY": { "width": 923, "height": 200 }, "tag_group": { "width": 324, "height": 124 }, "tag_g21": { "width": 292, "height": 124 }, "tag_g12": { "width": 292, "height": 124 }, "www": { "width": 850, "height": 850 }, "SDCARD": { "width": 923, "height": 200 } }
window.labelSize = {
    "APP": {
        "height": 200,
        "width": 461
    },
    "BLOCKY": {
        "height": 200,
        "width": 923
    },
    "BLUETOOTH": {
        "height": 200,
        "width": 1384
    },
    "BLYNK": {
        "height": 200,
        "width": 769
    },
    "BUTTON": {
        "height": 200,
        "width": 923
    },
    "BUZZER": {
        "height": 200,
        "width": 923
    },
    "CAMERA": {
        "height": 200,
        "width": 923
    },
    "CHART": {
        "height": 200,
        "width": 769
    },
    "CLAP": {
        "height": 200,
        "width": 615
    },
    "CLOCK": {
        "height": 200,
        "width": 769
    },
    "CLOUD_VARIABLE": {
        "height": 200,
        "width": 2153
    },
    "CODELAB": {
        "height": 200,
        "width": 1076
    },
    "COLOUR": {
        "height": 200,
        "width": 923
    },
    "COLOUR_SENSOR": {
        "height": 200,
        "width": 2000
    },
    "COMMON_VARIABLE": {
        "height": 200,
        "width": 2307
    },
    "CONTROLLER": {
        "height": 200,
        "width": 1538
    },
    "CSV": {
        "height": 200,
        "width": 461
    },
    "CloudVariable": {
        "height": 200,
        "width": 2000
    },
    "DICTIONARY": {
        "height": 200,
        "width": 1538
    },
    "DIGITS": {
        "height": 200,
        "width": 923
    },
    "DIGITS_DISPLAY": {
        "height": 200,
        "width": 2153
    },
    "DISPLAY": {
        "height": 200,
        "width": 1076
    },
    "DISTANCE": {
        "height": 200,
        "width": 1230
    },
    "EMAIL": {
        "height": 200,
        "width": 769
    },
    "FILE": {
        "height": 200,
        "width": 615
    },
    "FIRE": {
        "height": 200,
        "width": 615
    },
    "FLAME_SENSOR": {
        "height": 200,
        "width": 1846
    },
    "GAS": {
        "height": 200,
        "width": 461
    },
    "GAUGE": {
        "height": 200,
        "width": 769
    },
    "GRAPH": {
        "height": 200,
        "width": 769
    },
    "HALL_SENSOR": {
        "height": 200,
        "width": 1692
    },
    "HARDWARE": {
        "height": 200,
        "width": 1230
    },
    "HUMIDITY": {
        "height": 200,
        "width": 1230
    },
    "IFTTT": {
        "height": 200,
        "width": 769
    },
    "INFRARED": {
        "height": 200,
        "width": 1230
    },
    "JOYSTICK": {
        "height": 200,
        "width": 1230
    },
    "LASER": {
        "height": 200,
        "width": 769
    },
    "LCD": {
        "height": 200,
        "width": 461
    },
    "LED": {
        "height": 200,
        "width": 461
    },
    "LED_BAR": {
        "height": 200,
        "width": 1076
    },
    "LIGHT": {
        "height": 200,
        "width": 769
    },
    "LINE": {
        "height": 200,
        "width": 615
    },
    "LINE_FINDER": {
        "height": 200,
        "width": 1692
    },
    "LIST": {
        "height": 200,
        "width": 615
    },
    "LORA": {
        "height": 200,
        "width": 615
    },
    "LOUDNESS": {
        "height": 200,
        "width": 1230
    },
    "LOUDNESS_SENSOR": {
        "height": 200,
        "width": 2307
    },
    "MAGNETIC": {
        "height": 200,
        "width": 1230
    },
    "MESSENGER": {
        "height": 200,
        "width": 1384
    },
    "MICROPHONE": {
        "height": 124,
        "width": 440
    },
    "MOISTURE": {
        "height": 200,
        "width": 1230
    },
    "MOTION": {
        "height": 200,
        "width": 923
    },
    "MOTOR": {
        "height": 200,
        "width": 769
    },
    "MP3": {
        "height": 200,
        "width": 461
    },
    "MUSIC": {
        "height": 200,
        "width": 769
    },
    "Mask group": {
        "height": 104,
        "width": 104
    },
    "Mask group-1": {
        "height": 52,
        "width": 52
    },
    "NETWORK": {
        "height": 200,
        "width": 1076
    },
    "NOTIFICATION": {
        "height": 200,
        "width": 1846
    },
    "NUMBER": {
        "height": 200,
        "width": 923
    },
    "PIXEL": {
        "height": 200,
        "width": 769
    },
    "PLOT": {
        "height": 200,
        "width": 615
    },
    "PLOTTER": {
        "height": 200,
        "width": 1076
    },
    "POT": {
        "height": 200,
        "width": 461
    },
    "POTENTIOMETER": {
        "height": 200,
        "width": 2000
    },
    "POTENTIOMETERb": {
        "height": 200,
        "width": 2153
    },
    "POT_SWITCH": {
        "height": 200,
        "width": 1538
    },
    "PRESSURE": {
        "height": 200,
        "width": 1230
    },
    "RAIN": {
        "height": 200,
        "width": 615
    },
    "REALTIME": {
        "height": 200,
        "width": 1230
    },
    "RELAY": {
        "height": 200,
        "width": 769
    },
    "REMOTE": {
        "height": 200,
        "width": 923
    },
    "ROTARY": {
        "height": 200,
        "width": 923
    },
    "ROUTINE": {
        "height": 200,
        "width": 1076
    },
    "RTC": {
        "height": 200,
        "width": 461
    },
    "SCHEDULE": {
        "height": 200,
        "width": 1230
    },
    "SDCARD": {
        "height": 200,
        "width": 923
    },
    "SERIAL": {
        "height": 200,
        "width": 923
    },
    "SERVO": {
        "height": 200,
        "width": 769
    },
    "SHARED": {
        "height": 200,
        "width": 923
    },
    "SHARED_VARIABLE": {
        "height": 200,
        "width": 2307
    },
    "SHEET": {
        "height": 200,
        "width": 769
    },
    "SLIDER": {
        "height": 200,
        "width": 923
    },
    "SNAP": {
        "height": 200,
        "width": 615
    },
    "SNAP_ACTION": {
        "height": 200,
        "width": 1692
    },
    "SONOFF": {
        "height": 200,
        "width": 923
    },
    "SOUND": {
        "height": 200,
        "width": 769
    },
    "SPEAKER": {
        "height": 200,
        "width": 1076
    },
    "SPEECH": {
        "height": 200,
        "width": 923
    },
    "STEP": {
        "height": 200,
        "width": 615
    },
    "STORAGE": {
        "height": 200,
        "width": 1076
    },
    "STREAM": {
        "height": 200,
        "width": 923
    },
    "STRING": {
        "height": 200,
        "width": 923
    },
    "SWITCH": {
        "height": 200,
        "width": 923
    },
    "SharedVariable": {
        "height": 200,
        "width": 2153
    },
    "TEMPERATURE": {
        "height": 200,
        "width": 1692
    },
    "TERMINAL": {
        "height": 200,
        "width": 1230
    },
    "THINGSPEAK": {
        "height": 200,
        "width": 1538
    },
    "TIMER": {
        "height": 200,
        "width": 769
    },
    "TOPIC": {
        "height": 200,
        "width": 769
    },
    "TOUCH": {
        "height": 200,
        "width": 769
    },
    "VALUE DISPLAY": {
        "height": 200,
        "width": 2000
    },
    "VALUE_DISPLAY": {
        "height": 200,
        "width": 2000
    },
    "VARIABLE": {
        "height": 200,
        "width": 1230
    },
    "VIBRATION": {
        "height": 200,
        "width": 1384
    },
    "VIBRATION_SENSOR": {
        "height": 200,
        "width": 2461
    },
    "VIBRATOR": {
        "height": 200,
        "width": 1230
    },
    "WATER": {
        "height": 200,
        "width": 769
    },
    "WEATHER": {
        "height": 200,
        "width": 1076
    },
    "WEBCAM": {
        "height": 200,
        "width": 923
    },
    "WEBHOOK": {
        "height": 200,
        "width": 1076
    },
    "WIDGET": {
        "height": 200,
        "width": 923
    },
    "WIFI": {
        "height": 200,
        "width": 615
    },
    "XPATH": {
        "height": 200,
        "width": 769
    },
    "arrow_down": {
        "height": 396,
        "width": 235
    },
    "blynk_logo": {
        "height": 406,
        "width": 408
    },
    "c": {
        "height": 1489,
        "width": 1489
    },
    "circle_art": {
        "height": 2084,
        "width": 2084
    },
    "emusic": {
        "height": 102,
        "width": 100
    },
    "hahaha": {
        "height": 200,
        "width": 923
    },
    "hehehe": {
        "height": 200,
        "width": 923
    },
    "hihihhi": {
        "height": 200,
        "width": 1076
    },
    "iojima": {
        "height": 200,
        "width": 923
    },
    "logo_wifi": {
        "height": 120,
        "width": 120
    },
    "m": {
        "height": 395,
        "width": 388
    },
    "p": {
        "height": 240,
        "width": 240
    },
    "python": {
        "height": 240,
        "width": 240
    },
    "s": {
        "height": 516,
        "width": 554
    },
    "start": {
        "height": 218,
        "width": 410
    },
    "stroke": {
        "height": 119,
        "width": 6
    },
    "t": {
        "height": 1283,
        "width": 1200
    },
    "tag_": {
        "height": 124,
        "width": 440
    },
    "tag_bluetooth": {
        "height": 120,
        "width": 120
    },
    "tag_bluetooth_action": {
        "height": 120,
        "width": 280
    },
    "tag_button": {
        "height": 124,
        "width": 344
    },
    "tag_button-1": {
        "height": 124,
        "width": 300
    },
    "tag_camera": {
        "height": 124,
        "width": 360
    },
    "tag_clock": {
        "height": 128,
        "width": 284
    },
    "tag_colour_sensor": {
        "height": 124,
        "width": 480
    },
    "tag_distance": {
        "height": 124,
        "width": 400
    },
    "tag_flame": {
        "height": 124,
        "width": 344
    },
    "tag_g1": {
        "height": 124,
        "width": 292
    },
    "tag_g10": {
        "height": 124,
        "width": 292
    },
    "tag_g11": {
        "height": 124,
        "width": 292
    },
    "tag_g12": {
        "height": 124,
        "width": 292
    },
    "tag_g13": {
        "height": 124,
        "width": 292
    },
    "tag_g14": {
        "height": 124,
        "width": 292
    },
    "tag_g15": {
        "height": 124,
        "width": 292
    },
    "tag_g16": {
        "height": 124,
        "width": 292
    },
    "tag_g17": {
        "height": 124,
        "width": 292
    },
    "tag_g18": {
        "height": 124,
        "width": 292
    },
    "tag_g19": {
        "height": 124,
        "width": 292
    },
    "tag_g2": {
        "height": 124,
        "width": 292
    },
    "tag_g20": {
        "height": 124,
        "width": 292
    },
    "tag_g21": {
        "height": 124,
        "width": 292
    },
    "tag_g22": {
        "height": 124,
        "width": 292
    },
    "tag_g23": {
        "height": 124,
        "width": 292
    },
    "tag_g24": {
        "height": 124,
        "width": 292
    },
    "tag_g25": {
        "height": 124,
        "width": 292
    },
    "tag_g26": {
        "height": 124,
        "width": 292
    },
    "tag_g27": {
        "height": 124,
        "width": 292
    },
    "tag_g28": {
        "height": 124,
        "width": 292
    },
    "tag_g29": {
        "height": 124,
        "width": 292
    },
    "tag_g3": {
        "height": 124,
        "width": 292
    },
    "tag_g30": {
        "height": 124,
        "width": 292
    },
    "tag_g4": {
        "height": 124,
        "width": 292
    },
    "tag_g5": {
        "height": 124,
        "width": 292
    },
    "tag_g6": {
        "height": 124,
        "width": 292
    },
    "tag_g7": {
        "height": 124,
        "width": 292
    },
    "tag_g8": {
        "height": 124,
        "width": 292
    },
    "tag_g9": {
        "height": 124,
        "width": 292
    },
    "tag_gas": {
        "height": 124,
        "width": 244
    },
    "tag_group": {
        "height": 124,
        "width": 324
    },
    "tag_group_action": {
        "height": 124,
        "width": 484
    },
    "tag_ifttt_action": {
        "height": 124,
        "width": 448
    },
    "tag_infrared_action": {
        "height": 124,
        "width": 548
    },
    "tag_laser": {
        "height": 124,
        "width": 296
    },
    "tag_laser_2": {
        "height": 124,
        "width": 456
    },
    "tag_lcd": {
        "height": 124,
        "width": 456
    },
    "tag_led": {
        "height": 124,
        "width": 396
    },
    "tag_light": {
        "height": 124,
        "width": 300
    },
    "tag_line": {
        "height": 124,
        "width": 300
    },
    "tag_link": {
        "height": 124,
        "width": 288
    },
    "tag_messenger": {
        "height": 124,
        "width": 408
    },
    "tag_messenger_action": {
        "height": 124,
        "width": 572
    },
    "tag_microphone": {
        "height": 124,
        "width": 440
    },
    "tag_microphone-1": {
        "height": 124,
        "width": 440
    },
    "tag_motion": {
        "height": 124,
        "width": 348
    },
    "tag_mp3": {
        "height": 124,
        "width": 296
    },
    "tag_mp3_action": {
        "height": 124,
        "width": 456
    },
    "tag_pixel": {
        "height": 124,
        "width": 456
    },
    "tag_proximity": {
        "height": 124,
        "width": 400
    },
    "tag_python": {
        "height": 124,
        "width": 324
    },
    "tag_relay": {
        "height": 124,
        "width": 456
    },
    "tag_rfid": {
        "height": 124,
        "width": 300
    },
    "tag_servo": {
        "height": 124,
        "width": 456
    },
    "tag_sheet": {
        "height": 124,
        "width": 284
    },
    "tag_sheet_action": {
        "height": 124,
        "width": 444
    },
    "tag_siri": {
        "height": 124,
        "width": 228
    },
    "tag_siri_action": {
        "height": 124,
        "width": 388
    },
    "tag_slider": {
        "height": 124,
        "width": 508
    },
    "tag_sound": {
        "height": 124,
        "width": 304
    },
    "tag_speaker": {
        "height": 124,
        "width": 496
    },
    "tag_temperature": {
        "height": 124,
        "width": 480
    },
    "tag_tensorflow": {
        "height": 124,
        "width": 560
    },
    "tag_thingspeak_action": {
        "height": 124,
        "width": 608
    },
    "tag_water": {
        "height": 126,
        "width": 332
    },
    "tag_weather": {
        "height": 124,
        "width": 392
    },
    "tag_weather-1": {
        "height": 124,
        "width": 440
    },
    "tag_wifi": {
        "height": 124,
        "width": 288
    },
    "tag_wifi_action": {
        "height": 124,
        "width": 448
    },
    "teachable_machine": {
        "height": 158,
        "width": 956
    },
    "w": {
        "height": 850,
        "width": 850
    },
    "wire": {
        "height": 250,
        "width": 217
    },
    "ww": {
        "height": 850,
        "width": 850
    },
    "www": {
        "height": 850,
        "width": 850
    },
    "zeRGBa": {
        "height": 200,
        "width": 923
    }
}
window.processSecureHttps = () => {
    if (location.origin.includes('localhost') == false
        && location.protocol !== 'https:'
    ) {
        location.replace(`https://${location.href.substring(location.protocol.length)}`)
    }
}
window.availableTeachables = {}

/*
    Preloading all Teachable Machines user dragged
*/
setInterval(async () => {
    Blockly.getMainWorkspace().getBlocksByType("makecode_ml_matchimage").forEach(block => {
        let targetBlock = block.getInput('model').connection.targetBlock()
        let model = targetBlock.getFieldValue('TEXT')
        if (model == null) return
        
        console.log(`tm/ prepare link: ${model}`)
        loadTeachable(model)

    })
}, 10000)

window.loadTeachable = async (url) => {
    let isCached = false;
    let start = new Date().getTime()
    if (window.availableTeachables.hasOwnProperty(url)) {
        console.log('tensor/ model is cached');
        isCached = true;
    }
    else {
        var cache = await caches.open('cache_teachable')

        var link = {}
        link.model = `${url}model.json`
        link.weight = `${url}model.weights.bin`
        link.metadata = `${url}metadata.json`

        try {
            cache.addAll([
                link.model,
                link.weight,
                link.metadata
            ])
        }
        catch (e) {
            console.error(`cache: failed to cache`, {e, link})
        }
        
        var request = {}
        request.model = await cache.match(link.model) || await fetch(link.model)
        request.metadata = await cache.match(link.metadata) || await fetch(link.metadata)
        request.weight = await cache.match(link.weight) || await fetch(link.weight)

        var file = {}
        file.model = new File([await request.model.blob()], 'model.json')
        file.weight = new File([await request.weight.blob()], 'model.weights.bin')
        file.metadata = new File([await request.metadata.blob()], 'metadata.json')

        const model = await core.getAVRBro().teachable.loadFromFiles(
            file.model,
            file.weight,
            file.metadata
        )
        
        // console.warn('tensor/ loading model')
        // let { tfjs, teachable } = window.core.getAVRBro()
        // let tmImage = teachable
        // const modelUrl = `${url}model.json`
        // const metadataUrl = `${url}metadata.json`
        // toast({
        //     icon: 'info',
        //     title: 'Teachable Machine',
        //     text: `loading: ${url}`,
        //     timer: 10000
        // })
        // const model = await tmImage.load(modelUrl, metadataUrl)
        // const maxPredictions = model.getTotalClasses()
        toast({
            icon: 'success',
            title: 'Teachable Machine',
            text: 'model is downloaded and ready',
            timer: 3000
        })
        window.availableTeachables[url] = model
        core.infoNotification(`Teachable Machine: Load model took ${new Date().getTime() - start}ms`)
    }

    return {
        model: window.availableTeachables[url],
        isCached,
    }
}



window.loadShareCode = async (sharelink) => {
    let loadreq = await window.ipc('makecode.get_sharelink', {
        token: sharelink,
    })
    console.log("loadreq", loadreq)
    // remember to replace the onstart block id because it is the unique id globally
    loadreq.response.data.xml = loadreq.response.data.xml.replace(
        await window.getMainBlockId(),
        loadreq.response.data.mainBlockId
    )


    Blockly.getMainWorkspace().clear()
    let dom = Blockly.Xml.textToDom(loadreq.response.data.xml)
    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
    await window.toast({
        title: 'The sketch has been loaded successfuly',
        icon: 'success'
    })

    // localStorage.setItem(`teachable.${await window.sketchId()}`, JSON.stringify(loadreq.response.data.teachable))
    // console.log("Teachable Loaded to", { store: loadreq.response.data.teachable })
}
/**
 * Process the Query parameters
 */
window.processSearchParams = () => {
    let searchParams = new URLSearchParams(location.search)
    let sketchId = searchParams.get('sketch')
    if (sketchId) {
        console.log(`query/ sketch id = ${sketchId}`)
        localStorage.setItem('flag.newsketch', sketchId)
        location.replace(location.origin + '#editor')
    }
    setTimeout(async () => {
        // wait until blocks has been loaded ?
        while (Blockly.getMainWorkspace().getAllBlocks().length == 0) {
            await sleep(1000)
        }
        let storedShareCode = localStorage.getItem('flag.newsketch')
        console.log('processSearchParams', storedShareCode)
        if (storedShareCode != null) {
            console.log(`query/sketch/ `)
            await window.loadShareCode(storedShareCode)
            localStorage.removeItem('flag.newsketch')

        }
    })
}


window.intervals = {}
window.timeouts = {}


async function forwardInteractive(evt) {
    var ignore = false
    if (evt.type == 'drag' || evt.type == 'change') {
        var block = Blockly.getMainWorkspace().getBlockById(evt.blockId)
        if (block?.type == 'frame_display' && evt.type == 'drag') {
            ignore = true
        }
    }
    // dragging block doesn't hurt, but change the block mapping table does
    // TODO: :) I thinkg there is API changed

}

async function forwardServoHandler(evt) {
    if (window.state_setInteractive == false) return
    if (evt.type != 'change') return
    if (evt.element != 'field') return
    if (evt.blockId == null) return


    window.forwardServoHandlerEvent = evt
    clearTimeout(window.forwardServoHandlerFuture)
    window.forwardServoHandlerFuture = setTimeout(async () => {
        
        
        var block = Blockly.getMainWorkspace().getBlockById(evt.blockId)
        if (block == null) return
        if (block.type != "protractorPicker") return
        
        block = block.getSurroundParent()
        if (block.type != 'output_servo_setangle') return
        console.log(`itrt`, {evt,block})

    
        
        console.log(`itrt/ servo update to ${evt.newValue}`)
        var code = gen._blockToCode(block)
        /*
            the angle field is not committed, therefore gen.scrape will see old number
            we need to set the temporary override to signal gen.scrape

        */
        gen._scrape_overrides[block] = {
            angle: evt.newValue
        }


        var executable = `
import xUsercode
exec('''
async def __exec__():
${Blockly.Python.prefixLines(code, Blockly.Python.INDENT)}
import coroutine
coroutine.createTask(task=__exec__)
''', xUsercode.runtime)
            `
        delete gen._scrape_overrides[block]
        await modem.writePako({
            event: 'exec',
            data: executable
        })
        console.log(`itrt/ trigger block [${block.type}]`, executable)

    }, 300)

}

async function forwardDoubleClick(evt) {
    var handlers = {
        cloud_handle_messenger: async (evt) => {

        },
        sheet_add_line: async (evt) => {

        },
        cloud_event_channel: async (evt) => {

        },
        makecode_ml_matchimage: async (evt) => {

        },
        output_infrared_send: async (evt) => {

        },
        micropython_exec: async (evt) => {

        },
        function_definition: async (evt) => {
            console.log(`fd: handle with evt `, evt)
            let block = Blockly.getMainWorkspace().getBlockById(evt.blockId)
            let { function_name, stack } = gen.scrape(block)
            let fid = gen.Symbol(`fn_${gen.safe(function_name.substring(1, function_name.length - 1))}`)
            core.infoNotification(`Run: Function ${function_name}`)

            let cmd = `import coroutine;import xUsercode;coroutine.createTask(task=xUsercode.runtime['${fid}'])`
            console.log(`Interactive: Run function with cmd [${cmd}]`)
            var { success, response } = await modem.writePako({
                event: 'exec',
                data: cmd
            })

        }
    }

    if (evt.type == 'click') {
        
        
        var block = Blockly.getMainWorkspace().getBlockById(evt.blockId)
        if (block == null) return

        evt.timestamp = new Date().getTime()
        evt.type = "click"
        interactive.events.push(evt)
        interactive.latest_timestamp = evt.timestamp

        // var now = new Date().getTime()
        // var last = block._last_click || 0
        // var elapsed = now - last
        // block._last_click = now

        // // handle the single click 
        // console.log(`itrt/ click block`, block)


        // if (elapsed > 300) return
        // console.log(`itrt/ double click`, block)

        // if (!window.interactiveEnabled) {
            
        //     var fn = handlers[block.type]
        //     if (fn == null) {
        //         console.warn('no double click for', block.type)
        //         return
        //     }
        //     await fn.call(evt, evt)
        // }
        // else {
        //     // trigger the function call on single click ? so should it be here ?

        // }
    }
}

const interactive = {}
window.interactive = interactive
interactive.events = []
interactive.latest_timestamp = 0
interactive._block_triggered = null
interactive._function_definition_stacks = {} // use this to naviate the code
interactive.interval = setInterval(async () => {
    if (new Date().getTime() - interactive.latest_timestamp < 400) return;
    if (interactive.events.length == 0) return
    console.log(`itrt/ events`, interactive.events)
    console.table (interactive.events)
    try {
        var first = interactive.events[0]
        var count = interactive.events.filter(x => {
            if (x.type != first.type) return false;
            if (x.workspaceId != first.workspaceId) return false;
            if (x.blockId != first.blockId) return false;
            return true;
        }).length
        console.log(`itrt/ detect identical ${count} events`)

        var block = Blockly.getMainWorkspace().getBlockById(first.blockId)
        if (block == null) {
            console.warn(`itrt/ block not found, return`)
            return
        }

        if ((block.type == 'function_call' || block.type == 'function_call_output') && count == 2) {
            console.log(`itrt/ go to function`)
            // get the definition location
            // lazy: if bug happen, probably this
            let fname = `"${block.getFieldValue("function_name")}"`

            Blockly.getMainWorkspace().getBlocksByType("function_definition").forEach(defblock => {
                let { function_name } = gen.scrape(defblock)
                
                console.log(`itrt/ comprare`, fname, function_name)
                if (function_name == fname) {
                    Blockly.getMainWorkspace().centerOnBlock(defblock.id) 
                    // save back so later we can traverse backward
                    interactive._function_definition_stacks[defblock] = block
                }
            })

            return;
        }
        if (block.type == 'function_definition' && count == 2) {
            // if user double click on the definition, go back to the caller position
            var caller = interactive._function_definition_stacks[block]
            if (caller) {
                Blockly.getMainWorkspace().centerOnBlock(caller.id)
            }
            return;
        }

        if (block.type == 'cloud_event_channel' && count == 2) {
            interactive.events = []
            let channel = block.getInput('channel').connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].getValue().split('.')[1]
            let topic = block.getInput('group').connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].getValue()
            
            if (topic.length == 0) {
                await swal.fire({
                    title: "Trigger Link",
                    text: "Please type in the group id first",
                    icon: "error",
                    backdrop: false,
                })
                return
            }

            let url = `https://api.garastem.com/trigger/${topic}/${channel}`
            // console.log({ channel, topic, url })
            let req = await swal.fire({
                title: 'Trigger Link',
                text: url,
                icon: 'success',
                backdrop: false,
                focusConfirm: true,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Copy link',
                showDenyButton: true,
                denyButtonText: 'Try trigger'
            })
            if (req.isDenied) {
                // window.openInNewTab(url)
                await fetch(url)
                core.infoNotification(`Triggered link: [${url}]`)
            }
            if (req.isConfirmed) {
                navigator.clipboard.writeText(url)
                window.toast({
                    title: 'Trigger link is copied',
                    icon: 'success'
                })
            }
            
            return;
        }

        if (window.state_setInteractive && count == 1) {
            // single click on any block will trigger it to run
            interactive._block_triggered = block
            // window._prefix_symbol = 'xUsercode.runtime["' 
            // window._suffix_symbol = '"]'
            var code = gen._blockToCode(interactive._block_triggered)
            // window._prefix_symbol = ''
            var executable = `
import xUsercode
exec('''
async def __exec__():
${Blockly.Python.prefixLines(code, Blockly.Python.INDENT)}
import coroutine
coroutine.createTask(task=__exec__)
''', xUsercode.runtime)
            `
            await modem.writePako({
                event: 'exec',
                data: executable
            })
            console.log(`itrt/ trigger block [${block.type}]`, executable)
            core.infoNotification('Interactive: trigger block')
            

            return;
        }

        console.log(`itrt/ life has no meaning`)

    }
    finally {
        interactive.events = []
    }
}, 1000)

window.attachWorkspaceHandler = () => {
    Blockly.getMainWorkspace().addChangeListener(async (evt) => {
        if (evt.type == 'drag') {
            window.isDragging = true
        }
        else if (evt.type == 'end_drag') {
            window.isDragging = false
        }
        else if (evt.type == 'create') {
            // console.log("Create Block", evt)
            if (window.shouldFolowBlock == true) {
                var block = Blockly.getMainWorkspace().getBlockById(evt.blockId)
                block.bumpNeighbours()
                Blockly.getMainWorkspace().centerOnBlock(evt.blockId)
                window.shouldFolowBlock = false
            }
        }
        else if (evt.type == 'selected') {
            window.selectedBlock = evt.newElementId
        }
        await forwardInteractive(evt)
        await forwardDoubleClick(evt)
        await forwardServoHandler(evt)
    })
}




// window.__attachWorkspaceHandler = async () => {
//     Blockly.getMainWorkspace().addChangeListener(async (event) => {
//         if (event.type == 'drag' || event.type == 'change') {
//             var ignore = false
//             if (event.type == 'drag') {
//                 var block = Blockly.getMainWorkspace().getBlockById(event.blockId)
//                 //? frame image can be drag freely
//                 if (block.type == 'frame_display') {
//                     ignore = true
//                     console.log('gesture/ ignore frame drag')
//                 }
//             }
//             if (window.interactiveEnabled && !ignore) {
//                 window.interactiveEnabled = false
//                 await window.clearAllReport()
//                 toast({
//                     title: 'Interactive',
//                     icon: 'info',
//                     timer: 3000,
//                     text: 'Interactive is temporarily paused because the sketch has changed'
//                 })
//                 console.log('gesture/ disable interactive mode')

//             }
//         }
//         if (event.type == 'click') {
//             if (event.blockId) {
//                 var block = Blockly.getMainWorkspace().getBlockById(event.blockId)
//                 if (block) {
//                     var now = new Date().getTime()
//                     var last = block.lastClickTimestamp || 0
//                     var elapsed = now - last
//                     if (elapsed < 300) {
//                         console.log(`doubleclick/ elapsed ${elapsed} to ${block.type}`)
//                         // if (block.type == 'Cloud_RunOnLambda') {
//                         //     await window.openLambdaEditor()
//                         // }
//                         // if (block.type == 'cloud_teachable_image') {
//                         //     await window.openTeachableEDitor(block.id)
//                         // }
//                         if (block.type == 'cloud_handle_messenger') {
//                             await window.openMessengerPairing()
//                         }
//                         else if (block.type == 'sheet_add_line') {
//                             const workbook = block.getInput('workbook').connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].getValue()
//                             window.openInNewTab(workbook)
//                         }
//                         else if (block.type == 'makecode_ml_matchimage') {
//                             let targetBlock = block.getInput('model').connection.targetBlock()
//                             let streamBlock = block.getInput('stream').connection.targetBlock()

//                             let model = targetBlock.getFieldValue('TEXT')
//                             if (streamBlock.type == 'webcam_frame') {
//                                 console.log("Should use TM")
//                                 window.openInNewTab(
//                                     'https://teachablemachine.withgoogle.com/train/image'
//                                 )
//                                 let req = await swal.fire({
//                                     icon: 'info',
//                                     title: 'Paste your teachable machine here',
//                                     input: 'text',
//                                     backdrop: false,
//                                 })
//                             }
//                             else if (streamBlock.type == 'iot_read_camera') {
//                                 // let user choose either model, online or offline
//                                 // the camera will do networking
//                                 let req = await swal.fire({
//                                     icon: 'info',
//                                     title: 'Teachable machine can work online and offline, which one you need ?',
//                                     text: `Online: Require network, Offline: Only work with grayscale small image`,
//                                     focusConfirm: true,
//                                     backdrop: false,
//                                     showCancelButton: true,
//                                     showConfirmButton: true,
//                                     showDenyButton: true,
//                                     denyButtonText: 'Train OFFLINE model',
//                                     confirmButtonText: 'Train ONLINE model'
//                                 })
//                                 if (req.isDenied) {
//                                     console.log('useraction: train offline')
//                                     await swal.fire({
//                                         icon: 'info',
//                                         title: 'Training model for Camera module',
//                                         text: 'We will direct you to Google training page',
//                                         backdrop: false,
//                                     })
//                                     window.openInNewTab((
//                                         'https://teachablemachine.withgoogle.com/train/tiny_image'
//                                     ))
//                                     var result = await swal.fire({
//                                         icon: 'info',
//                                         title: 'Welcome Back',
//                                         text: 'Step 2: Give me the TFLite file',
//                                         input: 'file',
//                                         backdrop: false,
//                                     })
//                                     var file = await readFileAsync(result.value)
//                                     // console.log({ content })
//                                     window._uploadFile = { file, 'value': result.value }

//                                     var blobId = await window.uploadBlob({
//                                         content: window.btoa(new Uint8Array(file)),
//                                         format: 'base64',
//                                         fileName: result.value.name
//                                     })
//                                     Blockly.Events.disable();
//                                     targetBlock.getField('TEXT').setValue(blobId)
//                                     Blockly.Events.enable();

//                                 }
//                                 else if (req.isConfirmed) {
//                                     console.log('useraction: train online model')

//                                 }
//                             }
//                         }
//                         else if (block.type == 'tflite_file') {
//                             let blobId = block.getInput('link').connection.targetBlock().getFieldValue('TEXT')
//                             if (blobId == '') {
//                                 window.openInNewTab('https://learn.garastem.com/blob')
//                             }
//                             else {
//                                 window.openInNewTab(`https://learn.garastem.com/blob/${blobId}`)
//                             }
//                         }
//                         else if (block.type == 'output_infrared_send') {
//                             // need to connect the device first and run
//                             await swal.fire({
//                                 icon: 'info',
//                                 title: 'Infrared module: Learning process',
//                                 text: 'Plug in Infrared sensor, point the remote toward it and press',
//                                 backdrop: false
//                             })
//                         }
//                         else if (block.type == 'micropython_exec') {
//                             /*
//                               Because the experience is far from ideal
//                               We want to run the code inside MicroPython
//                               But the Editor must be in seperate website and sync back
//                               So this is an API call to server to get latest code block
//                               Please note that 
//                             */
//                         }
//                         // else if (block.type == 'function_definition') {
//                         // }
//                         else {
//                             console.warn("DOUBLE_CLICK ERROR, block dont have handler", block.type)
//                         }

//                     }
//                 }
//                 block.lastClickTimestamp = now
//             }
//         }
//     })
// }
window.actionStartTeachable = async (options) => {
    var { tfjs, teachable } = window.core.getAVRBro()
    var tmImage = teachable
    var tf = tfjs
    var model, webcam, maxPredictions

    var { modelName, reportId } = options
    console.log(`teachable/ start action`)
}

window.uploadBlob = async (params) => {
    let { content } = params
    console.log('uploadBlob', params)
    let req = await window.ipc('blob.upload', params)
    console.log('uploadBlob', params, req)

    return req.response.blobId

}

//# Blockly Workspace Logic
window.clearAllReport = async () => {
    Blockly.getMainWorkspace().getAllBlocks(false).forEach(block => {
        try {
            block.removeInput('REPORT')
        }
        catch (err) {

        }
        block.setColour(block.colour_)
        // block.setCommentText(null)
        // block.setWarningText(null)
        block.setHighlightWarning(false)
        block.setHighlighted(false)
    })
}
window.isBlockContainStatement = block => {
    block.inputList.forEach(input => {
        if (input.type == Blockly.inputTypes.STATEMENT) {
            return true
        }
    })
    return false
}
window.interactiveEnabled = false
window.getScopedBlock = block => {
    var iter = block
    while (true) {
        var parent = iter.getSurroundParent()
        if (parent == null) break
        if (parent.type == 'run_in_background') {
            return parent
        }
    }
    return iter
}
window.getMakeCodeId = () => {
    var mkid = localStorage.getItem('mkid')
    if (mkid == null) {
        mkid = uuidv4()
        localStorage.setItem('mkid', mkid)
    }
    return mkid
}
window.setReport = async (pkg) => {
    // if (!window.interactiveEnabled) {
    //     return false
    // }
    var { reportId, state, value, warning, ts, colour, hint, error } = pkg
    reportId = window.blockMapping[reportId]
    var block = Blockly.getMainWorkspace().getBlockById(reportId)
    if (block === null) {
        console.warn(`report/ can't find block ${reportId}`)
        return false
    }
    if (warning) {
        var colour = block.colour_
        block.setColour('#000000')
        block.colour_ = colour
        block.setWarningText(warning)
        return
    }
    else {
        block.setWarningText(null)
    }

    if (error) {
        let { type, value, traceback } = error
        block.setHighlighted(true)
        block.setWarningText(`${type}\n -> ${value}`)
        console.warn(`report/ have warning`)
    }
    else {
        block.setHighlightWarning(false)
    }

    if (colour) {
        let c1 = block.colour_
        block.setColour(colour)
        block.colour_ = c1
        return
    }


    let root = block.getRootBlock()
    Blockly.Events.disable()
    try {
        if (block == root) {
            block.getDescendants(false).forEach(b => {
                if (!b.isEnabled()) return
                b.setColour(b.colour_)
            })
        }
        else {
            root.getDescendants(false).forEach(b => {
                if (b.isEnabled() == false) return
                if (b.outputConnection != null && b.outputConnection.check_ != null) {
                    if (b.outputConnection.check_.includes('Boolean')) return
                }
                b.setColour(b.colour_)
            })
            var fade_amount = 33
            var colour = root.colour_
            root.setColour(fade(colour, fade_amount))
            root.colour_ = colour
            if (!isBlockContainStatement(block)) {
                colour = block.colour_
                block.setColour(fade(colour, fade_amount))
                block.colour_ = colour
            }
            if (value != null && value.length != 0) {
                var report_field
                //# For Boolean block
                if (value === true || value === false) {
                    colour = block.colour_
                    block.setColour(fade(colour, fade_amount))
                    block.setColour(value === true ? '#00ff00' : '#ff0000')
                    block.colour_ = colour
                }
                //# For Normal Block
                else {
                    block.inputList.forEach(input => {
                        input.fieldRow.forEach(field => {
                            if (field.name == 'REPORT') {
                                report_field = field
                            }
                        })
                    })
                    if (report_field == null) {
                        report_field = new Blockly.FieldTextInput(value)
                        block.appendDummyInput('REPORT').appendField(report_field, 'REPORT')
                    }
                    else {
                        report_field.setValue(value)
                    }
                }
            }
        }

    }
    finally {
        Blockly.Events.enable()
    }
    return block.type
}



//# CODE GENERATOR                                                      
// window.generate_code = async (options) => {
//     let req
//     if (location.origin.includes(`localhost`)) {
//         req = await fetch(`https://learn.garastem.com/api/v1/toolchain/blockly`)
//     }
//     else {
//         req = await fetch(`${location.origin}/chrome.blockly.js`)
//     }




//     if (req.status == 200) {

//     }
//     else {
//         console.warn(`toolchain.blockly/ can't load, try local`)
//         req = await fetch(`${location.origin}/chrome.blockly.js`)

//     }

//     try {
//         console.log(`generator/ download generator toolchain`)
//         let js = await req.text()
//         eval(js)
//         console.log(`generator/ toolchain loaded`)
//         window.gen.makecode.target = 'micropython'
//         var generated = window.gen.workspaceToCode({
//             workspace: Blockly.getMainWorkspace(),
//             language: 'micropython'
//         }).code
//         let code = generated.code
//         let slot = generated.slot
//         console.warn(`generator/ code`)
//         console.warn(code)
//         return {
//             micropython: {
//                 code: code,
//                 slot: slot,
//                 flag: generated.flag
//             }
//         }

//     }

//     catch (err) {
//         console.warn('generator/ failed to generate code', err)
//     }

// }



//# CLOUD SERVER                                                        
window.startCloudConnection = async () => {
    window.socket = new WebSocket(`wss://learn.garastem.com/api/v1/wss/makecode/${getMakeCodeId()}`)
    window.socket.onopen = async () => {
        console.warn(`cloud/ connected`)
    }
    window.socket.onmessage = async (event) => {
        console.log('socket.message', event.data)
        var pkg
        try {
            pkg = JSON.parse(event.data)
        }
        catch (e) {
            console.log('not json')
            var buffer = await event.data.arrayBuffer()
            try {
                var pako = core.getAVRBro().pako;
                buffer = pako.inflate(buffer)
            }
            catch (e) {
                console.log('not zlib', e)
            }
            let msgpack = window.core.getAVRBro().msgpack
            pkg = msgpack.decode(buffer)
        }
        console.log(`cloud/ onmessage`, pkg)
        var uuid = pkg.uuid
        if (window.mailbox.hasOwnProperty(uuid)) {
            console.log(`cloud/ mailboxed ${uuid}`)
            window.mailbox[uuid] = pkg
        }
        else {
            // await handleIncomingPackage(pkg)
            if (pkg.DIR == 'down') {
                if (pkg.DEV != 'MAKECODE') {
                    console.log('proxy/ forward down to device')
                    await modem.writePako(pkg)
                }
            }
            else {
                // console.log("handle traffer from server to browser")
                // if (pkg.event == "makecode.queue_livestream") {
                //     // await livestream.__link_handle_update__(pkg)
                // }
            }
        }
    }
    window.socket.onclose = async () => {
        console.log(`cloud/ onclose`)
        setTimeout(async () => {
            console.log(`cloud/ restart connection now`)
            await startCloudConnection()
        }, 1000)
    }
}

window.getWorkspaceProps = async () => {
    var blocks = Blockly.getMainWorkspace().getAllBlocks(false)
    props = {}
    blocks.forEach(b => {
        var bp = {}
        b.inputList.forEach(input => {
            input.fieldRow.forEach(field => {
                if (field.name) {
                    bp[field.name] = b.getFieldValue(field.name)
                }
            })
        })
        bp.name_ = b.name_
        bp.tpe = b.type
        props[b.id] = bp
    })
    props.blockMapping = generateBlockMapping()
    props.groupAccessCode = generateGroupAccessCode()
    window.makecode = window.makecode || {}
    window.makecode.props = props
    return props
}
window.blockMapping = {}
window.makecode = {}
window.generateBlockMapping = () => {
    // if (window.Blockly == undefined) return
    // var ids = []
    // Blockly.getMainWorkspace().getAllBlocks(false).forEach(block => {
    //     if (block.type == 'frame_display') return
    //     ids.push(block.id)
    // })
    // ids.sort()
    // var map = {}
    // for (var i = 0; i < ids.length; i++) {
    //     map[ids[i]] = i
    //     map[i] = ids[i]
    // }
    // window.blockMapping = map
    // return map

    //! Try to keep an unchanged map id, only if block is completely removed
    // otherwise it will have a lot of tiny update, which is just numbers
    // once the mapping is assigned, use the assigned number
    // so do not sort this stuff, screw the compatibility mapping
    if (window.Blockly == undefined) return;
    Blockly.getMainWorkspace().getAllBlocks(false).forEach(block => {
        if (block.type == 'frame_display') return;
        if (window.blockMapping.hasOwnProperty(block.id)) return;
        let idx = Object.entries(window.blockMapping).length + 1;
        window.blockMapping[block.id] = idx;
        window.blockMapping[idx] = block.id;
        console.log("blockMapping add", idx, block.id)
    })
    return window.blockMapping;

}
setInterval(window.generateBlockMapping, 3000)

window.generateGroupAccessCode = () => {
    var accessCodes = {}
    Blockly.getMainWorkspace().getAllBlocks().forEach(block => {
        if (block.type == 'cloud_join_group') {
            var name = block.getInput('name').connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].getValue()
            var password = block.getInput('password').connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].getValue()
            accessCodes[name] = password
            // console.log(`group.checkfor`, { name, password })
            console.log('access_code/', name, password)
        }
    })
    return accessCodes
}
window.sketchId = async () => {
    /**
     * MakeCode will change the workspace id on reload, we can only preserve the blockId
     * Since all sketch has single onstart block, use it as sketchId
     * sketchId = block[type=grobot_general_onstart].id
     * @returns SketchId
     * @type str
     * 
     * 
     * !This is no longer correct : 1/3/2023
     * Please use internal sketch api
     */
    let sketchId = ''
    Blockly.getMainWorkspace().getAllBlocks(false).forEach((block) => {
        if (block.type == 'grobot_general_onstart') {
            sketchId = block.id
        }
    })
    sketchId = btoa(sketchId).replace('=', '').replace('/', '')
    return sketchId
}


function checkLogicCompare() {
    let textCompareError = false;
    Blockly.getMainWorkspace().getBlocksByType("logic_compare").forEach(block => {
        console.log("block", block)
        window.logic = block

        let a = block.getInput("A").connection.targetConnection.sourceBlock_.type
        let b = block.getInput("B").connection.targetConnection.sourceBlock_.type

        if ((a != 'math' && b == 'text') || (b != 'text' && a == 'text')) {
            textCompareError = true
        }
    })

    // if (textCompareError) {
    //     swal.fire({
    //         title: 'There is a problem',
    //         text: `Look like you are comparing text and a number ;)`,
    //         icon: 'info',
    //         backdrop: false,
    //         showCancelButton: true,
    //         showConfirmButton: true
    //     })

    // }
}


window.getWebcam = async () => {
    window.webcamLastTimestamp = new Date().getTime()
    if (window.webcam == null) {
        console.log("webcam -> requesting")
        const flip = true
        const width = 200
        const height = 200
        let { teachable } = window.core.getAVRBro()
        const webcam = new teachable.Webcam(width, height, flip)
        await webcam.setup()
        webcam.play()

        window.webcam = webcam
    }
    return window.webcam
}


//# HANDLE USER GESTURE                                             

//# SERVICES                                                         



function addFrameImageBlock() {
    window.intervals.addFrameImageBlock = setInterval(() => {
        if (window.Blockly === undefined) return
        Blockly.Blocks.frame_display = {
            init: function () {
                this.setPreviousStatement(false)
                this.setNextStatement(false)
                this.setOutputShape(Blockly.OUTPUT_SHAPE_SQUARE)
                this.appendDummyInput("src").appendField(new Blockly.FieldLabel(Blockly.Blocks.frame_display.nextObject.label), "label")
                this.appendDummyInput("image").appendField(new Blockly.FieldImage(
                    Blockly.Blocks.frame_display.nextObject.image,
                    600,
                    600
                ), "image")

                setTimeout(() => {
                    this.initSvg()
                    this.render()
                    Blockly.Events.disable()
                    this.setEnabled(true)
                    this.disabled = true
                    Blockly.Events.enable()

                })
            },
            nextObject: {
                label: "Default",
                image: "https://picsum.photos/300/300"
            }
        }
        window.updateImageBlockRequestTs = 0
        setInterval(async () => {
            const now = new Date().getTime()
            // if (now - window.updateImageBlockRequestTs < 5000 && (Blockly.getMainWorkspace().getBlocksByType("makecode_ml_matchimage").length != 0) || livestream.channel != null) {
            //     const webcam = await getWebcam()
            //     webcam.update()
            //     window.updateImageBlock('camera', webcam.canvas.toDataURL())
            // }
            // else {
            //     // delete the camera object frame
            //     Blockly.Events.disable();
            //     Blockly.getMainWorkspace().getBlocksByType("frame_display").forEach(block => {

            //         block.dispose(true)
            //     })
            //     Blockly.Events.enable();
            // }

            /*
                Params:
                    livestream.listeningChannelTimestamp
                    window.updateImageBlockRequestTs
                
            */
            let shouldDisplayWebcam = (now - window.updateImageBlockRequestTs < 10000) && (Blockly.getMainWorkspace().getBlocksByType("makecode_ml_matchimage").length != 0)
            let shouldDisplayLivestream = (now - livestream.listeningChannelTimestamp < 10000)
            if (shouldDisplayWebcam) {
                const webcam = await getWebcam()
                webcam.update()
                window.updateImageBlock('Webcam', webcam.canvas.toDataURL())
            }
            if (shouldDisplayLivestream) {
                
            }
            if (!shouldDisplayWebcam && !shouldDisplayLivestream) {
                Blockly.Events.disable();
                Blockly.getMainWorkspace().getBlocksByType("frame_display").forEach(block => {
                    block.dispose(true)
                })
                Blockly.Events.enable();
            }

        }, 1000)
        clearInterval(window.intervals.addFrameImageBlock)
    }, 2000)
}
window.getImageBlock = (stream) => {
    let block = null
    Blockly.getMainWorkspace().getAllBlocks().forEach((b) => {
        if (b.type != 'frame_display') return
        var src = b.getFieldValue("label").toLowerCase()
        if (src.includes(stream)) {
            block = b
        }
    })

    if (block == null) {
        console.warn("getImageBlock: can not find, create block")
        Blockly.Blocks.frame_display.nextObject = {
            label: stream,
            image: Blockly.Blocks.frame_display.nextObject.image
        }
        block = Blockly.getMainWorkspace().newBlock('frame_display')
    }
    return block

}
window.updateImageBlock = (stream, image) => {
    var block = window.getImageBlock(stream)

    window.webcamLastTimestamp = new Date().getTime()

    try {
        Blockly.Events.disable()
        block.getInput('image').removeField('image')
        block.getInput('image').appendField(
            new Blockly.FieldImage(
                image,
                300,
                300
            ),
            'image'
        )
    }
    finally {
        Blockly.Events.enable()
    }
}
function disableServiceWorkser() {
    return
    try {
        navigator.serviceWorker.getRegistrations().then(
            function (registrations) {
                for (let registration of registrations) {
                    console.log(`sw remove service`, registration)
                    registration.unregister();
                }
            });
    }
    catch (err) {

    }
}



window.selectedBoard = null
// var modem.ble = modem.ble 


//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 



window.actionConnectAndUploadProgressing = false
window.actionConnectAndUpload = async () => {
    checkLogicCompare()
    await clearAllReport()

    if (window.actionConnectAndUploadProgressing) {
        console.log(`click/ ignore ongoing`)
        return
    }
    window.actionConnectAndUploadProgressing = true
    var to = setTimeout(() => {
        actionConnectAndUploadProgressing = false
    })
    try {
        if (selectedBoard == null) {
            // open the dialog choosing the devices
            await window.core.dialogAsync({
                hasCloseIcon: true,
                header: 'Which board are you using',
                buttons: [
                    {
                        label: '1. GRobot Creator Plus (Bluetooth)', icon: 'external alternate', onclick: () => {
                            window.selectedBoard = 'giot'
                            modem.select(modem.BLE)
                        }
                    },
                    {
                        label: '2. GRobot Creator Plus (USB)', icon: 'external alternate', onclick: () => {
                            window.selectedBoard = 'giot'
                            modem.select(modem.USB)
                        }
                    },
                    {
                        label: '[⚙] Upgrade firmware',
                        icon: 'arrow circle right',
                        onclick: async () => {
                            setTimeout(async () => {
                                await upgradeFirmwareProcess()
                           })
                        },
                        color: 'red'
                    }
                    // { label: '2. GRobot Creator', icon: 'external alternate', onclick: () => window.selectedBoard = 'grobot' },
                    // { label: '3. Stream', icon: 'external alternate', onclick: () => window.selectedBoard = 'stream' },

                ]
            })
            if (window.selectedBoard == null) {
                throw Error(`click/ user didn't select any board`)
            }
        }



        if (!modem.available()) {
            // if device is not connect
            await modem.new()
            await modem.init()
        }
        else {
            // if device is connected -> here is uploading
            await modem.writePako({ event: 'deinit' })
            // window.toast({title:"Preparing ..."})
            // await sleep(2000)
            // toast({
            //     title: 'compiling...',
            //     text: 'Your sketch is being converting to Python code',
            //     timer: 10000,
            //     icon: 'info'
            // })
            // core.infoNotification('Upload: Compiling into code')
            var generated = await window.generate_code({ target: ['micropython'] })
            var codeHash = await sha256(generated.micropython.code)

            // toast({
            //     title: 'uploading ...',
            //     text: 'And the Python code is being uploading now',
            //     timer: 10000,
            //     icon: 'info'
            // })
            let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
            let xml = Blockly.Xml.domToText(dom);
            core.warningNotification('Upload: ready for upload')

            // Potentially RAM overflow
            // var { success, response } = await modem.writePako({
            //     event: 'upload_xml',
            //     data: {
            //         xml: core.getAVRBro().pako.deflate(xml),
            //         slot: generated.micropython.slot,
            //     },
            // }, { attempt: 3 })
            console.log(`code/ length is ${generated.micropython.code.length}`)
            window._generated_code = generated.micropython.code
            // for Version 7 with small code
            let fwvers = getFirmwareVersion()
            // reading the current status first



            if (fwvers < 10) {
                if (window._generated_code.length < 4096) {
                    var { success, response } = await modem.writePako({
                        event: 'upload_code',
                        data: {
                            code: String(generated.micropython.code),
                            slot: generated.micropython.slot,
                            flag: generated.micropython.flag,
                        },
                    }, { attempt: 1 })
                }

                // for version 7 with big code
                else {
                    window.toast({
                        title: "Uploading code ...",
                        timer: 30000,
                        icon: "info"
                    })
                    // must use partial exec api to write the file
                    // and manually run the code file in chunks
                    // writing metadata and flag first, with the code is placeholder
                    var { success, response } = await modem.writePako({
                        event: 'upload_code',
                        data: {
                            code: "#comingsoon",
                            slot: generated.micropython.slot,
                            flag: generated.micropython.flag,
                        },
                    }, { attempt: 1 })


                    console.log("Writing big code, split strategy")
                    let chunks = sliceIntoChunks(generated.micropython.code, 256);
                    console.log("Chunks: ", chunks)
                    var { success, response } = await modem.writePako({
                        event: 'exec',
                        data: `f=open('temp.py', 'wb');print("start file")`
                    })
                    await sleep(1000);
                    for (let i = 0; i < chunks.length; i++) {
                        console.log("writing chunks", i, chunks[i])
                        var { success, response } = await modem.writePako({
                            event: 'exec',
                            data: `print("written", f.write(binascii.a2b_base64("${btoa(chunks[i])}")),"bytes");gc.collect()`
                        })
                    }
                    var { success, response } = await modem.writePako({
                        event: 'exec',
                        data: 'f.close();print("File completed")'
                    })
                    console.warn("renaming file")
                    var { success, response } = await modem.writePako({
                        event: 'exec',
                        data: `os.rename("temp.py", "code_${generated.micropython.slot}.py")`
                    })
                    console.warn("executing file")

                    var { success, response } = await modem.writePako({
                        event: 'exec',
                        data: `import uasyncio;animation._show_selected_program(${generated.micropython.slot});usercode.selected_program = ${generated.micropython.slot};config._set_state("selected_program", ${generated.micropython.slot});uasyncio.create_task(controller._switch_mode(controller.MODE_PROGRAM, program=${generated.micropython.slot}))`
                    })
                    window.toast({
                        title: "Uploading COMPLETED",
                        timer: 3000,
                        icon: 'success'
                    })
                }

            }

            else if (fwvers >= 10) {
                // for version 10, we have refined this concept of diff Upload
                // so if the hash version matched, then probably the upload is only a few seconds
                // to do this, v10 have firmware for patching, hashing. MakeCode have diff generator
                /*
                    // upload process
                    MK->DE : check usercode metadata
                    if MK know the hash
                        -> update with patch fil
                    else
                        -> update as normal
                    
                    // we do not support compression as it may cause memory fragmentation
                */
                // first, get the slot metadata, this will shed some light
                var { success, response } = await modem.writePako({
                    event: 'ucmd',
                    data: {
                        slot: generated.micropython.slot
                    },
                    uuid: "#" + uuidv4().substring(0, 7)
                })
                console.warn("usercode.metadata", response)
                var hashcode = generateCodeHash(generated.micropython.code)
                var metadataStatus = response;
                window.metadataStatus = metadataStatus


                var hashlink = null
                var { success } = await modem.writePako({
                    event: 'ucum', // update metadata
                    data: {
                        slot: generated.micropython.slot,
                        flag: generated.micropython.flag,
                        hashcode: hashcode,
                        hashlink: window.currentHashLink || null
                    },
                }, { attempt: 1 })

            
                // choosing strategy to upload this code
                var diffUpdate = false;

                // compare this with what the code should look like
                if (metadataStatus.actualCodeHash != undefined) {
                    console.log('hasher/ exist', metadataStatus.actualCodeHash)
                    window.actualCodeHash = metadataStatus.actualCodeHash
                    // get the python version of the codehash
                    var currentCode = await getCodeHash(metadataStatus.actualCodeHash)
                    if (currentCode != null) {
                        // a previous has been cached
                        console.warn("code was cached before",
                            {
                                actualCodeHash: metadataStatus.actualCodeHash,
                                currentCode
                            })
                        // now we do diff update
                        diffUpdate = true;
                    }
                    // Bug: disable for now
                    diffUpdate = false;

                }
                

                var textDiffCreate = core.getAVRBro().textDiffCreate
                var deltas = textDiffCreate(
                    await getCodeHash(metadataStatus.actualCodeHash) || '',
                    generated.micropython.code
                )

                // split deltas into fairly even op chunk, due to memory contrains
                var chunks = spliceDeltaChunks(deltas)
                // if any chunks are changes that is larger than 256 bytes then chunks is null
                // therefore, should not use diff update
                if (chunks == null) diffUpdate = false;



                if (diffUpdate) {
                    // var differ = core.getAVRBro().textDiffCreate(
                    //     await getCodeHash(metadataStatus.actualCodeHash) || '',
                    //     generated.micropython.code
                    // )
                    // var deltas = []
                    // var chunks =

                    // for (var i = 0; i < differ.length; i++){
                    //     deltas.push(differ[i][0])
                    //     deltas.push(differ[i][1])
                    // }
                    // console.log('textdiff', differ)
                    // await modem.writePako({
                    //     event: 'uc.patch',
                    //     data: {
                    //         met: [generated.micropython.slot, current, total],
                    //         deltas: deltasChunk
                    //     }
                    // })
                    
                    
                    for (var idx = 0; idx < chunks.length; idx++){
                        // window.toast({
                        //     title: "Uploading ...",
                        //     text: `Progress: ${Math.round( (idx +1)/ chunks.length * 100,1)}%`
                        // })
                        window.showProgress("Uploading: ", idx + 1, chunks.length);

                        // flatten to reduce transfers size
                        var chunk = chunks[idx];

                        var flatten = []
                        for (var d of chunk) {
                            flatten.push(d[0]);
                            flatten.push(d[1]);
                        }

                        var { success, response } = await modem.writePako(
                            {
                                event: 'uc.patch', 
                                data: {
                                    met: [generated.micropython.slot, idx, chunks.length],
                                    deltas: flatten
                                },
                                uuid: "#" + uuidv4().substring(0,7)
                            },
                            {
                                timeout: 6000
                            }
                        )
                        
                        if (success == false){
                            throw new Error("problem happend with patch")
                        }
                    }
                    await sleep(1000)

                }


                else {
                    // using ucmd long update for non compressed stream
                    // partial writing
                    // with more optimization on speed
                    generateCodeHash(generated.micropython.code)

                    await modem.writePako({
                        event: 'uc.open',
                        data: {
                            slot: generated.micropython.slot
                        }
                    })
                    var chunks = sliceIntoChunks(generated.micropython.code, 256)
                    for (var i = 0; i < chunks.length; i++){
                        // window.toast({
                        //     title: "Uploading ...",
                        //     text: `Write: ${Math.round((i + 1) / chunks.length * 100, 1)}%`
                        // })
                        window.showProgress("Writing: ", i + 1, chunks.length);
                        await modem.writePako({
                            event: 'uc.write',
                            data: {
                                chunk: chunks[i]
                            }
                        })
                    }
                    await modem.writePako({
                        event: 'uc.close'
                    })


                }
                await modem.writePako({
                    event: 'uc.start',
                    data: {
                        slot: generated.micropython.slot
                    }
                })






            }



            if (success) {
                // toast({
                //     title: 'upload completed',
                //     text: 'The device will start to response soon',
                //     icon: 'success',
                //     timer: 5000
                // })
                core.warningNotification('Upload: COMPLETED')
            }
            else {
                // toast({
                //     title: 'upload failed',
                //     text: 'The device will start to response soon',
                //     icon: 'error',
                //     timer: 5000
                // })
                core.errorNotification('Upload: FAILED')
            }
            window.justUploaded = true
            // window.interactiveEnabled = true

        }


    }
    finally {
        window.actionConnectAndUploadProgressing = false
        clearTimeout(to)
    }
}
var actionExitBoardTs = []
window.actionExitBoard = async () => {
    await clearAllReport()
    // if click this button multiple times -> refresh page
    var now = new Date().getTime()
    actionExitBoardTs.push(now)
    var count = 0
    actionExitBoardTs.forEach(ts => {
        if (now - ts < 1000) {
            count += 1
        }
    })
    if (count >= 4) { location.reload() }


    console.log(`click/ handle exit event`)
    window.timeouts.forEach(to => clearTimeout(to))

    if (window.justUploaded == true) {
        window.justUploaded = false // we consider this as user want to stop running
        console.warn('click/ attempt to deinit usercode')
        await modem.writePako({ event: 'deinit' })
        
        infoNotification('Your code is stopped')
    }
    else {
        // clicking this button means that 
        // Bug: Planny just reload the page
        location.reload()

        window.actionConnectAndUploadProgressing = false
        window.selectedBoard = null
        await modem.exit()

        // modem.ble.server && modem.ble.server.disconnect()
        // modem.ble.__deinit__()

        // // if (window.usb?.connected) {
        // //     await window.usb.close()
        // // }
        // window.usb && await modem.usb.close({ exit: true })

        // deinit the board is done with __new__
    }
    await modem.cleanup()
}



function processPakoProtocol(data) {
    const FLAG_PAKO = 7
    const FLAG_FINISH = 4
    const FLAG_START = 3
    let flag = data[0]
    let chunk = data.slice(1, data.length)
    if (isBitOn(flag, FLAG_PAKO)) {
        // console.log('pako: not format')
        return null
    }
    if (isBitOn(flag, FLAG_START)) {
        window.PakoChunks = []
        // console.log('pako: start')
    }
    if (data.length == 1) {
        // console.log("pako: received ack signal from device")
        return null
    }
    window.PakoChunks.push(chunk)
    if (isBitOn(flag, FLAG_FINISH)) {
        const combine = (arrays) => new Uint8Array(arrays.reduce((acc, curr) => [...acc, ...curr], []));

        var buffer = combine(window.PakoChunks)
        let msgpack = window.core.getAVRBro().msgpack
        window.PackoBuffer = buffer
        let pkg = msgpack.decode(buffer)

        console.log(`pako: Decoded bluetooth from ${window.PakoChunks.length}`, { pkg, buffer })
        window.PakoChunks = []
        return pkg
    }
    else {
        // console.log("pako: receiving more")
    }

}

window.mailbox = window.mailbox || {}
async function handle_income(event) {
    var handlers = {
        processReport: async (pkg) => {
            console.log(`process/ REPORT`, pkg)
            setReport(pkg.data)
        },
        processTensorflow: async (pkg) => {
            console.log(`process/ TENSORFLOW`, pkg)
            //! IMPORTANT: Due to firmware problem, the parameter must always be "webcam"
            //! With this, data must be passed into link, that is a str, contain both source stream and model link
            //! comma :D
            
            let { data } = pkg
            let { link } = data
            let prediction;
            let model;
            let frame;


            if (!Array.isArray(link)) {
                if (!link.includes('teachablemachine')) {
                    link = `https://teachablemachine.withgoogle.com/models/${link}/`
                    console.log('wrap link', link)
                }


                console.log("tensorflow", pkg)
                let r = await loadTeachable(link)
                model = r.model

                const webcam = await window.getWebcam()
                if (!r.isCached) {
                    // await sleep(1000)
                    webcam.update()
                    frame = webcam.canvas
                    await model.predict(frame)
                }

                webcam.update()
                frame = webcam.canvas
                window.updateImageBlockRequestTs = new Date().getTime()

            }
            else {
                // link is array, [0] = model, [1] = stream
                stream = link[1]
                let modelId = link[0]
                console.log("Teachable.param", link)
                if (!modelId.includes('teachablemachine')) {
                    modelId = `https://teachablemachine.withgoogle.com/models/${modelId}/`
                }
                console.log("tensorflow", pkg)

                let r = await loadTeachable(modelId)
                model = r.model

                
                if (stream.startsWith("ls::")) {
                    let channel = stream.split('::')[1]
                    let req = await livestream._request_frame(channel)
                    console.log("TSLS", req.response)

                    if (req.response.livestream.success == true) {
                        frame = new Image
                        frame.src = req.response.livestream.frame
                        window.updateImageBlock(`From livestream channel ${channel}`, req.response.livestream.frame)
    
                        // livestream.listeningChannel = channel;
                        livestream.listeningChannelTimestamp = new Date().getTime()
                        
                    }
                    else {
                        console.warn("offline")
                        core.errorNotification(`Livestream [${channel}] is OFFLINE`)
                    }

                }
                else {
                    console.error("unsupported prefix")
                }
            }
            prediction = await model.predict(frame)
            prediction = await model.predict(frame)
            console.log('prediction', {model, frame, prediction})
            
            // take the best prediction
            var best_confidence = 0
            var best_prediction = null
            prediction.forEach(obj => {
                if (obj.probability > best_confidence) {
                    best_confidence = obj.probability
                    best_prediction = obj.className
                }
            })

            if (best_prediction) {
                core.infoNotification(`AI: Detect [${best_prediction}] with ${Math.round(best_confidence * 100)}% confidence`)
            }

            //! Phuong suggest it be live streaming only, so ...
            // window.updateImageBlock('camera', webcam.canvas.toDataURL())

            delete pkg.data
            pkg.response = { prediction: prediction }
            await modem.writePako(pkg)
            // pkg.response = {
            //   'prediction': prediction
            // }
            // modem.ble.write(JSON.stringify({
            //     uuid: pkg.uuid,
            //     response: {
            //         'prediction': prediction
            //     }
            // }))


        },
        processNotify: async (pkg) => {
            console.log(`process/ NOTIFY`, pkg)
            let { event, data } = pkg
            let { type, text, title, icon } = data
            if (type == 'fire') {
                swal.fire({
                    icon: icon,
                    text: text,
                    title: title,
                    backdrop: false
                })
            }
            else if (type == 'toast') {
                toast({
                    title: title,
                    text: text,
                    icon: icon,
                    timer: 3000
                })
            }

        },
        processSay: async (pkg) => {
            console.log(`process/ SAY`, pkg)
            let data = pkg.data
            function speak(message) {
                var msg = new SpeechSynthesisUtterance(message)
                var voices = window.speechSynthesis.getVoices()
                msg.voice = voices[0]
                window.speechSynthesis.speak(msg)
            }
            speak(data)
        },
        processPrompt: async (pkg) => {
            var result
            var done = false
            Blockly.prompt(pkg.message, pkg.defaultValue, (final) => {
                result = final
                done = true
            })
            console.log('procesPrompt.response', { pkg, result })
            return result
        },
        processHandshake: async (pkg) => {
            // handshake are both way, so it need to have uuid as response
            // console.warn(`process/ HANDSHAKE`, pkg)
            // modem.ble.mtu = pkg.data.mtu
            // modem.ble.metadata = pkg.data

            // // send back another handshake
            // var pkg = {
            //     uuid: pkg.uuid,
            //     data: {
            //         internet: true
            //     },
            //     event: 'gb.handshake'
            // }
            // console.log('handshake/ reply', pkg)
            // await modem.writePako(pkg)
        },
        processMailbox: async (pkg) => {
            if (window.mailbox.hasOwnProperty(pkg.uuid)) {
                window.mailbox[pkg.uuid] = pkg
                console.log(`process/ MAILBOX`, pkg)
                return true
            }
            return false
        },
        processVoice: async (pkg) => {
            console.log('processVoice', pkg)
            function speak(message) {
                var msg = new SpeechSynthesisUtterance(message)
                var voices = window.speechSynthesis.getVoices()
                msg.voice = voices[0]
                window.speechSynthesis.speak(msg)
            }
            speak(pkg.data.text)
            infoNotification(`say: ${pkg.data.text}`)
        },
        processInput: async (pkg) => {

            var result
            var done = false
            Blockly.prompt(pkg.data.question, null, (final) => {
                result = final
                done = true
            })
            pkg.response = result
            console.log('processInput', { result })
            await modem.writePako(pkg)
        },
        procesUsercodeStart: async (pkg) => {
            window.toast({
                title: 'Project Status',
                text: 'Code started to run',
                icon: "success",
                timer: 3000
            })
            await window.clearAllReport()
            let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
            let xml = Blockly.Xml.domToText(dom);
            if (pkg.data.hasOwnProperty('xml')) {
                pkg.data.xml = new TextDecoder().decode(core.getAVRBro().pako.inflate(pkg.data.xml));
            }
            var currentXml = pkg.data.xml

            window.runningXml = pkg.data.xml
            window.currentXml = xml


            if (xml != pkg.data.xml && false) {
                console.warn("new code is loaded ")
                if (window.flag_autoSyncProgram == false) return
                if (window.flag_autoSyncProgram == undefined) {
                    let sreq = await swal.fire({
                        title: 'Controller is running different program',
                        text: 'Do you want to turn on auto loading ?',
                        icon: 'info',
                        focusConfirm: true,
                        backdrop: false,
                        showConfirmButton: true,
                        showCancelButton: true
                    })
                    if (sreq.isConfirmed) {
                        window.flag_autoSyncProgram = true
                    }
                    else {
                        window.flag_autoSyncProgram = false
                    }
                }
                if (window.flag_autoSyncProgram == true) {
                    Blockly.getMainWorkspace().clear()
                    let dom = Blockly.Xml.textToDom(runningXml)
                    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
                    await window.toast({
                        title: 'Sketch is loaded',
                        icon: 'success'
                    })
                }
            }
        },
        processControllerMode: async (pkg) => {
            infoNotification(`Mode: ${pkg.data.mode}`)
        },
        processUsercodeError: async (pkg) => {
            console.error("Detect usercode error, disconnect soon", pkg)
            window.toast({
                title: "Device is tidying up",
                icon: 'info',
                timer: 2000
            })
            if (modem.ble.device != null) {
                window.shouldReconnectAfter = 5000
                modem.ble.device.disconnect()
            }
        }
    }
    window.handlers = handlers
    //# Start Parsing package
    let data = new Uint8Array(event.target.value.buffer)
    // if (data.length > modem.ble.mtu) {
    //     modem.ble.mtu = data.length
    //     console.log(`ble/ mtu update to ${data.length} bytes`)
    // }

    // Use either method to convert database

    if (data.length == 1) {
        console.log(`ble/ pako acked`, data[0])
        mailbox[data[0]] = true
    }
    else {
        // console.warn('pako/ _handle_income', data)
        //# Process bluetooth Package
        var pkg = processPakoProtocol(data)
        if (pkg == null) return
        window.blePkg = pkg


        console.warn(`ble/ handle message`, pkg)

        // check if mailbox receive this
        if (handlers.processMailbox(pkg) === true) {
            // console.log(`ble/ this is mailbox`)
            return
        }
        // check if pkg is proxy
        if (pkg.hasOwnProperty('DIR')) {
            // notify user that the device is using
            console.log(`ble/ device is using laptop as proxy up`, pkg)
            await socket.send(msgpack.encode(pkg))
            return
        }
        console.log(`ble/ use handlers`)
        // handle a direct command from device to makecode
        if (pkg.event == 'report') await handlers.processReport(pkg)
        else if (pkg.event == 't' || pkg.event == 'tensorflow') await handlers.processTensorflow(pkg)
        else if (pkg.event == 'notify') await handlers.processNotify(pkg)
        else if (pkg.event == 'say') await handlers.processSay(pkg)
        else if (pkg.event == 'gb.handshake') await handlers.processHandshake(pkg)
        else if (pkg.event == 'prompt') await handlers.processPrompt(pkg)
        else if (pkg.event == 'gb.say') await handlers.processVoice(pkg)
        else if (pkg.event == 'gb.input') await handlers.processInput(pkg)
        else if (pkg.event == 'usercode.start') await handlers.procesUsercodeStart(pkg)
        else if (pkg.event == 'controller.mode') await handlers.processControllerMode(pkg)
        else if (pkg.event == 'uc.error') await handlers.processUsercodeError(pkg)

        else {
            console.warn(`ble/ unhandled bluetooth topic: [${pkg.event}]`, pkg)
        }

    }

}



window.timeouts = []




/*
    Bypass
*/
window.setInteractive = async (enabled) => {
    console.log('flow/ setInteractive', enabled)
    await modem.writePako({
        event: 'usercode.flow',
        data: {
            flow: 'FLOW_INTERACTIVE',
            state: enabled
        }
    })
    if (enabled == false) {
        await window.clearAllReport()
    }
    window.editorToolbar_tsx.setState({ isInteractive: enabled })
    window.state_setInteractive = enabled
}

window.setBlockDelay = async (delay) => {
    delay = delay * 30 // 100 to 5000
    console.log('flow/ setBlockDelay', delay)
    infoNotification(`Block is slowed down to ${parseFloat(delay / 1000).toFixed(2)} seconds`)
    window.state_setBlockDelay = delay
    clearInterval(window.timeout_setBlockDelay)
    window.timeout_setBlockDelay = setTimeout(async () => {
        await modem.writePako({
            event: 'usercode.flow',
            data: {
                flow: 'FLOW_DELAY',
                delay: delay
            }
        })
    }, 666)
}








var modem = {}
window.modem = modem
modem.USB = 'usb'
modem.BLE = 'ble'
modem.ble = {}
modem.usb = {}
modem.ongoing = {}
modem.wasExit = false
modem.selectedMethod = null
modem.connected = false
modem.handshaked = false
modem.signal = new AbortController()
modem._writing_pako = false
modem.setButtonState = {}
modem.setButton = async (options) => {
    let { textButton, colorButton } = options
    while (window.editorToolbar_tsx == undefined) await sleep(100)
    editorToolbar_tsx.setState({
        textButton: textButton,
        colorButton: colorButton
    })
    modem.setButtonState = options
}
setInterval(async () => {
    // Workaround: Proejct Name must update on project swap. but there is no event
    try {

        if (modem.setButtonState.textButton.startsWith('Upload')) {
            await modem.setButton({
                textButton: `Upload [${app_tsx.state.projectName}] to ${modem.name}`,
                colorButton: 'green'
            })
        }

        

    }
    catch (e) { }
}, 1000)


var detectEmptyProjectTs = 0
setInterval(async () => {
    try {
        // save the current project if any into localStorage as safety feature
        var projectId = app_tsx.state.header.id;
        if (projectId == null) return;
        projectId = "projectId_" + projectId
        var current = localStorage.getItem(projectId)
        if (Blockly.getMainWorkspace().getAllBlocks().length == 0) {
            console.log("backup: Warning: detect empty project, reload ?", current)
            if (detectEmptyProjectTs == 0) {
                detectEmptyProjectTs = new Date().getTime()

            }
            else {
                if (new Date().getTime() - detectEmptyProjectTs > 10000) {
                    core.warningNotification("Project Recovered from Backup")
                    detectEmptyProjectTs = 0
                    Blockly.getMainWorkspace().clear()

                    let dom = Blockly.Xml.textToDom(current)
                    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
                }
            }
        }   
        else {
            var xml = getXml();
            
            
            if (current == xml) return;
            
            console.log(`backup/ save a snapshot of ${projectId}`)
            localStorage.setItem(projectId, xml)
        }

    }
    catch (e) {
        console.error("backup/", e)
    }
}, 3333)

modem.available = () => {
    if (modem.selectedMethod == modem.BLE) return modem.ble.available()
    if (modem.selectedMethod == modem.USB) return modem.usb.available()
}
modem.wait = async (ms, signal) => {

    if (signal.aborted) {
        modem._throw_error('modem is aborted...')
    }
    if (modem.selectedMethod == null) {
        modem._throw_error('modem lost method already')
    }
    if (modem.available() == false) {
        modem._throw_error('modem is no longer available')
    }
    await sleep(ms)
}
modem._throw_error = (msg) => {
    console.error(`modem/ _throw_error`, msg)
    throw new Error(msg)
}

modem._preparePakoMessage = async (pkg) => {
    // msgpack create invalid utf string on tablet
    /*
    pako.raw b'\x82\xa5event\xabupload_code\xa4data\x83\xa4code\xda\x01p#  GaraBlock: Start of Import Section\r\nimport coroutine\r\nimport uasyncio\r\nimport interactive\r\nimport board\r\nfrom constant import *\r\nimport flag\r\nimport usercode\r\n#  GaraBlock: Start of Task Section\r\nasync def usercode_begin():\r\n  await uasyncio.sleep_ms(0)\r\n\r\n\r\nasync def usecode_setup():\r\n  flag.remove(flag.PROGRAME_ONSTART)\r\n\r\nasync def usercode_loop():\r\n  pass\r\n\xa4slot\x00\xa4flag\x86\xb0priority_program\xc2\xb0GetButtonOnboard\xc2\xb7network_wifi_stconnect\xc2\xb1network_wifi_used\x00\xa4slot\x00\xa4wifi\x80' 
    */

    var stream = msgpack.encode(pkg)
    var obj = msgpack.decode(stream)

    console.log(`_preparePakoMessage -> ${stream.length} bytes`, { stream, pkg });

    var mtu
    if (modem.selectedMethod == modem.BLE) mtu = modem.ble.mtu - 8
    if (modem.selectedMethod == modem.USB) mtu = 128 // This is UART buffer size, not firmware

    var chunks = sliceIntoChunks(stream, mtu)
    for (var i = 0; i < chunks.length; i++) {
        var bit = 0x00
        var ICR = [0b00000000, 0b00100000, 0b01000000, 0b01100000]
        bit = bit | ICR[i % 4]
        if (i == 0) {
            // console.warn("pako: marking first frame")
            bit = bit | 0b00001000
        }
        if (i == chunks.length - 1) {
            // console.warn("pako: marking last frame")
            bit = bit | 0b00010000
        }
        chunks[i] = new Uint8Array([bit, ...chunks[i]])
    }

    return chunks
}
modem._sendPakoMessage = async (chunks, options) => {
    var signal = options.signal

    for (var i = 0; i < chunks.length; i++) {
        // window.showProgress('send:', i + 1, chunks.length)

        await modem.wait(1, signal)

        // preset the flag
        var flag = chunks[i][0];
        // console.warn(`pako/ write ${i}/${chunks.length} -> ${chunks[i].length} bytes`)
        window.mailbox[flag] = false

        // send data
        modem.selectedMethod == modem.BLE && await modem.ble.charact.writeValue(chunks[i])
        modem.selectedMethod == modem.USB && await modem.usb.writeValue(chunks[i])

        // wait for ack signal
        var start = new Date().getTime()
        while (window.mailbox[flag] == false) {

            if (!modem.available()) {
                throw new Error("Device lost connection, can't send data")
            }
            var now = new Date().getTime()
            if (now - start > 3333) {
                console.warn(`pako/ failed to receive ack in time`)
                throw new Error('Device failed to ack in time ..., should throw ?')
            }
            await modem.wait(1, signal)
        }
        delete window.mailbox[flag]
    }

}
modem._waitResponse = async (uuid, options) => {
    debug.waitingResponse = true;
    console.log('waiting response')
    let { timeout, signal } = options
    var date = new Date()
    var start = date.getTime()
    while (window.mailbox[uuid] == false) {
        await modem.wait(1, signal)
        var now = date.getTime()
        if (now - start > timeout) {
            modem._throw_error(`pako/ failed to received response in time`)
        }
    }
    var pkg = window.mailbox[uuid]
    delete window.mailbox[uuid]
    debug.waitingResponse = false;
    return pkg.response
}

modem.writingPako = false
window.debug = {}

modem.writePako = async (pkg, options) => {
    /*
        if uuid in pkg -> wait for response, options have timeout or none, retry is irrelevant
        must be cancellable ?
    */
    
    
    console.warn(`pako/ writePako`, pkg.event, { pkg, options })
    let start = new Date().getTime()

    while (modem.writingPako) {
        console.log("waiting for pako lock", debug.pako_package)
        await sleep(1000)
        let now = new Date().getTime()
        if (now - start > 10000) break;
    }


    modem.writingPako = true
    debug.pako_package = {pkg, options}
    try {


        options = options || {}
        var timeout = options.timeout || -1
        var attempt = options.attempt || 1

        if (options.priority === true) {
            modem._writing_pako = false
        }
        var waitResponse = 'uuid' in pkg
        if ('response' in pkg) {
            waitResponse = false
        }

        var uuid = pkg.uuid
        var result = {
            response: null,
            success: null,
            pkg: pkg,
            uuid: pkg.uuid,
            error: null
        }
        window.pakoResult = result
        var signal = modem.signal

        for (var att = 0; att < attempt; att++) {
            console.log(`pako: attempt`, att, attempt)
            var date = new Date()
            var now = date.getTime()

            try {
                while (true) {
                    if (modem._writing_pako != false) {
                        await modem.wait(10, signal)
                        continue
                    }
                    break
                }
                modem._writing_pako = pkg
                // setTimeout(() => {
                //     if (modem._writing_pako == pkg) {
                //         modem._writing_pako = false
                //         console.error('pako/ writing flag has been cleared for', pkg)
                //     }

                // }, 5000)
                try {
                    // window._pako_send_pkg = pkg;
                    var chunks = await modem._preparePakoMessage(pkg)
                    if (waitResponse) {
                        window.mailbox[uuid] = false
                    }
                    await modem._sendPakoMessage(chunks, { signal, pkg })
                    while (window.mailbox[uuid] == false) {
                        await modem.wait(10, { signal })
                    }
                    if (waitResponse) {
                        result.response = await modem._waitResponse(uuid, { timeout, signal })
                        console.warn(`modem/ responsed`, result)
                    }
                    else {
                        result.success = true
                        return result
                    }

                }
                finally {
                    modem._writing_pako = false
                }

            }
            catch (err) {
                console.error(`pako/ writePako`, pkg, err)
                if (att == attempt - 1) {
                    result.success = false
                    result.error = err
                    return result
                }
                else {
                    console.warn(`pako/ retry, attempt ${att}/${attempt}`)
                    continue
                }

            }

            result.success = true
            return result
        }
        result.success = false
        return result

    }
    finally {
        modem.writingPako = false
    }



}
modem.select = (method) => {
    console.warn(`modem/ select ${method}`)
    modem.selectedMethod = method
}
modem.cleanup = async () => {
    console.warn(`modem/ deinit`)
    modem.ble.mtu = 20
    modem.ble.device = null
    modem.usb.device = null

    await modem.refresh()
}
modem.refresh = async () => {
    console.warn(`modem/ refresh: stateful are now clean`)
    modem.signal.abort()
    modem.signal = new AbortController()

    if (modem.selectedMethod == modem.BLE) {
        modem.ble.server = null
        modem.ble.service = null
        modem.ble.charact = null
        modem.ble.service_id = null
        modem.ble.charact_id = null
        modem.ble.connecting = false
        modem.metadata = {}
        modem.ble.service_id = '0000FFE0-0000-1000-8000-00805F9B34FB'.toLocaleLowerCase();
        modem.ble.charact_id = '0000FFE1-0000-1000-8000-00805F9B34FB'.toLocaleLowerCase();
    }
    if (modem.selectedMethod == modem.USB) {
        modem.usb.deviceInfo = null
        modem.usb.textDecoder = null
        modem.usb.lineDecoder = null
        modem.usb.readableStreamClosed = null
        modem.usb.writableStreamClosed = null
        modem.usb.reader = null
        modem.usb.writer = null
        modem.usb.exited = false
        modem.usb.warnedUSBBusy = false
        modem.usb.exited = false

    }
    modem.connected = false
    modem.handshaked = false

}
setTimeout(async () => {
    await modem.usb.poll()
}, 1000)
setTimeout(async () => {
    await modem.usb.ping()
}, 1000)

modem._handshaking = false
modem.handshake = async () => {
    if (modem._handshaking) return
    modem._handshaking = true
    try {

        if (modem.selectedMethod != null) {
            console.warn(`modem/ initiate handshake`)
            var start = new Date().getTime()


            var uid = "#" + uuidv4().substring(0, 7)
            var { response, success, pkg } = await modem.writePako({
                event: 'gb.handshake',
                data: {
                    internet: true,
                    makecode: getMakeCodeId()
                },
                uuid: uid
            }, { timeout: 10000, attempt: 10 })

            console.log('handshake', response)
            
            
            modem.metadata = response
            modem.name = modem.metadata.name || 'Unknown Device'
            try {
                if (modem.metadata.hasOwnProperty("version")) {
                    modem.name = `${modem.name} (${modem.metadata.version})`
                }
                
            }
            catch (e) {
                
            }
            modem.ble.mtu = modem.metadata.mtu || 20
            window.infoNotification(`Transfer speed is ${modem.ble.mtu*10} bps`)


            // this must have interval to update as projectName is not a state
            await modem.setButton({
                textButton: `Upload [${app_tsx.state.projectName}] to ${modem.name}`,
                colorButton: 'green'
            })
            
            // setTimeout(async () => {
            //     var current = getFirmwareVersion()
            //     if (current < 12) {
            //         window.toast({
            //             icon: "warning",
            //             title: "Device is using outdated firmware",
            //             text: "Press Ctrl + Y and connect with USB to upgrade",
            //             timer: 5000,
            //         })
            //     }
            // }, 3000)

            //! garatool
            // var latest = await garatool.checkFirmware(modem.metadata)
            // console.log('checkFirmware', latest)

            // var currentKernel = modem.metadata?.kernel
            // if (currentKernel == 'EXT_KERNEL') {
            //     currentKernel = 0
            // }
            // var latestKernel = latest.kernel
            // if (latestKernel > currentKernel) {
            //     console.log('Your device is using an outdated firmware')
            // }





        }
        else {
            await modem.setButton({
                textButton: `Start`,
                colorButton: 'orange'
            })
        }
        modem.handshaked = true

    }
    finally {

        modem._handshaking = false
    }
    // if (modem.selectedMethod == modem.BLE) {

    //     await modem.setButton({
    //         textButton: `Upload to ${modem.ble.device.name}`,
    //         colorButton: 'green'
    //     })
    // }
    // if (modem.selectedMethod == modem.USB){

    // }

}
modem.usb.writeValue = async (chunk) => {
    // console.log(`modem.usb.writeValue`, chunk)
    var b64encoded = await base64_arraybuffer(chunk)
    chunk = 'mk:' + b64encoded + '\n'
    console.warn('usb/ write', chunk)
    await modem.usb.writer.write(chunk)
}
function convertDataURIToBinary(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}
modem.usb._last_ping = 0
modem.usb.ping = async () => {
    while (true) {
        await sleep(3000)
        if (modem.selectedMethod == modem.USB && modem.available()) {
            await modem.writePako({
                event: 'ping'
            })
        }
    }
}
modem.usb.poll = async () => {
    while (true) {
        await sleep(100)
        while (modem.selectedMethod == modem.USB) {
            await sleep(1)
            try {
                perf.poll = new Date().getTime()
                if (modem.usb.reader == null) continue
                var { value, done } = await modem.usb.reader.read()
                value && console.log(value)
                if (value.startsWith('mk:')) {
                    var upstream = value.substring(3, value.length)
                    // console.log(`pako/ upstream ${upstream.length} bytes`, upstream)
                    // var bytes = atob(upstream)
                    // console.log("bytes", bytes)
                    // await handle_income({target: {value: {buffer: bytes}}})
                    // var buffer = new ArrayBuffer(bytes)
                    await handle_income({
                        target: {
                            value: convertDataURIToBinary(upstream)
                        }
                    })
                }
                var now = new Date().getTime()
                if (now - modem.usb._last_ping > 3000) {
                    modem.write('mk:ping\n')
                    modem.usb._last_ping = now
                    console.warn(`modem/ poll usb pinged`)
                }
            }
            catch (e) {
                try {
                    if (e.name == 'TypeError') {
                        continue
                    }
                    console.error("poll/", e)
                    if (modem.usb.device) {
                        console.warn(`modem.usb/ detect disconnect, try to reconnect`)
                        await modem.reconnect()
                    }

                    await sleep(100)

                }
                catch (e) {
                    console.warn(e)
                }
            }
        }
    }
}
// modem.usb.connectionManager = async () => {

//     while (true) {
//         while (modem.selectedMethod == modem.USB) {
//             await sleep(1000)

//             if (modem.connected) continue
//             if (modem.usb.device == null) continue

//             var availables = await navigator.serial.getPorts()
//             // console.log("Availables", availables)
//             for (var port of availables) {
//                 var info = port.getInfo()
//                 var selected = modem.usb.device.getInfo()
//                 if (info.usbVendorId != selected.usbVendorId) continue
//                 if (info.usbProductId != selected.usbProductId) continue

//                 // console.log('candidate', port)
//                 if (modem.usb.exited) break
//                 modem.usb.device = port

//                 if (await modem.init()) {
//                     break
//                 }


//             }

//         }
//         await sleep(1000)
//     }

// }
modem.usb.available = () => {
    return modem.connected
}
modem.ble.available = () => {
    return modem.ble.charact != null
}
modem.timeouts = []
modem.new = async () => {
    console.warn(`modem/ new: create new interface with user gestures`)
    await modem.setButton({
        textButton: 'Requesting ...',
        colorButton: 'black'
    })
    try {
        if (modem.selectedMethod == modem.BLE) {
            await modem.cleanup()
            modem.ble.device = await navigator.bluetooth.requestDevice({
                optionalServices: [modem.ble.service_id],
                filters: [
                    { namePrefix: 'G' },
                    { namePrefix: 'ESP32' },
                    { namePrefix: 'B-' },
                    { namePrefix: 'C' }
                ]
            })
            console.log(`ble/ device selected as`, modem.ble.device)
            modem.ble.device.addEventListener('gattserverdisconnected', async () => {
                setTimeout(async () => {
                    await modem.reconnect()
                    setTimeout(() => {
                        // do not change any ui after 4s of reconnect
                        window.shouldReconnectAfter = null
                    }, 15000)
                }, window.shouldReconnectAfter || 1000)
            })
        }
        if (modem.selectedMethod == modem.USB) {
            var port
            port = await navigator.serial.requestPort({
                filters: [
                    { usbVendorId: 0x303a },
                    { usbVendorId: 0x10c4 },
                ]
            })
            modem.usb.device = port
            modem.usb.deviceInfo = port.getInfo()
            return true
        }
    }
    catch (e) {
        await actionExitBoard()
    }

}
modem.init = async () => {
    console.warn(`modem/ init: start the gestured device`)
    if (window.shouldReconnectAfter == null) {
        await modem.setButton({
            textButton: 'Connecting ...',
            colorButton: 'black'
        })
    }

    if (modem.selectedMethod == modem.BLE) {
        console.log(`ble/ attempt to start connection to device`)
        // BUG: how to cancell this connect ?
        modem.ble.connecting = true
        var to = setTimeout(() => {
            location.reload()
        }, 15000)
        modem.ble.server = await modem.ble.device.gatt.connect()
        clearTimeout(to)
        modem.ble.connecting = false
        console.log(`ble/ device server is`, modem.ble.server)
        modem.ble.service = await modem.ble.server.getPrimaryService(modem.ble.service_id)
        console.log(`ble/ device service is`, modem.ble.service)
        modem.ble.charact = await modem.ble.service.getCharacteristic(modem.ble.charact_id)
        console.log(`ble/ device charact is`, modem.ble.charact)


        modem.ble.charact.startNotifications()
        console.log(`ble/ start notifications`)
        modem.ble.charact.addEventListener('characteristicvaluechanged', async (event) => {
            await handle_income(event)
        })
        console.log(`ble/ device CONNECTED`)
        if (window.shouldReconnectAfter == null) {
            toast({
                title: 'Device CONNECTED',
                text: 'Your device is connected, can upload sketch now',
                icon: 'success'
            })
        }

        // await modem.writePako({ event: 'gb.connect', data: { source: 'ble' } })

        // setTimeout(async () => {
        //     await window.setInteractive(window.state_setInteractive)
        //     await window.setBlockDelay(window.state_setBlockDelay)
        // }, 2000)

    }
    if (modem.selectedMethod == modem.USB) {
        try {
            await modem.usb.device.open({ baudRate: 115200 })
        }
        catch (e) {
            await actionExitBoard()
            throw e
        }
        modem.usb.textDecoder = new TextDecoderStream()
        modem.usb.lineDecoder = new TransformStream(new LineBreakTransformer())
        modem.usb.readableStreamClosed = modem.usb.device.readable.pipeTo(
            modem.usb.textDecoder.writable
        )
        modem.usb.textDecoder.readable.pipeTo(modem.usb.lineDecoder.writable)
        modem.usb.reader = modem.usb.lineDecoder.readable.getReader()

        modem.usb.textEncoder = new TextEncoderStream()
        modem.usb.writer = modem.usb.textEncoder.writable.getWriter()
        modem.usb.writableStreamClosed = modem.usb.textEncoder.readable.pipeTo(modem.usb.device.writable)
        modem.connected = true

        console.warn('Port is CONNECTED')

        toast && toast({
            title: 'Device is CONNECTED',
            text: 'Connection is made with USB',
            icon: 'success',
            timer: 6000
        })

        await modem.writePako({ event: 'gb.connect', data: { source: 'usb' } })

        modem.usb.warnedUSBBusy = true
    }
    if (window.shouldReconnectAfter == null) {
        
        await modem.setButton({
            textButton: 'Handshaking ...',
            colorButton: 'black'
        })
    }
    await sleep(2000)
    modem.connected = true
    await modem.handshake()
    return true
}

modem.reconnect = async () => {
    /*
        while waiting for reconnection, user may press cancel ...
        cancel => selectedMethod = null
    */
    if (modem.wasExit) {
        modem.wasExit = false
        return
    }
    if (window.shouldReconnectAfter == null) {
        await modem.setButton({
            textButton: 'Reconnecting ...',
            colorButton: 'black'
        })
    }



    if (modem.selectedMethod == modem.USB) {
        // modem.connected = false
        if (modem.usb.device) {
            modem.usb.reader.cancel()
            await modem.usb.readableStreamClosed.catch(() => { })
            await modem.usb.writer.close()
            await modem.usb.writableStreamClosed
            await modem.usb.device.close()


        }

        var founded = false
        // must wait until the port is set
        modem.usb.device == null
        while (modem.selectedMethod == modem.USB && !founded) {
            await sleep(100)
            var availables = await navigator.serial.getPorts()
            console.log('availables', availables)

            for (var port of availables) {
                var info = port.getInfo()
                var selected = modem.usb.device.getInfo()

                if (info.usbVendorId != selected.usbVendorId) continue
                if (info.usbProductId != selected.usbProductId) continue

                console.warn(`modem/ reconnect found the USB port`)
                modem.usb.device = port
                founded = true
                break
            }
        }
    }
    if (modem.selectedMethod == modem.BLE) {

    }


    console.warn(`modem/ reconnect: device is losing, but still want to reconnect`)
    modem.timeouts.push(setTimeout(async () => {
        await modem.init()
        await modem.handshake()
    }), 4000)
}

modem.exit = async () => {
    console.warn(`modem/ exit: no longer using this device`)
    modem.wasExit = true

    infoNotification('Device DISCONNECTED')
    if (localStorage.getItem('wasInstalled') == 'true') {
        await modem.setButton({
            textButton: getStartText(),
            colorButton: 'green'
        })
    }
    else {
        await modem.setButton({
            textButton: getStartText(),
            colorButton: 'orange'
        })

    }
    if (modem.selectedMethod == modem.BLE) {
        await modem.writePako({ event: 'gb.disconnect', data: { source: 'usb' } }, { priority: true })
        if (modem.ble.connecting) {
            console.warn(`ble/ device is connecting, damn ...`)
            console.error('Should reload page')
            location.reload()
        }
        // modem.ble.server && await modem.ble.server.disconnect()
        modem.ble.device && await modem.ble.device.gatt.disconnect()

        modem.cleanup()
    }
    if (modem.selectedMethod == modem.USB) {

        await modem.writePako({ event: 'gb.disconnect', data: { source: 'usb' } }, { priority: true })
        await sleep(2000)
        try {
            modem.usb.reader.cancel()
            modem.ongoing.port_close = new Date().getTime()
            await modem.usb.readableStreamClosed.catch(() => { })
            await modem.usb.writer.close()
            await modem.usb.writableStreamClosed
            await modem.usb.device.close()
            modem.ongoing.port_close = false

        }
        catch (e) {
            console.warn(e)
        }

        console.warn('Port is CLOSED')
    }
    modem.connected = false
    modem.select(null)

}

window.handleSignIn = async (opts) => {
    var { provider, state } = opts
    infoNotification('Coming soon')
}
window.provideLoginButton = () => {
    // alert("Yesss")
}

//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 
//# =========== =========== =========== =========== =========== =========== ====================== 

window.hints = [
    'You can double click on empty space to quickly connect and upload new programe',
    ' '
]

function startTypeWarningSuppress() {
    // Typescript will complain if true == 1, so need to suppress the blocks
    setInterval(async () => {
        Blockly.getMainWorkspace().getAllBlocks().forEach(block => {
            if (block.warning != null) {
                block.setWarningText(null);
                block.setHighlightWarning(false);
            }
        })
    }, 2000)
}


async function startServiceWorker() {
    // if (localStorage.getItem('DEV') == null) return
    const registerServiceWorker = async () => {
        if ("serviceWorker" in navigator) {
            try {
                //# https://stackoverflow.com/questions/29741922/prevent-service-worker-from-automatically-stopping
                // Keeping service worker alive for Android
                setInterval(function () {
                    fetch('/index.html')
                }, 10000)
                const regitration = await navigator.serviceWorker.register("/sw.js", {
                    scope: "/",
                });
                let updated = false;
                let activated = false;
                // if (regitration.installing) {
                //     console.log("Service worker installing");
                // } else if (regitration.waiting) {
                //     console.log("Service worker installed");
                // } else if (regitration.active) {
                //     console.log("Service worker active");
                // }
                regitration.addEventListener("updatefound", () => {
                    const worker = regitration.installing;
                    worker.addEventListener('statechange', () => {
                        console.log({ state: worker.state });
                        if (worker.state === "activated") {
                            // Here is when the activated state was triggered from the lifecycle of the service worker.
                            // This will trigger on the first install and any updates.
                            activated = true;
                            checkUpdate();
                        }
                    });
                });
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    // This will be triggered when the service worker is replaced with a new one.
                    // We do not just reload the page right away, we want to make sure we are fully activated using the checkUpdate function.
                    console.log({ state: "updated" });
                    updated = true;
                    checkUpdate();
                });
                navigator.serviceWorker.ready.then(async (regis) => {
                    let wasInstalled = localStorage.getItem('wasInstalled')
                    if (wasInstalled) {
                        // window.toast({
                        //     title: "GaraBlock Online Platform",
                        //     text: "can work offline now.",
                        //     timer: 1000,
                        //     icon: 'success'
                        // })
                    }
                    else {
                        await swal.fire({
                            title: 'GaraBlock Online is installed',
                            text: `and can work offline now`,
                            icon: 'success',
                            backdrop: false,
                            focusConfirm: true,
                        })
                    }
                    localStorage.setItem('wasInstalled', true);
                })

                function checkUpdate() {
                    if (activated && updated) {
                        console.log("Application was updated refreshing the page...");
                        if (localStorage.getItem('DEV') != null) {
                            window.location.reload();
                        }
                    }
                    else {
                        window.toast({
                            title: "GaraBlock is updating ...",
                            icon: "warning",
                            timer: 30000,
                        })
                    }
                }
            } catch (error) {
                console.error(`Registration failed with ${error}`);
            }
        }
    };
    console.log('sw/ register')
    await registerServiceWorker()
}

let isDragging = false;
async function startProjectSaveService() {
    let userChangeCount = 0;
    Blockly.getMainWorkspace().addChangeListener((evt) => {
        // console.log("Event", evt.type)
        userChangeCount += 1
        if (evt.type == 'drag') {
            isDragging = true
        }
        if (evt.type == 'end_drag') {
            isDragging = false;

        }
    })
    setInterval(async () => {
        if (isDragging) return
        if (app_tsx.state.projectName == undefined) return;
        if (Blockly.getMainWorkspace().getAllBlocks().length != 0) return;

        console.error("why there no blocks", app_tsx.state);

        let id = `sketch.${app_tsx.state.projectName}`
        if (userChangeCount == 0) {
            if (getXml() != localStorage.getItem(id)) {

                let savedXml = localStorage.getItem(id)
                if (savedXml) {
                    console.warn("Might be intercepted by MakeCode, reload with ours ?")
                    return
                    Blockly.getMainWorkspace().clear()

                    let dom = Blockly.Xml.textToDom(savedXml)
                    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
                }
            }
            else {

            }
        }
        else {
            // user did change, save to datavase
            localStorage.setItem(id, getXml())
            console.log("project save, interact", userChangeCount)
            userChangeCount = 0;
        }
    }, 1000)

    /*
        Recover the unloaded sketch, but need to check if MakeCode have already loaded the sketch
    */  

    // process to save the code, just as backup
    // setInterval(async () => {
    //     if (Blockly.getMainWorkspace().getAllBlocks().length == 0) return;
    //     let xml = getXml();
    //     let savedXml = localStorage.getItem('xml')
    //     if (xml != savedXml) {
    //         localStorage.setItem('xml', getXml());
    //         console.error("saver/ update stored");
    //     }

    // }, 2048)
}

function getXml() {
    let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    let xml = Blockly.Xml.domToText(dom);
    return xml
}

async function startHashlinkService() {
    let last_xml
    setInterval(async () => {
        if (isDragging) return;
        if (socket.readyState != 1 || Blockly.getMainWorkspace().getAllBlocks().length <= 3) {
            updateHashlink("")
            return
        }
        let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        let xml = Blockly.Xml.domToText(dom);
        if (xml == last_xml) return
        last_xml = xml
        let req = await window.ipc('makecode.generate_hashlink', {
            xml: xml,
            projectName: app_tsx.state.projectName,
            projectId: await window.getMainBlockId(),
        })
        console.log(req.response)
        if (req.response.hashlink) {
            updateHashlink(req.response.hashlink)
        }

    }, 10000)

    function updateHashlink(hashlink) {
        window.currentHashLink = hashlink
        let mainblock = Blockly.getMainWorkspace().getBlocksByType("grobot_general_onstart")[0]
        if (mainblock == undefined) return
        try {

            mainblock.inputList[0].removeField("HASHLINK")
        }
        catch (err) {

        }
        finally {

            mainblock.inputList[0].appendField(`[ ${hashlink} ]`, "HASHLINK")
        }
    }

}

//! GaraBlock: add support for custom file
const isGaraBlockFile = (fileName) => {
    console.log("isGaraBlockFile", fileName);
    return fileName.endsWith(".gb");
}
window.isGaraBlockFile = isGaraBlockFile;
function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
const importGaraBlockFile = (file) => {
    
    // file.contents = str2ab(file.contents)
    console.log('importGaraBlockFile.start', file, file.contents.length );
    window.file = file
    var buffer = core.getAVRBro().pako.inflate(file.contents)
    let msgpack = window.core.getAVRBro().msgpack
    var pkg = msgpack.decode(buffer)
    console.warn('importGaraBlock.finish', pkg)
    Blockly.getMainWorkspace().clear()
    let dom = Blockly.Xml.textToDom(pkg.xml)
    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())


}


const livestream = {
    isEnabled: false,
    currentFrame: null,
    streamInterval: 100,
    interval: null,
    infoInterval: null,
    streamId: null,
    sock: null,
    channel: null,
    sockUrl: "wss://api.garastem.com/api/v1/wss/livestream/",
    listeningChannelTimestamp: 0, 
    _start_livestream: async () => {
        await getWebcam() // prevent timeout when livestream.snap
        livestream.interval = setInterval(() => {
            core.warningNotification(`Warning: This device is livestream to channel ${livestream.channel}`);
            window.updateImageBlockRequestTs = new Date().getTime()

        }, 1000)
        livestream.sock = new WebSocket(livestream.sockUrl + livestream.channel);
        livestream.sock.onopen = async () => {
            console.log(`livestream: connected`)
            addFrameImageBlock()
        }
        livestream.sock.onmessage = async (event) => {
            console.log(`livestream: onmessage`, event)
            let data = msgpack.decode(await event.data.arrayBuffer())
            if (data.event == 'livestream.status') {
                if (data.level == 'error') {
                    core.errorNotification(data.message)
                }
            }
            else if (data.event == 'livestream.snap') {
                let webcam = await getWebcam();
                webcam.update()
                let frame = webcam.canvas.toDataURL()
                livestream.sock.send(msgpack.encode({
                    event: 'livestream.snap',
                    uuid: data.uuid,
                    frame: frame
                }))
            }

        }
        livestream.sock.onclose = (event) => {
            console.log(`livestram: CLOSED`, event)
            livestream._stop_livestream()
            setTimeout(async () => {
                if (livestream.channel == null) return
                await livestream._start_livestream()
            }, 3000)
        }
    },
    _stop_livestream: async () => {
        console.log(`livestream._stop_livestream`)
        livestream.sock.close()
        livestream.sock = null
        livestream.channel = null
        clearInterval(livestream.interval)
        clearInterval(livestream.infoInterval)
    },
    _set_channel: (channel) => {
        if (livestream.channel == channel) return
        console.log(`livestream: set channel ${channel}`)
        livestream.channel = channel
        livestream.sock?.close()
    },

    _handle_button_click: async () => {
        console.log(`livestream: clicked`)
        let defaultValue = "TEST";
        if (livestream.channel == null) {
            let pm = new Promise((resolve, _) => {
                Blockly.prompt("Create a Live Stream", defaultValue, (final) => {
                    resolve(final)
                }, {
                    body: "This channel name must be unique"
                })
            })
            livestream.channel = await pm
            if (livestream.channel == null) {
                livestream.channel = null
                return 
            }
            console.log(`livestream: receive channel = ${livestream.channel}`)
            await livestream._start_livestream()

        }
        else {
            console.log(`livestream: turning off`)
            core.warningNotification(`Livestream: OFF`)
            await livestream._stop_livestream()
        }
    },
    _request_frame: async (channel) => {
        let req = await window.ipc('makecode.request_frame', {
            channel: channel
        })
        console.log(`livestream: _request_frame`, req.response)
        return req
    },
    turn: async (state) => {
        if (livestream.isEnabled == state) return;
        livestream.isEnabled = state;
        console.log(`livetsream: turned ${state}`);

        if (state) {
            // setInterval()
            livestream.infoInterval = setInterval(async () => {
                core.warningNotification(`Warning: this device is live-streaming to ${await livestream.getStreamId()}`);
            }, 1000);

            livestream.interval = setInterval(async () => {
                // if (window.socket.readyState != 1) return;

                window.updateImageBlockRequestTs = new Date().getTime()
                const webcam = await getWebcam();
                webcam.update()

                // await window.ipc("makecode.update_livestream", {
                //     streamId: await livestream.getStreamId(),
                //     frame: webcam.canvas.toDataURL()
                // })
            }, 1000)
            await livestream.getStreamId() // secretly register because always first call 
        }
        else {

        }
    },
    getStreamId: async () => {

    }
}
window.livestream = livestream

window.streamWebcam = livestream._handle_button_click

window.importGaraBlockFile = importGaraBlockFile;
const downloadGaraBlockFile = async () => {
    console.log('downloadGaraBlockFile')

    function save(filename, data) {

        const blob = new Blob([data], { type: 'application/octet-stream' });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    
    let req = await swal.fire({
        title: "Save GaraBlock project as",
        // text: "This file is downloaded to your computer",
        input: "text",
        inputValue: app_tsx.state.projectName,
        // inputLabel: ".gb",
        backdrop: false,
        showCancelButton: true,
        focusConfirm: true,
        icon: "info"
    })
    console.log("file.req", req)
    if (req.isConfirmed == false) return

    var fileName = `${req.value}.gb`
    let dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    let xml = Blockly.Xml.domToText(dom);
    let package = {
        xml: xml,
        props: await window.getWorkspaceProps(),
        sketchId: await window.sketchId(),
        mainBlockId: await window.getMainBlockId(),
        savedAt: new Date().getTime(),
        savedFormat: 0.

        // teachable: await window.getTeachableDatabase()
    }
    let content = core.getAVRBro().pako.deflate(msgpack.encode(package))
    console.log(`filelen ${content.length}`)
    msgpack.decode(pako.inflate(content))
    save(fileName, content);

    await swal.fire({
        backdrop: false,
        icon: "success",
        title: "File downloaded",
        text: `To load the project, simply drag and drop ${req.value}.gb into the workspace`,
        focusConfirm: true,
    })
}
window.handleDownloadButton = downloadGaraBlockFile;

window.handleUploadButton = async () => {
    // await swal.fire({
    //     backdrop: false,
    //     title: 
    // })
}

function startRecoveryService() {
    console.log(`recovery: ENABLED`)
    
}

window.pako = core.getAVRBro().pako
window.msgpack = core.getAVRBro().msgpack
async function mainthread() {
    processSecureHttps()

    // console.clear()
    console.log(`welcome from Vietnam ha`)
    window.intervals = window.intervals || {}
    var intervals = window.intervals


    // wait until Blockly arrived
    while (window.Blockly === undefined) {
        await window.sleep(100)
    }
    Blockly._hideChaff = Blockly.hideChaff
    Blockly.hideChaff = (state) => {
        // console.trace('Blockly.hideChaff intercepted', state)
    }

    // BUG Workaround, this original function cause stack overflow
    // Blockly.Xml.domToText = function (a) {
    //     return Blockly.utils.xml.domToText(a);
    //     // return Blockly.utils.xml.domToText(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>")
    // };
    Blockly.Functions.mutateCallersAndDefinition = function (name, ws, mutation) {
        console.log("called", name, ws, mutation);
        try {
            var definitionBlock = Blockly.Functions.getDefinition(name, ws);
            if (definitionBlock) {
                var callers = Blockly.Functions.getCallers(name, definitionBlock.workspace);
                callers.push(definitionBlock);
                Blockly.Events.setGroup(true);


                // callers.forEach();
                for (const caller of callers) {
                    setTimeout(() => {
                        var oldMutationDom = caller.mutationToDom();
                        var oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
                        caller.domToMutation(mutation);
                        var newMutationDom = caller.mutationToDom();
                        var newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

                        if (oldMutation != newMutation) {
                            // Fire a mutation event to force the block to update.
                            Blockly.Events.fire(new Blockly.Events.BlockChange(caller, 'mutation', null, oldMutation, newMutation));

                            // For the definition, we also need to update all arguments that are
                            // used inside the function.
                            if (caller.id == definitionBlock.id) {
                                // First, build a map of oldArgName -> argId from the old mutation,
                                // and a map of argId -> newArgName from the new mutation.
                                var oldArgNamesToIds = Blockly.Functions.getArgMap(oldMutationDom);
                                var idsToNewArgNames = Blockly.Functions.getArgMap(newMutationDom, true);

                                // Then, go through all descendants of the function definition and
                                // look for argument reporters to update.
                                definitionBlock.getDescendants().forEach(function (d) {
                                    if (!Blockly.pxtBlocklyUtils.isFunctionArgumentReporter(d)) {
                                        return;
                                    }

                                    // Find the argument ID corresponding to this old argument name.
                                    var argName = d.getFieldValue('VALUE');
                                    var argId = oldArgNamesToIds[argName];

                                    if (!idsToNewArgNames[argId]) {
                                        // That arg ID no longer exists on the new mutation, delete this
                                        // arg reporter.
                                        d.dispose();
                                    } else if (idsToNewArgNames[argId] !== argName) {
                                        // That arg ID still exists, but the name was changed, so update
                                        // this reporter's display text.
                                        d.setFieldValue(idsToNewArgNames[argId], 'VALUE');
                                    }
                                });
                            } else {
                                // For the callers, we need to bump blocks that were connected to any
                                // argument that has since been deleted.
                                setTimeout(function () {
                                    caller.bumpNeighbours();
                                }, Blockly.BUMP_DELAY);
                            }
                        }

                    })
                }

                Blockly.Events.setGroup(false);
            } else {
                console.warn('Attempted to change function ' + name + ', but no definition block was found on the workspace');
            }

        }
        catch (e) {
            core.warningNotification(`Function: ${name} failed to load`)
            console.error("Error happened with stack",e);
        }

        console.warn("done");

    };


    console.warn(`mainthread/ start running controller`)
    addFrameImageBlock()
    disableServiceWorkser()
    startCloudConnection()
    processSearchParams()
    attachHotkey()
    deleteImageFrames()
    attachWorkspaceHandler()
    startTypeWarningSuppress()
    startServiceWorker()
    startHashlinkService()
    startProjectSaveService()
    startRecoveryService()

    setInterval(() => {
        
        window.app_tsx.showMiniSim(false)
    }, 4096)
    // add double click on background to act as connect button
    window.bgcs = []
    window.bgclock = false


    Blockly.getMainWorkspace().addChangeListener(async (change) => {
        /*
            Get the count of background click
            Get the event of enable and disable block interactive mode
        */

        if (change.type == 'click' && change.blockId == null) {
            console.log('push click evvent')
            bgcs.push(new Date().getTime())
        }
        if (change.type == 'click' && window.runningXml) {
            // if device is connected check here

            if (change.blockId == null && state_setInteractive == true) {
                await window.setInteractive(false)
            }
            else if (change.blockId != null && state_setInteractive == false) {
                await window.setInteractive(true)
            }
        }
        if (change.type == 'click' && change.blockId == null) {
            Blockly._hideChaff() //! workaround for resize event on Android cause bug
        }


    })


    // setInterval(async () => {
    //     // check to see within the last 1 seconds how many click was made 
    //     if (window.bgclock) return
    //     var count = 0
    //     var now = new Date().getTime()
    //     if (window.bgcs.length == 0) return

    //     // get the max of array
    //     var max = Math.max(...window.bgcs, 0)
    //     if (now - max < 350) return
    //     console.log('finalize', now - max, { now, max })

    //     var count = window.bgcs.length
    //     if (count) {
    //         console.log('count', count)
    //         window.bgclock = true
    //         try {

    //             window.bgcs = []
    //             if (count == 2) {
    //                 await window.actionConnectAndUpload()
    //             }
    //             // if (count == 3) {
    //             //     await window.setInteractive(!window.state_setInteractive)
    //             // }
    //             if (count > 4) {
    //                 await window.actionExitBoard()
    //             }
    //         }
    //         finally {
    //             window.bgclock = false
    //         }
    //     }
    //     window.bgcs = []


    // }, 100)





    setTimeout(async () => {
        while (window.editorToolbar_tsx === undefined) {
            await sleep(1000)
        }
        if (localStorage.getItem('wasInstalled') == 'true') {
            await modem.setButton({
                textButton: getStartText(),
                colorButton: 'green'
            })
        }
        else {
            await modem.setButton({
                textButton: getStartText(),
                colorButton: 'orange'
            })

        }

        setTimeout(async () => {
            /*
                when user go out to sketch view and in again, this extension is not run
                we must reset the state of the button
 
            */
            while (true) {
                await sleep(1000)
                // this is written somewhere in the core, but it is the default state
                if (editorToolbar_tsx.state.textButton == 'Upload') {
                    // reset the button by the options
                    await modem.setButton(modem.setButtonState)
                }
            }
        })

    }, 2000)
    
    setInterval(async () => {
        let req = await window.ipc('makecode.status', {
            timed: 30000,
            makecodeId: getMakeCodeId(),
            version: 1,
            modem: modem.metadata,
        })
    }, 30000);

    //# start intervals
    intervals.sketch_controller = setInterval(() => {
        // only save if there is blocks available
        if (Blockly.getMainWorkspace().getAllBlocks().length > 1) {
            window.saveProjectAsync()
        }
        else {
            console.warn('saveProjectAsync, ignore, no blocks')
        }
    }, 5000)
    intervals.block_disabler = setInterval(routineBlockDisabler, 1000)
    intervals.webcam_manager = setInterval(routinWebcamManager, 1000)

    //# start event trigger
    Blockly.getMainWorkspace().addChangeListener(async (event) => {
        // console.log('event', event)
        // window.event = event
        if (event.type == 'selected') {
            await window.generate_code({ target: ['micropython'] })
        }
    })

    window.GaraBlockExtensionReady = true
    window.state_setInteractive = false
    window.state_setBlockDelay = 0

}
setTimeout(async () => {
    await mainthread()
}, 1)