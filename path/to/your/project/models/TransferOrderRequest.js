class TransferOrderRequest {
  constructor({
    fromAccountRefId,
    beneficiaryId,
    newPayeeNameEn,
    newPayeeNameTh,
    newPayeeNickname,
    newPayeeBankName,
    newPayeeBankCode,
    newPayeeAccountNo,
    promptpayId,
    promptpayBeneficiaryNameEn,
    promptpayBeneficiaryNameTh,
    promptpayBeneficiaryNickname,
    toAccountRefId,
    isSaveAsBeneficiary
  }) {
    this.fromAccountRefId = fromAccountRefId;
    this.beneficiaryId = beneficiaryId;
    this.newPayeeNameEn = newPayeeNameEn;
    this.newPayeeNameTh = newPayeeNameTh;
    this.newPayeeNickname = newPayeeNickname;
    this.newPayeeBankName = newPayeeBankName;
    this.newPayeeBankCode = newPayeeBankCode;
    this.newPayeeAccountNo = newPayeeAccountNo;
    this.promptpayId = promptpayId;
    this.promptpayBeneficiaryNameEn = promptpayBeneficiaryNameEn;
    this.promptpayBeneficiaryNameTh = promptpayBeneficiaryNameTh;
    this.promptpayBeneficiaryNickname = promptpayBeneficiaryNickname;
    this.toAccountRefId = toAccountRefId;
    this.isSaveAsBeneficiary = isSaveAsBeneficiary;
  }

  getNewPayeeBankCode() {
    return this.newPayeeBankCode;
  }

  getPromptpayId() {
    return this.promptpayId;
  }

  getToAccountRefId() {
    return this.toAccountRefId;
  }

  equals(obj) {
    if (this === obj) return true;
    if (!(obj instanceof TransferOrderRequest)) return false;

    return (
      this.fromAccountRefId === obj.fromAccountRefId &&
      this.beneficiaryId === obj.beneficiaryId &&
      this.newPayeeNameEn === obj.newPayeeNameEn &&
      this.newPayeeNameTh === obj.newPayeeNameTh &&
      this.newPayeeNickname === obj.newPayeeNickname &&
      this.newPayeeBankName === obj.newPayeeBankName &&
      this.newPayeeBankCode === obj.newPayeeBankCode &&
      this.newPayeeAccountNo === obj.newPayeeAccountNo &&
      this.promptpayId === obj.promptpayId &&
      this.promptpayBeneficiaryNameEn === obj.promptpayBeneficiaryNameEn &&
      this.promptpayBeneficiaryNameTh === obj.promptpayBeneficiaryNameTh &&
      this.promptpayBeneficiaryNickname === obj.promptpayBeneficiaryNickname &&
      this.toAccountRefId === obj.toAccountRefId &&
      this.isSaveAsBeneficiary === obj.isSaveAsBeneficiary
    );
  }

  hashCode() {
    let result = 1;
    result = 31 * result + (this.fromAccountRefId ? this.fromAccountRefId.hashCode() : 0);
    result = 31 * result + (this.beneficiaryId ? this.beneficiaryId.hashCode() : 0);
    result = 31 * result + (this.newPayeeNameEn ? this.newPayeeNameEn.hashCode() : 0);
    result = 31 * result + (this.newPayeeNameTh ? this.newPayeeNameTh.hashCode() : 0);
    result = 31 * result + (this.newPayeeNickname ? this.newPayeeNickname.hashCode() : 0);
    result = 31 * result + (this.newPayeeBankName ? this.newPayeeBankName.hashCode() : 0);
    result = 31 * result + (this.newPayeeBankCode ? this.newPayeeBankCode.hashCode() : 0);
    result = 31 * result + (this.newPayeeAccountNo ? this.newPayeeAccountNo.hashCode() : 0);
    result = 31 * result + (this.promptpayId ? this.promptpayId.hashCode() : 0);
    result = 31 * result + (this.promptpayBeneficiaryNameEn ? this.promptpayBeneficiaryNameEn.hashCode() : 0);
    result = 31 * result + (this.promptpayBeneficiaryNameTh ? this.promptpayBeneficiaryNameTh.hashCode() : 0);
    result = 31 * result + (this.promptpayBeneficiaryNickname ? this.promptpayBeneficiaryNickname.hashCode() : 0);
    result = 31 * result + (this.toAccountRefId ? this.toAccountRefId.hashCode() : 0);
    result = 31 * result + (this.isSaveAsBeneficiary ? this.isSaveAsBeneficiary.hashCode() : 0);
    return result;
  }

  toString() {
    return `TransferOrderRequest(fromAccountRefId=${this.fromAccountRefId}, beneficiaryId=${this.beneficiaryId}, newPayeeNameEn=${this.newPayeeNameEn}, newPayeeNameTh=${this.newPayeeNameTh}, newPayeeNickname=${this.newPayeeNickname}, newPayeeBankName=${this.newPayeeBankName}, newPayeeBankCode=${this.newPayeeBankCode}, newPayeeAccountNo=${this.newPayeeAccountNo}, promptpayId=${this.promptpayId}, promptpayBeneficiaryNameEn=${this.promptpayBeneficiaryNameEn}, promptpayBeneficiaryNameTh=${this.promptpayBeneficiaryNameTh}, promptpayBeneficiaryNickname=${this.promptpayBeneficiaryNickname}, toAccountRefId=${this.toAccountRefId}, isSaveAsBeneficiary=${this.isSaveAsBeneficiary})`;
  }
}

// Add a simple hashCode method to String prototype if not exists
if (!String.prototype.hashCode) {
  String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
      const char = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  };
}

module.exports = TransferOrderRequest;