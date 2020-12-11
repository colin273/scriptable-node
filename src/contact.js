class Contact {
  constructor() {
    this.identifier =  "";
    this.namePrefix = "";
    this.givenName = "";
    this.middleName = "";
    this.familyName = "";
    this.nickname = "";
    this.birthday = null;
    this.image = null;
    this.emailAddresses = [];
    this.phoneNumbers = [];
    this.postalAddresses = [];
    this.socialProfiles = [];
    this.note = "";
    this.urlAddresses = [];
    this.dates = [];
    this.organizationName = "";
    this.departmentName = "";
    this.jobTitle = "";
    
    let availableProperties = [];
    for (item of [
      "NamePrefix",
      "GiveName",
      "MiddleName",
      "FamilyName",
      "Nickname",
      "Birthday",
      "EmailAddresses",
      "PhoneNumbers",
      "PostalAddresses",
      "SocialProfiles",
      "Image",
      "Note",
      "URLAddresses",
      "OrganizationName",
      "DepartmentName",
      "JobTitle",
      "Dates"
    ]) {
      availableProperties.push(`is${item}Available`);
    }
    for (item of availableProperties) {
      Object.defineProperty(this, item, {value: true});
    }
  }

  static async all(containers) {
  }

  static async inGroups(groups) {
  }

  static add(contact, containerIdentifier) {
  }

  static update(contact) {
  }

  static delete(contact) {
  }

  static async persistChanges() {
  }
}

module.exports = Contact;