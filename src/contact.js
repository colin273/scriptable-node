class Contact {
  /**
   * @param {string} namePrefix 
   * @param {string} givenName
   * @param {string} middleName
   * @param {string} familyName
   * @param {string} nickname
   * @param {Date} birthday
   * @param {[string]} emailAddresses
   * @param {[string]} phoneNumbers
   * @param {[string]} postalAddresses
   * @param {[string]} socialProfiles
   * @param {string} note
   * @param {[string]} urlAddresses
   * @param {[any]} dates
   * @param {string} organizationName
   * @param {string} departmentName
   * @param {string} jobTitle
   */
  constructor(namePrefix, givenName, middleName, familyName, nickname, birthday, emailAddresses, phoneNumbers, postalAddresses, socialProfiles, note, urlAddresses, dates, organizationName, departmentName, jobTitle) {
    Object.defineProperty(this, "identifier", {
      value: ""
    });
    this.namePrefix = namePrefix;
    this.givenName = givenName;
    this.middleName = middleName;
    this.familyName = familyName;
    this.nickname = nickname;
    this.birthday = birthday;
    this.image = null;
    this.emailAddresses = emailAddresses;
    this.phoneNumbers = phoneNumbers;
    this.postalAddresses = postalAddresses;
    this.socialProfiles = socialProfiles;
    this.note = note;
    this.urlAddresses = urlAddresses;
    this.dates = dates;
    this.organizationName = organizationName;
    this.departmentName = departmentName;
    this.jobTitle = jobTitle;
    
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