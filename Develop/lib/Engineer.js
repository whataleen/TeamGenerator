// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, githubProfile) {
        super(name, id, email);
        this.githubProfile = githubProfile;
    }
}


//github  // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

