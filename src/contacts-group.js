class ContactsGroup {
  constructor() {
    this.name = "";
    Object.defineProperty(this, "_contacts", {
      value: [],
      writable: true
    });
  }

  static async all(containers) {
    let contacts = [];
    for (c of containers) {
      // Retrieve all contacts and append them to the contacts array
    }
    return contacts;
  }

  addMember(contact) {
    this._contacts.push(contact);
  }

  removeMember(contact) {
    this._contacts.splice(this._contacts.indexOf(contact), 1);
  }

  static add(group, containerIdentifier) {
  }

  static update(group) {
  }

  static delete(group) {
  }
}

module.exports = ContactsGroup;