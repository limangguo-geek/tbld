document.addEventListener("DOMContentLoaded", () => {
    const links = [
        "https://v1.miaolianyun.sbs/#/register",
        "https://v1.miaolianyun.icu/#/register",
        "https://v1.miaolianyun.buzz/#/register"
    ];

    // Function to copy coupon code
    const copyToClipboard = () => {
        const copyText = document.getElementById("couponCode");
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                alert("已复制优惠券码: " + copyText.value);
            })
            .catch(err => {
                alert("复制失败: " + err);
            });
    }

    // Function to show the modal with links
    const showLinks = () => {
        const modal = document.getElementById("linkModal");
        const linkContainer = document.getElementById("linkContainer");

        // Clear previous links
        linkContainer.innerHTML = '';

        // Add new links
        links.forEach(url => {
            const linkElement = document.createElement("a");
            linkElement.href = url;
            linkElement.target = "_blank";
            linkElement.textContent = url;
            linkElement.className = "link-item";
            linkContainer.appendChild(linkElement);
        });

        modal.style.display = "flex";
    }

    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById("linkModal");
        modal.style.display = "none";
    }

    // Close modal if clicking outside of it
    window.onclick = event => {
        const modal = document.getElementById("linkModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Attach event listeners
    document.querySelector('.copy-button').addEventListener('click', copyToClipboard);
    document.querySelector('.register-button').addEventListener('click', showLinks);
    document.querySelector('.show-links-button').addEventListener('click', showLinks); // Button to trigger modal
    document.querySelector('.close').addEventListener('click', closeModal);
});
