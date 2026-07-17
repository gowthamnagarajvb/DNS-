document.addEventListener('DOMContentLoaded', function () {
    const enquiryForm = document.querySelector('.enquiry-form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            // Collect form data
            const studentName = document.getElementById('student-name').value;
            const parentName = document.getElementById('parent-name').value;
            const mobile = document.getElementById('mobile').value;
            const email = document.getElementById('email').value;
            const grade = document.getElementById('class-select').value;

            // Construct email body
            const subject = `New Admission Enquiry: ${studentName}`;
            const body = `
New Admission Enquiry Details:

Academic Year: 2026-2027
Student Name: ${studentName}
Parent Name: ${parentName}
Mobile Number: ${mobile}
Email Address: ${email}
Class: ${grade}

--------------------------------------------------
Sent from Discovery National School Website
            `.trim();

            // Create WhatsApp link with formatted bold text
            const whatsappBody = `*New Admission Enquiry*\n\n` +
                                 `*Academic Year:* 2026-2027\n` +
                                 `*Student Name:* ${studentName}\n` +
                                 `*Parent Name:* ${parentName}\n` +
                                 `*Mobile Number:* ${mobile}\n` +
                                 `*Email Address:* ${email}\n` +
                                 `*Class:* ${grade}`;
            const whatsappLink = `https://wa.me/919611644399?text=${encodeURIComponent(whatsappBody)}`;

            // Open WhatsApp in new tab
            window.open(whatsappLink, '_blank');

            // Submit directly to Web3Forms in the background
            const formData = {
                access_key: 'e8dbd0e6-ac2d-407d-99dd-125417e08846',
                subject: subject,
                from_name: parentName,
                email: email,
                message: body
            };

            const submitBtn = enquiryForm.querySelector('button[type="submit"]') || enquiryForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitting...';
            }

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    showCustomAlert("Thank you!", "Your admission enquiry has been submitted successfully.", "success");
                    enquiryForm.reset();
                } else {
                    showCustomAlert("Submission Failed", json.message || "Submission failed. Please try again.", "error");
                }
            })
            .catch(error => {
                console.error(error);
                showCustomAlert("Connection Error", "Failed to submit enquiry. Please check your internet connection.", "error");
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            });
        });
    }

    // Virtual Campus Tour Video Logic
    const videoCover = document.getElementById('video-cover');
    const campusVideo = document.getElementById('campus-video');

    if (videoCover && campusVideo) {
        // Play video on cover click
        videoCover.addEventListener('click', function () {
            videoCover.style.display = 'none';
            campusVideo.play();
        });

        // Revert to cover when video ends
        campusVideo.addEventListener('ended', function () {
            campusVideo.pause();
            campusVideo.currentTime = 0;
            videoCover.style.display = 'flex';
        });
    }

    // Popup Enquiry Form Logic
    const popupOverlay = document.getElementById('enquiry-popup');
    const closePopupBtn = document.querySelector('.close-popup');
    const popupForm = document.getElementById('popup-enquiry-form');

    if (popupOverlay) {
        // Show popup after 5 seconds
        setTimeout(() => {
            popupOverlay.classList.add('show');
        }, 5000);

        // Close popup on close button click
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                popupOverlay.classList.remove('show');
            });
        }

        // Close popup on clicking outside content
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });

        // Handle Popup Form Submission
        if (popupForm) {
            popupForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Collect form data
                const studentName = document.getElementById('popup-student-name').value;
                const parentName = document.getElementById('popup-parent-name').value;
                const mobile = document.getElementById('popup-mobile').value;
                const email = document.getElementById('popup-email').value;
                const grade = document.getElementById('popup-class-select').value;

                // Construct email body
                const subject = `New Admission Enquiry (Popup): ${studentName}`;
                const body = `
New Admission Enquiry Details (Popup):

Academic Year: 2026-2027
Student Name: ${studentName}
Parent Name: ${parentName}
Mobile Number: ${mobile}
Email Address: ${email}
Class: ${grade}

--------------------------------------------------
Sent from Discovery National School Website
                `.trim();

                // Create WhatsApp link with formatted bold text
                const whatsappBody = `*New Admission Enquiry (Popup)*\n\n` +
                                     `*Academic Year:* 2026-2027\n` +
                                     `*Student Name:* ${studentName}\n` +
                                     `*Parent Name:* ${parentName}\n` +
                                     `*Mobile Number:* ${mobile}\n` +
                                     `*Email Address:* ${email}\n` +
                                     `*Class:* ${grade}`;
                const whatsappLink = `https://wa.me/919611644399?text=${encodeURIComponent(whatsappBody)}`;

                // Open WhatsApp in new tab
                window.open(whatsappLink, '_blank');

                // Submit directly to Web3Forms in the background
                const formData = {
                    access_key: 'e8dbd0e6-ac2d-407d-99dd-125417e08846',
                    subject: subject,
                    from_name: parentName,
                    email: email,
                    message: body
                };

                const submitBtn = popupForm.querySelector('button[type="submit"]') || popupForm.querySelector('.btn-submit');
                const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Submitting...';
                }

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        showCustomAlert("Thank you!", "Your admission enquiry has been submitted successfully.", "success");
                        popupForm.reset();
                        popupOverlay.classList.remove('show');
                    } else {
                        showCustomAlert("Submission Failed", json.message || "Submission failed. Please try again.", "error");
                    }
                })
                .catch(error => {
                    console.error(error);
                    showCustomAlert("Connection Error", "Failed to submit enquiry. Please check your internet connection.", "error");
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    }
                });
            });
        }
    }

    // Hero background slider
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-slide');
    if (slider && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Set the width of the slider dynamically
        slider.style.width = `${totalSlides * 100}%`;
        slides.forEach(slide => {
            slide.style.width = `${100 / totalSlides}%`;
        });
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            slider.style.transform = `translateX(-${(currentSlide * 100) / totalSlides}%)`;
        }, 3000);
    }
});

// Custom Success/Error Alert Modal Function
function showCustomAlert(title, message, type = 'success') {
    // Check if the modal already exists in DOM
    let modalOverlay = document.getElementById('custom-alert-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'custom-alert-overlay';
        modalOverlay.className = 'success-modal-overlay';
        
        const modalCard = document.createElement('div');
        modalCard.className = 'success-modal-card';
        
        const iconContainer = document.createElement('div');
        iconContainer.id = 'custom-alert-icon';
        
        const titleElement = document.createElement('h3');
        titleElement.id = 'custom-alert-title';
        titleElement.className = 'success-modal-title';
        
        const descElement = document.createElement('p');
        descElement.id = 'custom-alert-desc';
        descElement.className = 'success-modal-desc';
        
        const closeButton = document.createElement('button');
        closeButton.id = 'custom-alert-btn';
        closeButton.className = 'success-modal-btn';
        closeButton.textContent = 'Done';
        
        modalCard.appendChild(iconContainer);
        modalCard.appendChild(titleElement);
        modalCard.appendChild(descElement);
        modalCard.appendChild(closeButton);
        modalOverlay.appendChild(modalCard);
        document.body.appendChild(modalOverlay);
        
        // Close event
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            setTimeout(() => {
                if (modalOverlay.parentNode) {
                    modalOverlay.parentNode.removeChild(modalOverlay);
                }
            }, 300);
        };
        
        closeButton.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
    // Set content based on type
    const iconContainer = modalOverlay.querySelector('#custom-alert-icon');
    const titleElement = modalOverlay.querySelector('#custom-alert-title');
    const descElement = modalOverlay.querySelector('#custom-alert-desc');
    const closeButton = modalOverlay.querySelector('#custom-alert-btn');
    
    if (type === 'success') {
        iconContainer.className = 'success-modal-icon success';
        iconContainer.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        closeButton.style.backgroundColor = 'var(--primary-color)';
        closeButton.textContent = 'Done';
    } else {
        iconContainer.className = 'success-modal-icon error';
        iconContainer.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        closeButton.style.backgroundColor = '#dc2626';
        closeButton.textContent = 'Dismiss';
    }
    
    titleElement.textContent = title;
    descElement.textContent = message;
    
    // Trigger paint and show modal
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
}
