document.addEventListener('DOMContentLoaded', function () {
    var profilePicInput = document.getElementById('profile-pic');
    var profilePicPreview = document.getElementById('profile-pic-preview');
    var generateResumeButton = document.getElementById('generate-resume');
    var resumePreview = document.getElementById('resume-preview');
    var resumeContent = document.getElementById('resume-content');
    // Function to handle profile picture preview
    profilePicInput.addEventListener('change', function () {
        var _a;
        var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profilePicPreview.src = reader_1.result;
                profilePicPreview.style.display = 'block';
            };
            reader_1.readAsDataURL(file);
        }
        else {
            profilePicPreview.style.display = 'none';
        }
    });
    // Function to generate resume
    generateResumeButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var workExperience = document.getElementById('work-experience').value;
        var profilePicSrc = profilePicPreview.src;
        if (name && email && phone && education && skills && workExperience) {
            resumeContent.innerHTML = "\n        ".concat(profilePicSrc ? "<img src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture\" style=\"max-width: 150px; height: auto;\">") : '', "\n        <h2 contenteditable=\"true\">").concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3 contenteditable=\"true\">Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3 contenteditable=\"true\">Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <h3 contenteditable=\"true\">Work Experience</h3>\n        <p contenteditable=\"true\">").concat(workExperience, "</p>\n      ");
            // Make sure all elements are editable
            resumeContent.querySelectorAll('[contenteditable]').forEach(function (element) {
                element.contentEditable = 'true';
            });
            resumePreview.style.display = 'block';
        }
        else {
            alert('Please fill out all fields.');
        }
    });
});
