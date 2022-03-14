const ContactsContainer = require('./contacts-container');
const ContactsGroup = require('./contacts-group');

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

  /**
   * @param {[ContactsContainer]} containers
   * @returns {Promise<[Contact]>} - Promise that provides the contacts when fulfilled.
   */
  static async all(containers) {
    return this.all(containers)
  }

  /**
   * @param {[ContactsGroup]} groups
   * @returns {Promise<[Contact]>} - Promise that provides the contacts when fulfilled.
   */
  static async inGroups(groups) {
    return this.inGroups(groups)
  }

  /**
   * @param {Contact} contact
   * @param {string} containerIdentifier
   */
  static add(contact, containerIdentifier) {
    return this.add(contact, containerIdentifier)
  }

  /**
   * @param {Contact} contact
   */
  static update(contact) {
    return this.update(contact)
  }

  /**
   * @param {Contact} contact
   */
  static delete(contact) {
    return this.delete(contact)
  }

  /**
   * @returns {Promise} - Promise that fulfills when the changes have been persisted. The promise carries no value.
   */
  static async persistChanges() {
  }
}

module.exports = Contact;