// Predefined list of certificate files
const certificateFiles = [
    "Microservices Fundamentals-devops-microservices-coursera.pdf",
    "Algorithms on Graphs-algorithms-graphs-coursera.pdf",
    "Linux Server Management and Security-linux-security-coursera.pdf",
    "Databases and SQL for Data Science with Python-sql-python-db-coursera.pdf",
    "Using Databases with Python-python-db-sql-coursera.pdf",
    "Introduction to TCP:IP-tcp:ip-networking-coursera.pdf",
    "Understanding Research Methods-Coursera.pdf",
    "Real Time Cyber Threat Detection and Mitigation-cyber-security-coursera.pdf",
    "Cyber Attack Countermeasures-cyber-security-coursera.pdf",
    "Enterprise and Infrastructure Security-cyber-security-coursera.pdf",
    "Data Management and Visualization-data-visualization-coursera.pdf"
];

const certifications = certificateFiles.map(file => {
    const parts = file.replace('.pdf', '').split('-');
    const title = parts[0].replace(/_/g, ' ');
    const tags = parts.slice(1).map(tag => tag.replace(/_/g, ' ')).join(', ');
    return {
        title: title,
        url: `certificates/Coursera/${file}`,
        tags: tags
    };
});

const searchInput = document.getElementById('searchInput');
const certificationsContainer = document.getElementById('certificationsContainer');

function displayCertifications(certifications) {
    certificationsContainer.innerHTML = '';
    certifications.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certification';
        certElement.innerHTML = `
<!--            <iframe src="${cert.url}" class="cert-preview"></iframe>-->
            <div class="cert-info">
                <a href="${cert.url}" target="_blank">${cert.title}</a>
                <p>${cert.tags}</p>
            </div>
        `;
        certificationsContainer.appendChild(certElement);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCertifications = certifications.filter(cert =>
        cert.title.toLowerCase().includes(searchTerm) ||
        cert.tags.toLowerCase().includes(searchTerm)
    );
    displayCertifications(filteredCertifications);
});

displayCertifications(certifications);