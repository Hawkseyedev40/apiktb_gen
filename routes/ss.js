"use strict";
(self.webpackChunkcorp_portal = self.webpackChunkcorp_portal || []).push([
    [1750, 3970, 3387],
    {
        3387: ($, C, u) => {
            u.d(C, { HI: () => h, Z: () => f.Z });
            var o = u(4773),
                p = u(93953);
            let h = (() => {
                class I {
                    constructor(d) {
                        this.requestService = d;
                    }
                    getPayeeFundList(d) {
                        return this.requestService.send(
                            "GET",
                            `v1/account/fcd/payee-funds${d}`
                        );
                    }
                    postFcdDomesticTransferOrder(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders",
                            d
                        );
                    }
                    getFcdOrderDetail(d) {
                        return this.requestService.send(
                            "GET",
                            `v2/fcd-domestic-transfer/orders/${d}`
                        );
                    }
                    deleteFcdOrderReset(d) {
                        return this.requestService.send(
                            "POST",
                            `v1/fcd-domestic-transfer/orders/${d}/reset`
                        );
                    }
                    getFcdPayerFundsAccountList(d) {
                        return this.requestService.send(
                            "GET",
                            "v1/account/fcd/payer-funds",
                            null,
                            d
                        );
                    }
                    getFcdInitialization(d) {
                        return this.requestService.send(
                            "GET",
                            "v1/fcd-domestic-transfer/initialization",
                            null,
                            d
                        );
                    }
                    postFcdOrderVerification(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/verification",
                            d
                        );
                    }
                    postFcdOrdersSubmission(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/submission",
                            d
                        );
                    }
                    postFcdOrdersPreConfirmation(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/pre-confirmation",
                            d
                        );
                    }
                    postFcdOrdersConfirmation(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/confirmation",
                            d
                        );
                    }
                    postFcdOrdersCounterRateAcceptance(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/counter-rate/acceptance",
                            d
                        );
                    }
                    postFcdInstrcutionFinalApprovalConfirmation(d) {
                        return this.requestService.send(
                            "POST",
                            `v1/fcd-domestic-transfer/instructions/${d}/final-approval/confirmation`
                        );
                    }
                    getFcdOrderDraftFilterOptions() {
                        return this.requestService.send(
                            "GET",
                            "v1/fcd-domestic-transfer/orders/drafts/filter-options"
                        );
                    }
                    getFcdOrderDraftList(d) {
                        return this.requestService.send(
                            "GET",
                            "v2/fcd-domestic-transfer/orders/drafts",
                            null,
                            d
                        );
                    }
                    onDeleteFcdOrders(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/orders/deletion",
                            d
                        );
                    }
                    getFcdForwardDealsList(d) {
                        return this.requestService.send(
                            "GET",
                            "v1/fcd-domestic-transfer/forward-deals",
                            null,
                            d
                        );
                    }
                    postFcdCounterRate(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/counter-rate",
                            d
                        );
                    }
                    putFcdOrderDetails(d, t) {
                        return this.requestService.send(
                            "PUT",
                            `v1/fcd-domestic-transfer/orders/${t}`,
                            d
                        );
                    }
                    postFcdPayerFundsInquiry(d) {
                        return this.requestService.send(
                            "POST",
                            "v1/fcd-domestic-transfer/payee-funds/external/inquiry",
                            { accountNo: d }
                        );
                    }
                    getLookupFcdFBanks(d) {
                        return this.requestService.send(
                            "GET",
                            "v1/lookup/fcd/banks",
                            null,
                            d
                        );
                    }
                    postFcdAccountCurrencyValidation(d) {
                        return this.requestService.send(
                            "POST",
                            `v1/fcd-domestic-transfer/account/${d}/currency-validation`
                        );
                    }
                    getFcdLookupSwiftInquiry(d) {
                        return this.requestService.send(
                            "GET",
                            `v1/lookup/fcd/swift-inquiry${d}`
                        );
                    }
                    postFcdFeeInquiry(d, t) {
                        return this.requestService.send(
                            "POST",
                            `v1/fcd-domestic-transfer/orders/${d}/fee-inquiry`,
                            t
                        );
                    }
                    static {
                        this.ɵfac = function (t) {
                            return new (t || I)(p.KVO(o.B));
                        };
                    }
                    static {
                        this.ɵprov = p.jDH({
                            token: I,
                            factory: I.ɵfac,
                            providedIn: "root",
                        });
                    }
                }
                return I;
            })();
            var f = u(42089);
        },
        42089: ($, C, u) => {
            u.d(C, { Z: () => o });
            var o = (function (p) {
                return (
                    (p.DEFAULT = "DEFAULT"),
                    (p.CONFIRM_WITH_TIMER = "CONFIRM_WITH_TIMER"),
                    (p.CONFIRM_WITHOUT_TIMER = "CONFIRM_WITHOUT_TIMER"),
                    p
                );
            })(o || {});
        },
        62004: ($, C, u) => {
            u.r(C), u.d(C, { AccountEnquiryModule: () => Hn });
            var o = u(60177),
                p = u(41780),
                h = u(81564),
                f = u(14197),
                I = u(10823),
                P = u(12791),
                d = u(73),
                t = u(93953);
            let G = (() => {
                class l {
                    constructor(e) {
                        (this.facade = e), this.facade.setInitialized();
                    }
                    ngOnDestroy() {
                        this.facade.resetStore();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(d.j));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-module-account-enquiry"]],
                            decls: 1,
                            vars: 0,
                            template: function (a, n) {
                                1 & a && t.nrm(0, "router-outlet");
                            },
                            dependencies: [P.n3],
                            encapsulation: 2,
                        });
                    }
                }
                return l;
            })();
            var g = u(74523),
                _ = u(89417),
                M = u(84914),
                b = u(65113),
                c = u(6327),
                k = u(72036),
                j = u(15981),
                W = u(57003),
                lt = u(8393),
                F = u(48139),
                Y = u(43342),
                v = u(94267),
                y = u(11807),
                ot = u(19720),
                E = u(83893),
                rt = u(90274),
                z = u(73073),
                st = u(13772),
                X = u(73722),
                Z = u(95190),
                tt = u(97166),
                ct = u(45544),
                ut = u(14425);
            function dt(l, s) {
                if (
                    (1 & l && (t.j41(0, "ui-select-option", 18), t.EFF(1), t.k0s()),
                        2 & l)
                ) {
                    const e = s.$implicit;
                    t.FS9("id", "selected-file-type-" + e.id + "-" + s.index),
                        t.Y8G("value", e.id)("label", e.name),
                        t.R7$(),
                        t.SpI(" ", e.name, " ");
                }
            }
            let pt = (() => {
                class l extends st.M {
                    constructor(e, a, n, i, r) {
                        super(),
                            (this.fb = e),
                            (this.facade = a),
                            (this.accountEnquiryService = n),
                            (this.dialogRef = i),
                            (this.dialogData = r),
                            (this.size = h.BC.Default),
                            (this.showCloseBtn = !0),
                            (this.disabledBtn = !0),
                            (this.formGroup = this.fb.group({
                                selectedFileType: ["", _.k0.required],
                                sendToEmail: [""],
                                download: [""],
                            })),
                            (this.constants = {
                                dialogTitle: "account_enquiry_dropdown_select_format_title",
                                dialogRemark: "account_enquiry_dropdown_format_remark",
                                fileFormatLabel: "account_enquiry_dropdown_file_format_label",
                                fileFormatPlaceholder:
                                    "account_enquiry_dropdown_file_format_placeholder",
                                sendToEmailChkboxText:
                                    "account_enquiry_dropdown_send_copy_checkbox",
                                downloadChkboxText:
                                    "account_enquiry_dropdown_download_copy_checkbox",
                                warningRemark: "account_enquiry_dropdown_remark",
                                requestBtnText: "account_enquiry_dropdown_request_button",
                            });
                    }
                    ngOnInit() {
                        this.getFileType(),
                            (this.accEnquiryParam = this.dialogData?.bodyParam),
                            this.observe(this.formGroup.valueChanges, (e) => {
                                this.disabledBtn = !0 !== e.sendToEmail && !0 !== e.download;
                                const a = (0, j.A)(
                                    {
                                        fileType: e.selectedFileType,
                                        isSendEmail: e.sendToEmail,
                                        isDownload: e.download,
                                    },
                                    W.A
                                );
                                this.getBodyParam(a);
                            });
                    }
                    getFileType() {
                        var e = this;
                        return (0, g.A)(function* () {
                            e.data = yield e.facade.getExportFileType();
                        })();
                    }
                    getBodyParam(e) {
                        return (
                            (this.exportBodyParam = { ...this.accEnquiryParam, ...e }),
                            this.accountEnquiryService.setExportTransactionHistParam(
                                this.exportBodyParam
                            ),
                            this.exportBodyParam
                        );
                    }
                    onExport() {
                        this.facade.postExportTransactionHistory(this.exportBodyParam),
                            this.dialogRef.close();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(_.ze),
                                t.rXU(d.j),
                                t.rXU(E.e),
                                t.rXU(z.CP),
                                t.rXU(z.Vh)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-dialog-export"]],
                            features: [t.Vt3],
                            decls: 34,
                            vars: 29,
                            consts: [
                                [
                                    "id",
                                    "dialog_export",
                                    1,
                                    "dialog-export",
                                    3,
                                    "size",
                                    "showCloseBtn",
                                ],
                                ["dialog-slot-header", ""],
                                [1, "header-title"],
                                [1, "header-body"],
                                [
                                    "dialog-slot-content",
                                    "",
                                    1,
                                    "dialog-export-content-container",
                                ],
                                [1, "content-label"],
                                [3, "formGroup"],
                                [1, "content-ddown"],
                                ["formControlName", "selectedFileType", 3, "placeholderText"],
                                [
                                    "class",
                                    "export-type-option",
                                    3,
                                    "value",
                                    "label",
                                    "id",
                                    4,
                                    "ngFor",
                                    "ngForOf",
                                ],
                                [1, "content-chkbox"],
                                ["formControlName", "sendToEmail"],
                                [1, "pad-r-24"],
                                ["formControlName", "download"],
                                [1, "content-note"],
                                ["dialog-slot-footer", ""],
                                [1, "footer-btn"],
                                ["uiButton", "", 3, "click", "disabled"],
                                [1, "export-type-option", 3, "value", "label", "id"],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    (t.j41(0, "ui-dialog-base", 0)(1, "header", 1)(2, "div", 2),
                                        t.EFF(3),
                                        t.nI1(4, "translate"),
                                        t.k0s(),
                                        t.j41(5, "div", 3),
                                        t.EFF(6),
                                        t.nI1(7, "translate"),
                                        t.k0s()(),
                                        t.j41(8, "section", 4)(9, "div", 5),
                                        t.EFF(10),
                                        t.nI1(11, "translate"),
                                        t.k0s(),
                                        t.j41(12, "form", 6)(13, "div", 7)(14, "ui-select", 8),
                                        t.nI1(15, "translate"),
                                        t.DNE(16, dt, 2, 4, "ui-select-option", 9),
                                        t.k0s()(),
                                        t.j41(17, "div", 10)(18, "ui-checkbox", 11)(19, "span", 12),
                                        t.EFF(20),
                                        t.nI1(21, "translate"),
                                        t.k0s()(),
                                        t.j41(22, "ui-checkbox", 13)(23, "span"),
                                        t.EFF(24),
                                        t.nI1(25, "translate"),
                                        t.k0s()()()(),
                                        t.j41(26, "div", 14),
                                        t.EFF(27),
                                        t.nI1(28, "translate"),
                                        t.k0s()(),
                                        t.j41(29, "section", 15)(30, "div", 16)(31, "button", 17),
                                        t.bIt("click", function () {
                                            return n.onExport();
                                        }),
                                        t.EFF(32),
                                        t.nI1(33, "translate"),
                                        t.k0s()()()()),
                                    2 & a &&
                                    (t.Y8G("size", n.size)("showCloseBtn", n.showCloseBtn),
                                        t.R7$(3),
                                        t.SpI(" ", t.bMT(4, 13, n.constants.dialogTitle), " "),
                                        t.R7$(3),
                                        t.SpI(" ", t.bMT(7, 15, n.constants.dialogRemark), " "),
                                        t.R7$(4),
                                        t.SpI(" ", t.bMT(11, 17, n.constants.fileFormatLabel), " "),
                                        t.R7$(2),
                                        t.Y8G("formGroup", n.formGroup),
                                        t.R7$(2),
                                        t.Y8G(
                                            "placeholderText",
                                            t.bMT(15, 19, n.constants.fileFormatPlaceholder)
                                        ),
                                        t.R7$(2),
                                        t.Y8G("ngForOf", null == n.data ? null : n.data.fileTypes),
                                        t.R7$(4),
                                        t.JRh(t.bMT(21, 21, n.constants.sendToEmailChkboxText)),
                                        t.R7$(4),
                                        t.JRh(t.bMT(25, 23, n.constants.downloadChkboxText)),
                                        t.R7$(3),
                                        t.SpI(" ", t.bMT(28, 25, n.constants.warningRemark), " "),
                                        t.R7$(4),
                                        t.Y8G("disabled", !n.formGroup.valid || n.disabledBtn),
                                        t.R7$(),
                                        t.SpI(" ", t.bMT(33, 27, n.constants.requestBtnText), " "));
                            },
                            dependencies: [
                                o.Sq,
                                X.Q,
                                _.qT,
                                _.BC,
                                _.cb,
                                Z.w,
                                tt.F,
                                ct.P,
                                ut.p,
                                _.j4,
                                _.JD,
                                p.D9,
                            ],
                            styles: [
                                ".dialog-export[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:2rem;line-height:1.2857142857;font-weight:700;margin-bottom:8px}.dialog-export[_ngcontent-%COMP%]   .header-body[_ngcontent-%COMP%]{font-size:1rem;line-height:1.4285714286;font-weight:400;margin-bottom:24px;color:#4a4a49}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]{padding:0 57px 40px 0}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]   .content-label[_ngcontent-%COMP%]{font-size:1rem;line-height:1.4285714286;font-weight:700;margin-bottom:4px}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]   .content-ddown[_ngcontent-%COMP%]   ui-select[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:400;color:#8ea2b7}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]   .content-chkbox[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:400;color:#4a4a49;margin-top:24px;display:flex;flex-direction:row;flex-wrap:nowrap}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]   .content-chkbox[_ngcontent-%COMP%]   .pad-r-24[_ngcontent-%COMP%]{padding-right:24px}.dialog-export[_ngcontent-%COMP%]   .dialog-export-content-container[_ngcontent-%COMP%]   .content-note[_ngcontent-%COMP%]{margin-top:24px;font-size:1rem;line-height:1.4285714286;font-weight:400;color:#4a4a49}.dialog-export[_ngcontent-%COMP%]   .footer-btn[_ngcontent-%COMP%]{text-align:-webkit-right;text-align:end}.export-type-option[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-weight:400;font-size:1.1428571429rem;line-height:1.5;font-style:normal;color:#4a4a49}",
                            ],
                        });
                    }
                }
                return l;
            })();
            var et = u(83620),
                x = u(43526),
                V = u(8395),
                L = u(84760),
                H = u(4856),
                mt = u(11824),
                J = u(20728),
                S = u(27418);
            function gt(l, s) {
                1 & l &&
                    (t.j41(0, "div", 32)(1, "label", 33),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s()()),
                    2 & l &&
                    (t.R7$(2),
                        t.JRh(t.bMT(3, 1, "account_enquiry_current_primary_label")));
            }
            function ht(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0),
                            t.j41(1, "div", 3)(2, "div", 34)(3, "label", 6),
                            t.EFF(4),
                            t.nI1(5, "translate"),
                            t.k0s(),
                            t.j41(6, "h4", 29),
                            t.EFF(7),
                            t.nI1(8, "number"),
                            t.k0s()(),
                            t.j41(9, "div", 35)(10, "div", 5)(11, "label", 6),
                            t.EFF(12),
                            t.nI1(13, "translate"),
                            t.k0s(),
                            t.j41(14, "label", 6),
                            t.EFF(15),
                            t.nI1(16, "translate"),
                            t.k0s()(),
                            t.j41(17, "div", 5)(18, "label", 11),
                            t.EFF(19),
                            t.nI1(20, "number"),
                            t.k0s(),
                            t.j41(21, "label", 11),
                            t.EFF(22),
                            t.nI1(23, "number"),
                            t.k0s()(),
                            t.j41(24, "div", 36),
                            t.nrm(25, "div", 37),
                            t.k0s()()(),
                            t.bVm()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G("cols", 1)("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(
                                5,
                                17,
                                "account_enquiry_current_total_overdraft_limit_label"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            null === (null == e.data ? null : e.data.totalOverdraftLimit)
                                ? "-"
                                : t.i5U(
                                    8,
                                    19,
                                    null == e.data ? null : e.data.totalOverdraftLimit,
                                    "1.2-2"
                                ),
                            " ",
                            null === (null == e.data ? null : e.data.totalOverdraftLimit)
                                ? ""
                                : null == e.data
                                    ? null
                                    : e.data.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(13, 22, "account_enquiry_current_overdraft_spent_label")
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                16,
                                24,
                                "account_enquiry_current_available_overdraft_limit_label"
                            )
                        ),
                        t.R7$(4),
                        t.Lme(
                            "",
                            null === (null == e.data ? null : e.data.overdraftSpent)
                                ? "-"
                                : t.i5U(
                                    20,
                                    26,
                                    null == e.data ? null : e.data.overdraftSpent,
                                    "1.2-2"
                                ),
                            " ",
                            null === (null == e.data ? null : e.data.overdraftSpent)
                                ? ""
                                : null == e.data
                                    ? null
                                    : e.data.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            null === (null == e.data ? null : e.data.totalOverdraftLimit)
                                ? "-"
                                : t.i5U(
                                    23,
                                    29,
                                    null == e.data ? null : e.data.totalOverdraftLimit,
                                    "1.2-2"
                                ),
                            " ",
                            null === (null == e.data ? null : e.data.totalOverdraftLimit)
                                ? ""
                                : null == e.data
                                    ? null
                                    : e.data.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.xc7(
                            "width",
                            e.checkProgress(
                                null == e.data ? null : e.data.overdraftSpent,
                                null == e.data ? null : e.data.totalOverdraftLimit
                            ) + "%"
                        );
                }
            }
            let ft = (() => {
                class l {
                    constructor(e, a) {
                        (this.translate = e),
                            (this._decimalPipe = a),
                            (this.currencyIcon = f.VR);
                    }
                    ngOnInit() { }
                    checkProgress(e, a) {
                        const n = (e / a) * 100;
                        return n >= 100 ? 100 : n;
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(p.c$), t.rXU(o.QX));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-casa-top"]],
                            inputs: {
                                isPrimaryAccount: "isPrimaryAccount",
                                data: "data",
                                accountType: "accountType",
                            },
                            decls: 114,
                            vars: 130,
                            consts: [
                                ["id", "casa-blue-card", 1, "casa-blue-card-container"],
                                ["id", "casa-card-section", 1, "main-card"],
                                [1, "blue-card", "small"],
                                ["uiGrid", "", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "casa-account-name", 3, "cols", "gap"],
                                [1, "card-flex-display"],
                                [1, "card-label-bold"],
                                ["id", "casa-account-primary"],
                                ["class", "card-primary-border", 4, "ngIf"],
                                [1, "card-h4"],
                                ["uiGrid", "", "id", "casa-account-number", 3, "cols", "gap"],
                                [1, "card-body1"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-type",
                                    1,
                                    "height-52-px",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-label-bold", "height-20-px"],
                                ["uiGrid", "", "id", "casa-account-status", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "casa-account-currency", 3, "cols", "gap"],
                                [1, "card-body1", "currency-icon-group"],
                                [1, "currency-flag", 3, "name"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-branch-code",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-branch-name",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "divider-large"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-last-tranx-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "blue-card", "large"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-holding-limit",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-holding-cheque-clearing",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                ["uiGrid", "", "id", "casa-account-interest", 3, "cols", "gap"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-accrued-interest-receivable",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-accrued-interest-payable",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-available-balance",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-h4-label-golden-yellow"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-ledger-balance",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [4, "ngIf"],
                                [1, "card-primary-border"],
                                [1, "card-primary-label"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-total-overdraft-limit",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-overdraft-spent",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "progress-cont"],
                                [1, "progress"],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    (t.j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                                        4,
                                        "div",
                                        4
                                    )(5, "div", 5)(6, "label", 6),
                                        t.EFF(7),
                                        t.nI1(8, "translate"),
                                        t.k0s(),
                                        t.j41(9, "div", 7),
                                        t.DNE(10, gt, 4, 3, "div", 8),
                                        t.k0s()(),
                                        t.j41(11, "h4", 9),
                                        t.EFF(12),
                                        t.k0s()(),
                                        t.j41(13, "div", 3)(14, "div", 10)(15, "label", 6),
                                        t.EFF(16),
                                        t.nI1(17, "translate"),
                                        t.k0s(),
                                        t.j41(18, "p", 11),
                                        t.EFF(19),
                                        t.k0s()(),
                                        t.j41(20, "div", 12)(21, "label", 13),
                                        t.EFF(22),
                                        t.nI1(23, "translate"),
                                        t.k0s(),
                                        t.j41(24, "p", 11),
                                        t.EFF(25),
                                        t.k0s()()(),
                                        t.j41(26, "div", 3)(27, "div", 14)(28, "label", 6),
                                        t.EFF(29),
                                        t.nI1(30, "translate"),
                                        t.k0s(),
                                        t.j41(31, "p", 11),
                                        t.EFF(32),
                                        t.k0s()(),
                                        t.j41(33, "div", 15)(34, "label", 6),
                                        t.EFF(35),
                                        t.nI1(36, "translate"),
                                        t.k0s(),
                                        t.j41(37, "p", 16),
                                        t.EFF(38),
                                        t.nrm(39, "ui-icon", 17),
                                        t.k0s()()(),
                                        t.j41(40, "div", 3)(41, "div", 18)(42, "label", 6),
                                        t.EFF(43),
                                        t.nI1(44, "translate"),
                                        t.k0s(),
                                        t.j41(45, "p", 11),
                                        t.EFF(46),
                                        t.k0s()(),
                                        t.j41(47, "div", 19)(48, "label", 6),
                                        t.EFF(49),
                                        t.nI1(50, "translate"),
                                        t.k0s(),
                                        t.j41(51, "p", 11),
                                        t.EFF(52),
                                        t.k0s()()()(),
                                        t.nrm(53, "div", 20),
                                        t.j41(54, "div", 21)(55, "label", 6),
                                        t.EFF(56),
                                        t.nI1(57, "translate"),
                                        t.k0s(),
                                        t.j41(58, "p", 11),
                                        t.EFF(59),
                                        t.nI1(60, "date"),
                                        t.k0s()()(),
                                        t.j41(61, "div", 22)(62, "div", 3)(63, "div", 23)(
                                            64,
                                            "label",
                                            6
                                        ),
                                        t.EFF(65),
                                        t.nI1(66, "translate"),
                                        t.k0s(),
                                        t.j41(67, "p", 11),
                                        t.EFF(68),
                                        t.nI1(69, "number"),
                                        t.k0s()(),
                                        t.j41(70, "div", 24)(71, "label", 6),
                                        t.EFF(72),
                                        t.nI1(73, "translate"),
                                        t.k0s(),
                                        t.j41(74, "p", 11),
                                        t.EFF(75),
                                        t.nI1(76, "number"),
                                        t.k0s()(),
                                        t.nrm(77, "div"),
                                        t.j41(78, "div", 25)(79, "label", 6),
                                        t.EFF(80),
                                        t.nI1(81, "translate"),
                                        t.k0s(),
                                        t.j41(82, "p", 11),
                                        t.EFF(83),
                                        t.k0s()(),
                                        t.j41(84, "div", 26)(85, "label", 6),
                                        t.EFF(86),
                                        t.nI1(87, "translate"),
                                        t.k0s(),
                                        t.j41(88, "p", 11),
                                        t.EFF(89),
                                        t.nI1(90, "number"),
                                        t.k0s()(),
                                        t.j41(91, "div", 27)(92, "label", 6),
                                        t.EFF(93),
                                        t.nI1(94, "translate"),
                                        t.k0s(),
                                        t.j41(95, "p", 11),
                                        t.EFF(96),
                                        t.nI1(97, "number"),
                                        t.k0s()(),
                                        t.j41(98, "div", 28)(99, "label", 6),
                                        t.EFF(100),
                                        t.nI1(101, "translate"),
                                        t.k0s(),
                                        t.j41(102, "h4", 29),
                                        t.EFF(103),
                                        t.nI1(104, "number"),
                                        t.k0s()(),
                                        t.j41(105, "div", 30)(106, "label", 6),
                                        t.EFF(107),
                                        t.nI1(108, "translate"),
                                        t.k0s(),
                                        t.j41(109, "h4", 29),
                                        t.EFF(110),
                                        t.nI1(111, "number"),
                                        t.k0s()()(),
                                        t.nrm(112, "div", 20),
                                        t.DNE(113, ht, 26, 32, "ng-container", 31),
                                        t.k0s()()()),
                                    2 & a &&
                                    (t.R7$(3),
                                        t.Y8G("cols", 1)("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(3),
                                        t.JRh(
                                            t.bMT(8, 79, "account_enquiry_current_account_name_title")
                                        ),
                                        t.R7$(3),
                                        t.Y8G(
                                            "ngIf",
                                            null == n.data ? null : n.data.isPrimaryAccount
                                        ),
                                        t.R7$(2),
                                        t.JRh(null == n.data ? null : n.data.accountName),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                17,
                                                81,
                                                "account_enquiry_current_account_number_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.accountNo),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                23,
                                                83,
                                                "account_enquiry_current_account_type_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(" ", null == n.data ? null : n.data.accountType, " "),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(30, 85, "account_enquiry_current_status_label")
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.statusDescription),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(36, 87, "account_enquiry_current_currency_label")
                                        ),
                                        t.R7$(3),
                                        t.SpI(" ", null == n.data ? null : n.data.currency, " "),
                                        t.R7$(),
                                        t.Y8G(
                                            "name",
                                            n.currencyIcon[null == n.data ? null : n.data.currency]
                                        ),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(44, 89, "account_enquiry_current_branch_code_label")
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.branchCode),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(50, 91, "account_enquiry_current_branch_name_label")
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.branchName),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                57,
                                                93,
                                                "account_enquiry_current_last_transaction_date_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.lastTransactionDate)
                                                ? "-"
                                                : t.i5U(
                                                    60,
                                                    95,
                                                    null == n.data ? null : n.data.lastTransactionDate,
                                                    "dd LLL yyyy"
                                                ),
                                            " "
                                        ),
                                        t.R7$(3),
                                        t.Y8G("cols", "227px 227px 227px")("gap", "24px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                66,
                                                98,
                                                "account_enquiry_current_holding_limit_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null === (null == n.data ? null : n.data.holdLimit)
                                                ? "-"
                                                : t.i5U(
                                                    69,
                                                    100,
                                                    null == n.data ? null : n.data.holdLimit,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null === (null == n.data ? null : n.data.holdLimit)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                73,
                                                103,
                                                "account_enquiry_current_holding_cheque_clearing_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.holdChequeClearing)
                                                ? "-"
                                                : t.i5U(
                                                    76,
                                                    105,
                                                    null == n.data ? null : n.data.holdChequeClearing,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.holdChequeClearing)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(3),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                81,
                                                108,
                                                "account_enquiry_current_interest_rate_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            null === (null == n.data ? null : n.data.interestRate)
                                                ? "-"
                                                : 0 === (null == n.data ? null : n.data.interestRate)
                                                    ? "0.00%"
                                                    : (null == n.data ? null : n.data.interestRate) + "%",
                                            " "
                                        ),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                87,
                                                110,
                                                "account_enquiry_current_interest_receivable_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null ===
                                                (null == n.data
                                                    ? null
                                                    : n.data.accruedInterestReceivable)
                                                ? "-"
                                                : t.i5U(
                                                    90,
                                                    112,
                                                    null == n.data
                                                        ? null
                                                        : n.data.accruedInterestReceivable,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null ===
                                                (null == n.data
                                                    ? null
                                                    : n.data.accruedInterestReceivable)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                94,
                                                115,
                                                "account_enquiry_current_interest_payable_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.accruedInterestPayable)
                                                ? "-"
                                                : t.i5U(
                                                    97,
                                                    117,
                                                    null == n.data
                                                        ? null
                                                        : n.data.accruedInterestPayable,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.accruedInterestPayable)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                101,
                                                120,
                                                "account_enquiry_current_available_balance_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null === (null == n.data ? null : n.data.availableBalance)
                                                ? "-"
                                                : t.i5U(
                                                    104,
                                                    122,
                                                    null == n.data ? null : n.data.availableBalance,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null === (null == n.data ? null : n.data.availableBalance)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                108,
                                                125,
                                                "account_enquiry_current_ledger_balance_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null === (null == n.data ? null : n.data.ledgerBalance)
                                                ? "-"
                                                : t.i5U(
                                                    111,
                                                    127,
                                                    null == n.data ? null : n.data.ledgerBalance,
                                                    "1.2-2"
                                                ),
                                            " ",
                                            null === (null == n.data ? null : n.data.ledgerBalance)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(3),
                                        t.Y8G(
                                            "ngIf",
                                            "SA" === n.accountType || "CA" === n.accountType
                                        ));
                            },
                            dependencies: [o.bT, x.G, S._, o.QX, o.vh, p.D9],
                            styles: [
                                ".back-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-primary-border[_ngcontent-%COMP%]{height:auto;padding:0 8px;border-radius:24px}.card-panel[_ngcontent-%COMP%]{background-color:#003258;min-height:100%}.card-panel-title[_ngcontent-%COMP%]{padding:48px 40px 0;color:#fff}.back-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:5px}.back-title-container[_ngcontent-%COMP%]   .last-update-date[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:.7142857143rem;line-height:1.5}.back-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:auto}.back-icon[_ngcontent-%COMP%]{margin-right:20px;font-size:20px;cursor:pointer}.back-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#4a4a49}.title-label[_ngcontent-%COMP%]{font-weight:700;font-size:2.5714285714rem;line-height:1.3333333333;font-style:normal}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:24px 0}.blue-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,#8ea2b7 -37.49%,#416487 53.7%,#002240 112.95%);box-shadow:0 4px 8px -2px #002240cc;border-radius:8px;display:flex;flex-direction:column;min-height:250px;padding:40px;color:#fff;height:auto}.blue-card.small[_ngcontent-%COMP%]{width:336px;margin-right:16px}.blue-card.large[_ngcontent-%COMP%]{width:810px}.card-label-bold[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1rem;line-height:1.4285714286;font-style:normal}.card-caption2[_ngcontent-%COMP%], .card-primary-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:.7142857143rem;line-height:1.5;font-style:normal}.card-body1[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-size:1.2857142857rem;line-height:1.5555555556;font-weight:400;font-style:normal}.card-h4[_ngcontent-%COMP%], .card-h4-bold[_ngcontent-%COMP%], .card-h4-label-golden-yellow[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:1.7142857143rem;line-height:1.3333333333;font-style:normal}.card-flex-display[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-primary-label[_ngcontent-%COMP%]{color:#ffcb00;text-align:center}.card-primary-label.disabled[_ngcontent-%COMP%]{display:none;color:#bbb}.card-primary-border[_ngcontent-%COMP%]{vertical-align:middle;border:1px solid #ffcb00;color:#ffcb00;display:flex;height:16px;align-items:center}.card-primary-border.disabled[_ngcontent-%COMP%]{display:none;border:1px solid #bbbbbb;pointer-events:none}.card-h4-label-golden-yellow[_ngcontent-%COMP%]{color:#ffcb00}.card-h4-bold[_ngcontent-%COMP%]{color:#fff;font-weight:700}.divider[_ngcontent-%COMP%], .divider-large[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #647e9a}.progress-cont[_ngcontent-%COMP%]{position:relative;height:4px;width:100%;border-radius:4px;background:linear-gradient(180deg,#e3e3e3,#bbb)}.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:0;height:100%;position:absolute;z-index:1;top:0;left:0;border-radius:4px;background:linear-gradient(180deg,#4ed8da,#00a6e6);transition:.5s all}.currency-flag[_ngcontent-%COMP%]{font-size:20px;position:relative;margin-left:8px}.currency-icon-group[_ngcontent-%COMP%]{display:flex;align-items:center}.height-20-px[_ngcontent-%COMP%]{height:20px}.height-52-px[_ngcontent-%COMP%]{height:52px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            var D = u(67376);
            function bt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(
                            4,
                            "div",
                            7
                        )(5, "label", 8),
                            t.EFF(6),
                            t.nI1(7, "translate"),
                            t.k0s()(),
                            t.j41(8, "h4", 9),
                            t.EFF(9),
                            t.k0s()(),
                            t.j41(10, "div", 5)(11, "div", 10)(12, "label", 8),
                            t.EFF(13),
                            t.nI1(14, "translate"),
                            t.k0s(),
                            t.j41(15, "p", 11),
                            t.EFF(16),
                            t.k0s()(),
                            t.j41(17, "div", 12)(18, "label", 13),
                            t.EFF(19),
                            t.nI1(20, "translate"),
                            t.k0s(),
                            t.j41(21, "p", 11),
                            t.EFF(22),
                            t.k0s()()(),
                            t.j41(23, "div", 5)(24, "div", 14)(25, "label", 8),
                            t.EFF(26),
                            t.nI1(27, "translate"),
                            t.k0s(),
                            t.j41(28, "p", 11),
                            t.EFF(29),
                            t.k0s()(),
                            t.j41(30, "div", 15)(31, "label", 8),
                            t.EFF(32),
                            t.nI1(33, "translate"),
                            t.k0s(),
                            t.j41(34, "p", 11),
                            t.EFF(35),
                            t.nrm(36, "ui-icon", 16),
                            t.k0s()()(),
                            t.j41(37, "div", 5)(38, "div", 17)(39, "label", 8),
                            t.EFF(40),
                            t.nI1(41, "translate"),
                            t.k0s(),
                            t.j41(42, "p", 11),
                            t.EFF(43),
                            t.k0s()(),
                            t.j41(44, "div", 18)(45, "label", 8),
                            t.EFF(46),
                            t.nI1(47, "translate"),
                            t.k0s(),
                            t.j41(48, "p", 11),
                            t.EFF(49),
                            t.k0s()()()()(),
                            t.j41(50, "div", 19)(51, "div", 5)(52, "div", 20)(53, "label", 8),
                            t.EFF(54),
                            t.nI1(55, "translate"),
                            t.k0s(),
                            t.j41(56, "p", 11),
                            t.EFF(57),
                            t.nI1(58, "date"),
                            t.k0s()(),
                            t.j41(59, "div", 21)(60, "label", 8),
                            t.EFF(61),
                            t.nI1(62, "translate"),
                            t.k0s(),
                            t.j41(63, "p", 11),
                            t.EFF(64),
                            t.k0s()(),
                            t.j41(65, "div", 22)(66, "label", 8),
                            t.EFF(67),
                            t.nI1(68, "translate"),
                            t.k0s(),
                            t.j41(69, "p", 11),
                            t.EFF(70),
                            t.nI1(71, "date"),
                            t.k0s()(),
                            t.j41(72, "div", 23)(73, "label", 8),
                            t.EFF(74),
                            t.nI1(75, "translate"),
                            t.k0s(),
                            t.j41(76, "p", 11),
                            t.EFF(77),
                            t.k0s()(),
                            t.j41(78, "div", 24)(79, "label", 8),
                            t.EFF(80),
                            t.nI1(81, "translate"),
                            t.k0s(),
                            t.j41(82, "p", 11),
                            t.EFF(83),
                            t.nI1(84, "number"),
                            t.k0s()(),
                            t.nrm(85, "div"),
                            t.j41(86, "div", 25)(87, "label", 8),
                            t.EFF(88),
                            t.nI1(89, "translate"),
                            t.k0s(),
                            t.j41(90, "h4", 26),
                            t.EFF(91),
                            t.nI1(92, "number"),
                            t.k0s()()()()()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(2),
                        t.Y8G("cols", 1)("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(3),
                        t.JRh(t.bMT(7, 65, "account_enquiry_fda_account_name_title")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountName),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(14, 67, "account_enquiry_fda_account_number_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountNo),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(20, 69, "account_enquiry_fda_account_type_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountType),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(27, 71, "account_enquiry_fda_status_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.statusDescription),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(33, 73, "account_enquiry_fda_currency_label")),
                        t.R7$(3),
                        t.SpI(" ", null == e.data ? null : e.data.currency, " "),
                        t.R7$(),
                        t.Y8G(
                            "name",
                            e.currencyIcon[null == e.data ? null : e.data.currency]
                        ),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(41, 75, "account_enquiry_fda_branch_code_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.branchCode),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(47, 77, "account_enquiry_fda_branch_name_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.branchName),
                        t.R7$(2),
                        t.Y8G("cols", "227px 227px 227px")("gap", "24px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(55, 79, "account_enquiry_fda_no_sub_deposit_start_title")
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.i5U(
                                58,
                                81,
                                null == e.data ? null : e.data.depositStartDate,
                                "dd LLL yyyy"
                            )
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(62, 84, "account_enquiry_fda_no_sub_deposit_term_label")
                        ),
                        t.R7$(3),
                        t.JRh(e.getDepositTerm()),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(68, 86, "account_enquiry_fda_no_sub_maturity_date_label")
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.i5U(
                                71,
                                88,
                                null == e.data ? null : e.data.maturityDate,
                                "dd LLL yyyy"
                            )
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(75, 91, "account_enquiry_fda_no_sub_interest_rate_label")
                        ),
                        t.R7$(3),
                        t.SpI("", null == e.data ? null : e.data.interestRate, "%"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(81, 93, "account_enquiry_fda_no_sub_accrued_interest_label")
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            t.i5U(
                                84,
                                95,
                                null == e.data ? null : e.data.accruedInterest,
                                ".2"
                            ),
                            " ",
                            null == e.data ? null : e.data.currency,
                            ""
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(
                                89,
                                98,
                                "account_enquiry_fda_sub_total_deposit_balance_label"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            t.i5U(
                                92,
                                100,
                                null == e.data ? null : e.data.depositBalance,
                                ".2"
                            ),
                            " ",
                            null == e.data ? null : e.data.currency,
                            ""
                        );
                }
            }
            function yt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 27)(1, "div", 3)(2, "div", 4)(3, "div", 5)(
                            4,
                            "div",
                            6
                        )(5, "div", 7)(6, "label", 8),
                            t.EFF(7),
                            t.nI1(8, "translate"),
                            t.k0s()(),
                            t.j41(9, "h4", 9),
                            t.EFF(10),
                            t.k0s()(),
                            t.j41(11, "div", 5)(12, "div", 10)(13, "label", 8),
                            t.EFF(14),
                            t.nI1(15, "translate"),
                            t.k0s(),
                            t.j41(16, "p", 11),
                            t.EFF(17),
                            t.k0s()(),
                            t.j41(18, "div", 28)(19, "label", 8),
                            t.EFF(20),
                            t.nI1(21, "translate"),
                            t.k0s(),
                            t.j41(22, "p", 11),
                            t.EFF(23),
                            t.k0s()()(),
                            t.j41(24, "div", 5)(25, "div", 14)(26, "label", 8),
                            t.EFF(27),
                            t.nI1(28, "translate"),
                            t.k0s(),
                            t.j41(29, "p", 11),
                            t.EFF(30),
                            t.k0s()(),
                            t.j41(31, "div", 15)(32, "label", 8),
                            t.EFF(33),
                            t.nI1(34, "translate"),
                            t.k0s(),
                            t.j41(35, "p", 11),
                            t.EFF(36),
                            t.nrm(37, "ui-icon", 16),
                            t.k0s()()(),
                            t.j41(38, "div", 5)(39, "div", 17)(40, "label", 8),
                            t.EFF(41),
                            t.nI1(42, "translate"),
                            t.k0s(),
                            t.j41(43, "p", 11),
                            t.EFF(44),
                            t.k0s()(),
                            t.j41(45, "div", 18)(46, "label", 8),
                            t.EFF(47),
                            t.nI1(48, "translate"),
                            t.k0s(),
                            t.j41(49, "p", 11),
                            t.EFF(50),
                            t.k0s()()()()(),
                            t.j41(51, "div", 19)(52, "div", 5)(53, "div", 25)(54, "label", 8),
                            t.EFF(55),
                            t.nI1(56, "translate"),
                            t.k0s(),
                            t.j41(57, "p", 11),
                            t.EFF(58),
                            t.nI1(59, "number"),
                            t.k0s()(),
                            t.j41(60, "div", 24)(61, "label", 8),
                            t.EFF(62),
                            t.nI1(63, "translate"),
                            t.k0s(),
                            t.j41(64, "h4", 26),
                            t.EFF(65),
                            t.nI1(66, "number"),
                            t.k0s()()()()()()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.Y8G("cols", 1)("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(3),
                        t.JRh(t.bMT(8, 49, "account_enquiry_fda_account_name_title")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountName),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(15, 51, "account_enquiry_fda_account_number_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountNo),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(21, 53, "account_enquiry_fda_account_type_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.accountType),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(28, 55, "account_enquiry_fda_status_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.statusDescription),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(34, 57, "account_enquiry_fda_currency_label")),
                        t.R7$(3),
                        t.SpI(" ", null == e.data ? null : e.data.currency, " "),
                        t.R7$(),
                        t.Y8G(
                            "name",
                            e.currencyIcon[null == e.data ? null : e.data.currency]
                        ),
                        t.R7$(),
                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(42, 59, "account_enquiry_fda_branch_code_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.branchCode),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(48, 61, "account_enquiry_fda_branch_name_label")),
                        t.R7$(3),
                        t.JRh(null == e.data ? null : e.data.branchName),
                        t.R7$(2),
                        t.Y8G("cols", "227px")("gap", "24px"),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(t.bMT(56, 63, "account_enquiry_fda_sub_total_amount_label")),
                        t.R7$(3),
                        t.Lme(
                            "",
                            t.i5U(
                                59,
                                65,
                                null == e.data ? null : e.data.totalDepositBalance,
                                ".2"
                            ),
                            " ",
                            null == e.data ? null : e.data.currency,
                            ""
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.JRh(
                            t.bMT(
                                63,
                                68,
                                "account_enquiry_fda_sub_total_accrued_interest_label"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            t.i5U(
                                66,
                                70,
                                null == e.data ? null : e.data.totalAccruedInterest,
                                ".2"
                            ),
                            " ",
                            null === (null == e.data ? null : e.data.totalAccruedInterest)
                                ? ""
                                : null == e.data
                                    ? null
                                    : e.data.currency,
                            " "
                        );
                }
            }
            let Ct = (() => {
                class l {
                    constructor(e) {
                        (this.translate = e),
                            (this.isPrimaryAccount = !0),
                            (this.currencyIcon = f.VR);
                    }
                    ngOnInit() { }
                    getDepositTerm() {
                        let e = "";
                        if ((0, D.isEmpty)(this.data?.depositTerm)) e = "";
                        else {
                            const a = this.data?.depositTerm.substr(-1),
                                n = this.data?.depositTerm.slice(0, -1);
                            "D" === a && (e = `${n} Days`),
                                "M" === a &&
                                (e = `${n} ${this.translate.instant(
                                    "statement_request_statement_month_label"
                                )}`),
                                "Y" === a && (e = `${n} Years`);
                        }
                        return e;
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(p.c$));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-fda-top"]],
                            inputs: {
                                isPrimaryAccount: "isPrimaryAccount",
                                data: "data",
                                isSubFda: "isSubFda",
                            },
                            decls: 3,
                            vars: 2,
                            consts: [
                                ["id", "fda-blue-card", 1, "fda-blue-card-container"],
                                ["id", "fda-card-section", "class", "main-card", 4, "ngIf"],
                                [
                                    "id",
                                    "sub-fda-blue-card",
                                    "class",
                                    "sub-fda-blue-card-container",
                                    4,
                                    "ngIf",
                                ],
                                ["id", "fda-card-section", 1, "main-card"],
                                [1, "blue-card", "small"],
                                ["uiGrid", "", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "fda-account-name", 3, "cols", "gap"],
                                [1, "card-flex-display"],
                                [1, "card-label-bold"],
                                [1, "card-h4"],
                                ["uiGrid", "", "id", "fda-account-number", 3, "cols", "gap"],
                                [1, "card-body1"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-type",
                                    1,
                                    "height-52-px",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-label-bold", "height-20-px"],
                                ["uiGrid", "", "id", "fda-account-status", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "fda-account-currency", 3, "cols", "gap"],
                                [1, "currency-flag", 3, "name"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-branch-code",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-branch-name",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "blue-card", "large"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-deposit-start-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-deposit-term",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-maturity-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                ["uiGrid", "", "id", "fda-account-interest", 3, "cols", "gap"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-accrued-interest",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "fda-account-deposit-balance",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-h4-label-golden-yellow"],
                                ["id", "sub-fda-blue-card", 1, "sub-fda-blue-card-container"],
                                ["uiGrid", "", "id", "fda-account-type", 3, "cols", "gap"],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    (t.j41(0, "div", 0),
                                        t.DNE(1, bt, 93, 103, "div", 1)(2, yt, 67, 73, "div", 2),
                                        t.k0s()),
                                    2 & a &&
                                    (t.R7$(),
                                        t.Y8G("ngIf", !n.isSubFda),
                                        t.R7$(),
                                        t.Y8G("ngIf", n.isSubFda));
                            },
                            dependencies: [o.bT, x.G, S._, o.QX, o.vh, p.D9],
                            styles: [
                                ".back-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-primary-border[_ngcontent-%COMP%]{height:auto;padding:0 8px;border-radius:24px}.card-panel[_ngcontent-%COMP%]{background-color:#003258;min-height:100%}.card-panel-title[_ngcontent-%COMP%]{padding:48px 40px 0;color:#fff}.back-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:5px}.back-title-container[_ngcontent-%COMP%]   .last-update-date[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:.7142857143rem;line-height:1.5}.back-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:auto}.back-icon[_ngcontent-%COMP%]{margin-right:20px;font-size:20px;cursor:pointer}.back-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#4a4a49}.title-label[_ngcontent-%COMP%]{font-weight:700;font-size:2.5714285714rem;line-height:1.3333333333;font-style:normal}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:24px 0}.blue-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,#8ea2b7 -37.49%,#416487 53.7%,#002240 112.95%);box-shadow:0 4px 8px -2px #002240cc;border-radius:8px;display:flex;flex-direction:column;min-height:250px;padding:40px;color:#fff;height:auto}.blue-card.small[_ngcontent-%COMP%]{width:336px;margin-right:16px}.blue-card.large[_ngcontent-%COMP%]{width:810px}.card-label-bold[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1rem;line-height:1.4285714286;font-style:normal}.card-caption2[_ngcontent-%COMP%], .card-primary-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:.7142857143rem;line-height:1.5;font-style:normal}.card-body1[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-weight:400;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-h4[_ngcontent-%COMP%], .card-h4-bold[_ngcontent-%COMP%], .card-h4-label-golden-yellow[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:1.7142857143rem;line-height:1.3333333333;font-style:normal}.card-flex-display[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-primary-label[_ngcontent-%COMP%]{color:#ffcb00;text-align:center}.card-primary-label.disabled[_ngcontent-%COMP%]{color:#bbb}.card-primary-border[_ngcontent-%COMP%]{vertical-align:middle;border:1px solid #ffcb00;color:#ffcb00}.card-primary-border.disabled[_ngcontent-%COMP%]{border:1px solid #bbbbbb;pointer-events:none}.card-h4-label-golden-yellow[_ngcontent-%COMP%]{color:#ffcb00}.card-h4-bold[_ngcontent-%COMP%]{color:#fff;font-weight:700}.divider[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #416487}.divider-large[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #647e9a}.progress-cont[_ngcontent-%COMP%]{position:relative;height:7px;width:100%;border-radius:4px;background:linear-gradient(180deg,#e3e3e3,#bbb)}.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:0;height:100%;position:absolute;z-index:1;top:0;left:0;border-radius:4px;background:linear-gradient(180deg,#4ed8da,#00a6e6);transition:.5s all}.currency-flag[_ngcontent-%COMP%]{font-size:20px}.height-20-px[_ngcontent-%COMP%]{height:20px}.height-52-px[_ngcontent-%COMP%]{height:52px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            var B = u(95528);
            function vt(l, s) {
                if ((1 & l && (t.j41(0, "p", 9), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Lme(
                            " ",
                            null == e.data ||
                                null == e.data.interest ||
                                null == e.data.interest.interestCode
                                ? null
                                : e.data.interest.interestCode.label,
                            " ",
                            null == e.data || null == e.data.interest
                                ? null
                                : e.data.interest.interestSpread,
                            " % "
                        );
                }
            }
            function Tt(l, s) {
                if ((1 & l && (t.j41(0, "span"), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(),
                        t.JRh(
                            null == e.data ||
                                null == e.data.interest ||
                                null == e.data.interest.interestCode
                                ? null
                                : e.data.interest.interestCode.label
                        );
                }
            }
            function Pt(l, s) {
                if ((1 & l && (t.j41(0, "span"), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(),
                        t.Lme(
                            "",
                            null == e.data ||
                                null == e.data.interest ||
                                null == e.data.interest.interestCode
                                ? null
                                : e.data.interest.interestCode.label,
                            " = ",
                            null == e.data || null == e.data.interest
                                ? null
                                : e.data.interest.interestSpread,
                            " %"
                        );
                }
            }
            function Rt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "p", 9),
                            t.DNE(1, Tt, 2, 1, "span", 33)(2, Pt, 2, 2, "span", 33),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G(
                            "ngIf",
                            null == e.data ? null : e.data.isLoanCommitmentAccount
                        ),
                        t.R7$(),
                        t.Y8G("ngIf", !(null != e.data && e.data.isLoanCommitmentAccount));
                }
            }
            function It(l, s) {
                if ((1 & l && (t.j41(0, "span"), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(),
                        t.Lme(
                            " ",
                            null == e.data ||
                                null == e.data.interest ||
                                null == e.data.interest.interestCode
                                ? null
                                : e.data.interest.interestCode.label,
                            " ",
                            null == e.data || null == e.data.interest
                                ? null
                                : e.data.interest.interestSpread,
                            " %"
                        );
                }
            }
            function kt(l, s) {
                1 & l && (t.j41(0, "span"), t.EFF(1, " - "), t.k0s());
            }
            function Mt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "p", 9),
                            t.DNE(1, It, 2, 2, "span", 33)(2, kt, 2, 0, "span", 33),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G(
                            "ngIf",
                            null == e.data ||
                                null == e.data.interest ||
                                null == e.data.interest.interestCode
                                ? null
                                : e.data.interest.interestCode.value
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !(
                                null != e.data &&
                                null != e.data.interest &&
                                null != e.data.interest.interestCode &&
                                e.data.interest.interestCode.value
                            )
                        );
                }
            }
            function Ft(l, s) {
                1 & l && (t.j41(0, "p", 9), t.EFF(1, "-"), t.k0s());
            }
            let St = (() => {
                class l {
                    constructor(e) {
                        (this.translate = e),
                            (this.isPrimaryAccount = !0),
                            (this.currencyIcon = f.VR);
                    }
                    ngOnInit() { }
                    checkProgress(e, a) {
                        const n = (e / a) * 100;
                        return n > 100 ? 100 : n;
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(p.c$));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-la-top"]],
                            inputs: { isPrimaryAccount: "isPrimaryAccount", data: "data" },
                            decls: 132,
                            vars: 157,
                            consts: [
                                ["totalOutstandingTooltip", ""],
                                ["id", "la-blue-card", 1, "la-blue-card-container"],
                                ["id", "loan-card-section", 1, "main-card"],
                                [1, "blue-card", "small"],
                                ["uiGrid", "", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "loan-account-name", 3, "cols", "gap"],
                                [1, "card-label-bold"],
                                [1, "card-h4"],
                                ["uiGrid", "", "id", "loan-account-number", 3, "cols", "gap"],
                                [1, "card-body1"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-type",
                                    1,
                                    "height-52-px",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-label-bold", "height-20-px"],
                                ["uiGrid", "", "id", "loan-account-status", 3, "cols", "gap"],
                                ["uiGrid", "", "id", "loan-account-currency", 3, "cols", "gap"],
                                [1, "currency-flag", 3, "name"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-maturity-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "casa-account-last-payment-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "blue-card", "large"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-next-payment-due-date",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-interest-rate",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                ["class", "card-body1", 4, "ngIf"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-amount-due",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "card-h4-label-golden-yellow"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-principal-amount",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-interest-amount",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "divider-large"],
                                [
                                    "uiGrid",
                                    "",
                                    "id",
                                    "loan-account-loan-limit",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                ["uiGrid", "", "id", "casa-account-balance", 3, "cols", "gap"],
                                [1, "card-flex-display"],
                                [
                                    "name",
                                    "info",
                                    1,
                                    "mlt-3px",
                                    "color-medium-grey",
                                    "font-size-16px",
                                    "mr-5",
                                ],
                                [1, "tooltip-text", 3, "uiTooltip", "target", "placement"],
                                [1, "progress-cont"],
                                [1, "progress"],
                                [4, "ngIf"],
                            ],
                            template: function (a, n) {
                                if (
                                    (1 & a &&
                                        (t.j41(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(
                                            4,
                                            "div",
                                            5
                                        )(5, "label", 6),
                                            t.EFF(6),
                                            t.nI1(7, "translate"),
                                            t.k0s(),
                                            t.j41(8, "h4", 7),
                                            t.EFF(9),
                                            t.k0s()(),
                                            t.j41(10, "div", 4)(11, "div", 8)(12, "label", 6),
                                            t.EFF(13),
                                            t.nI1(14, "translate"),
                                            t.k0s(),
                                            t.j41(15, "p", 9),
                                            t.EFF(16),
                                            t.k0s()(),
                                            t.j41(17, "div", 10)(18, "label", 11),
                                            t.EFF(19),
                                            t.nI1(20, "translate"),
                                            t.k0s(),
                                            t.j41(21, "p", 9),
                                            t.EFF(22),
                                            t.k0s()()(),
                                            t.j41(23, "div", 4)(24, "div", 12)(25, "label", 6),
                                            t.EFF(26),
                                            t.nI1(27, "translate"),
                                            t.k0s(),
                                            t.j41(28, "p", 9),
                                            t.EFF(29),
                                            t.k0s()(),
                                            t.j41(30, "div", 13)(31, "label", 6),
                                            t.EFF(32),
                                            t.nI1(33, "translate"),
                                            t.k0s(),
                                            t.j41(34, "p", 9),
                                            t.EFF(35),
                                            t.nrm(36, "ui-icon", 14),
                                            t.k0s()()(),
                                            t.j41(37, "div", 4)(38, "div", 15)(39, "label", 6),
                                            t.EFF(40),
                                            t.nI1(41, "translate"),
                                            t.k0s(),
                                            t.j41(42, "p", 9),
                                            t.EFF(43),
                                            t.nI1(44, "date"),
                                            t.k0s()(),
                                            t.j41(45, "div", 16)(46, "label", 6),
                                            t.EFF(47),
                                            t.nI1(48, "translate"),
                                            t.k0s(),
                                            t.j41(49, "p", 9),
                                            t.EFF(50),
                                            t.nI1(51, "date"),
                                            t.k0s()()()()(),
                                            t.j41(52, "div", 17)(53, "div", 4)(54, "div", 18)(
                                                55,
                                                "label",
                                                6
                                            ),
                                            t.EFF(56),
                                            t.nI1(57, "translate"),
                                            t.k0s(),
                                            t.j41(58, "p", 9),
                                            t.EFF(59),
                                            t.nI1(60, "date"),
                                            t.k0s()(),
                                            t.j41(61, "div", 19)(62, "label", 6),
                                            t.EFF(63),
                                            t.nI1(64, "translate"),
                                            t.k0s(),
                                            t.DNE(65, vt, 2, 2, "p", 20)(66, Rt, 3, 2, "p", 20)(
                                                67,
                                                Mt,
                                                3,
                                                2,
                                                "p",
                                                20
                                            )(68, Ft, 2, 0, "p", 20),
                                            t.k0s(),
                                            t.nrm(69, "div"),
                                            t.j41(70, "div", 21)(71, "label", 6),
                                            t.EFF(72),
                                            t.nI1(73, "translate"),
                                            t.k0s(),
                                            t.j41(74, "h4", 22),
                                            t.EFF(75),
                                            t.nI1(76, "number"),
                                            t.k0s()(),
                                            t.j41(77, "div", 23)(78, "label", 6),
                                            t.EFF(79),
                                            t.nI1(80, "translate"),
                                            t.k0s(),
                                            t.j41(81, "h4", 7),
                                            t.EFF(82),
                                            t.nI1(83, "number"),
                                            t.k0s()(),
                                            t.j41(84, "div", 24)(85, "label", 6),
                                            t.EFF(86),
                                            t.nI1(87, "translate"),
                                            t.k0s(),
                                            t.j41(88, "h4", 7),
                                            t.EFF(89),
                                            t.nI1(90, "number"),
                                            t.k0s()(),
                                            t.j41(91, "div", 24)(92, "label", 6),
                                            t.EFF(93),
                                            t.nI1(94, "translate"),
                                            t.k0s(),
                                            t.j41(95, "h4", 7),
                                            t.EFF(96),
                                            t.nI1(97, "number"),
                                            t.k0s()()(),
                                            t.nrm(98, "div", 25),
                                            t.j41(99, "div", 4)(100, "div", 26)(101, "label", 6),
                                            t.EFF(102),
                                            t.nI1(103, "translate"),
                                            t.k0s(),
                                            t.j41(104, "h4", 22),
                                            t.EFF(105),
                                            t.nI1(106, "number"),
                                            t.k0s()(),
                                            t.j41(107, "div", 27)(108, "div", 28)(109, "span", null, 0)(
                                                111,
                                                "label",
                                                6
                                            ),
                                            t.EFF(112),
                                            t.nI1(113, "translate"),
                                            t.k0s(),
                                            t.nrm(114, "ui-icon", 29),
                                            t.k0s(),
                                            t.j41(115, "label", 6),
                                            t.EFF(116),
                                            t.nI1(117, "translate"),
                                            t.k0s()(),
                                            t.j41(118, "div", 30)(119, "div", 4)(120, "div"),
                                            t.EFF(121),
                                            t.nI1(122, "translate"),
                                            t.k0s()()(),
                                            t.j41(123, "div", 28)(124, "label", 9),
                                            t.EFF(125),
                                            t.nI1(126, "number"),
                                            t.k0s(),
                                            t.j41(127, "label", 9),
                                            t.EFF(128),
                                            t.nI1(129, "number"),
                                            t.k0s()(),
                                            t.j41(130, "div", 31),
                                            t.nrm(131, "div", 32),
                                            t.k0s()()()()()()),
                                        2 & a)
                                ) {
                                    const i = t.sdS(110);
                                    t.R7$(3),
                                        t.Y8G("cols", 1)("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(7, 93, "account_enquiry_loan_account_name_title")
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.accountName),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(14, 95, "account_enquiry_loan_account_number_label")
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.accountNo),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                20,
                                                97,
                                                "dashboard_account_list_view_account_types_card_table_loan_type_text_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.loanTypeDescription),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(t.bMT(27, 99, "account_enquiry_loan_status_label")),
                                        t.R7$(3),
                                        t.JRh(null == n.data ? null : n.data.statusDescription),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(33, 101, "account_enquiry_loan_currency_label")
                                        ),
                                        t.R7$(3),
                                        t.SpI(" ", null == n.data ? null : n.data.currency, " "),
                                        t.R7$(),
                                        t.Y8G(
                                            "name",
                                            n.currencyIcon[null == n.data ? null : n.data.currency]
                                        ),
                                        t.R7$(),
                                        t.Y8G("cols", "120px 120px")("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(41, 103, "account_enquiry_loan_maturity_date_label")
                                        ),
                                        t.R7$(3),
                                        t.JRh(
                                            t.i5U(
                                                44,
                                                105,
                                                null == n.data ? null : n.data.maturityDate,
                                                "dd LLL yyyy"
                                            )
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                48,
                                                108,
                                                "account_enquiry_loan_last_payment_date_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            null === (null == n.data ? null : n.data.lastPaymentDate)
                                                ? "-"
                                                : t.i5U(
                                                    51,
                                                    110,
                                                    null == n.data ? null : n.data.lastPaymentDate,
                                                    "dd LLL yyyy"
                                                ),
                                            " "
                                        ),
                                        t.R7$(3),
                                        t.Y8G("cols", "227px 227px 227px")("gap", "24px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                57,
                                                113,
                                                "account_enquiry_loan_payment_due_date_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.nextPaymentDueDate)
                                                ? "-"
                                                : t.i5U(
                                                    60,
                                                    115,
                                                    null == n.data ? null : n.data.nextPaymentDueDate,
                                                    "dd LLL yyyy"
                                                ),
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(64, 118, "account_enquiry_loan_interest_rate_label")
                                        ),
                                        t.R7$(2),
                                        t.Y8G(
                                            "ngIf",
                                            "FLOAT" ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType) ||
                                            "RELATED_DEPOSIT" ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType)
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            "MMR" ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType) ||
                                            "QUOTE" ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType)
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            "FIXED" ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType)
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            null ===
                                            (null == n.data || null == n.data.interest
                                                ? null
                                                : n.data.interest.interestType)
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                73,
                                                120,
                                                "account_enquiry_account_outstanding_principal_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.outstandingPrinciple)
                                                ? "-"
                                                : t.i5U(
                                                    76,
                                                    122,
                                                    null == n.data ? null : n.data.outstandingPrinciple,
                                                    ".2"
                                                ),
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.outstandingPrinciple)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                80,
                                                125,
                                                "account_enquiry_account_accrued_interest_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.outstandingInterest)
                                                ? "-"
                                                : t.i5U(
                                                    83,
                                                    127,
                                                    null == n.data
                                                        ? null
                                                        : n.data.outstandingInterest.toFixed(2),
                                                    ".2"
                                                ),
                                            " ",
                                            null ===
                                                (null == n.data ? null : n.data.outstandingInterest)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                87,
                                                130,
                                                "account_enquiry_account_late_charge_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null === (null == n.data ? null : n.data.penaltyFee)
                                                ? "-"
                                                : t.i5U(
                                                    90,
                                                    132,
                                                    null == n.data ? null : n.data.penaltyFee,
                                                    ".2"
                                                ),
                                            " ",
                                            null === (null == n.data ? null : n.data.penaltyFee)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(
                                                94,
                                                135,
                                                "account_enquiry_account_misc_charges_label"
                                            )
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            " ",
                                            null === (null == n.data ? null : n.data.penaltyFee)
                                                ? "-"
                                                : t.i5U(
                                                    97,
                                                    137,
                                                    null == n.data ? null : n.data.miscCharges,
                                                    ".2"
                                                ),
                                            " ",
                                            null === (null == n.data ? null : n.data.penaltyFee)
                                                ? ""
                                                : null == n.data
                                                    ? null
                                                    : n.data.currency,
                                            " "
                                        ),
                                        t.R7$(3),
                                        t.Y8G("cols", 1)("gap", "16px"),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(2),
                                        t.JRh(
                                            t.bMT(103, 140, "account_enquiry_loan_credit_limit_label")
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            "",
                                            t.i5U(
                                                106,
                                                142,
                                                null == n.data ? null : n.data.loanLimit,
                                                ".2"
                                            ),
                                            " ",
                                            null == n.data ? null : n.data.currency,
                                            ""
                                        ),
                                        t.R7$(2),
                                        t.Y8G("cols", 1)("gap", "4px"),
                                        t.R7$(5),
                                        t.JRh(
                                            t.bMT(113, 145, "account_enquiry_loan_used_credit_label")
                                        ),
                                        t.R7$(4),
                                        t.JRh(
                                            t.bMT(
                                                117,
                                                147,
                                                "account_enquiry_loan_available_credit_label"
                                            )
                                        ),
                                        t.R7$(2),
                                        t.Y8G("uiTooltip", "dark")("target", i)(
                                            "placement",
                                            "bottom"
                                        ),
                                        t.R7$(),
                                        t.Y8G("cols", 1)("gap", "2px"),
                                        t.R7$(2),
                                        t.SpI(
                                            " ",
                                            t.bMT(
                                                122,
                                                149,
                                                "account_enquiry_current_used_credit_tootltip_text"
                                            ),
                                            " "
                                        ),
                                        t.R7$(4),
                                        t.Lme(
                                            "",
                                            t.i5U(
                                                126,
                                                151,
                                                null == n.data ? null : n.data.usedLimit,
                                                ".2"
                                            ),
                                            " ",
                                            null == n.data ? null : n.data.currency,
                                            ""
                                        ),
                                        t.R7$(3),
                                        t.Lme(
                                            "",
                                            t.i5U(
                                                129,
                                                154,
                                                null == n.data ? null : n.data.availableBalance,
                                                ".2"
                                            ),
                                            " ",
                                            null == n.data ? null : n.data.currency,
                                            ""
                                        ),
                                        t.R7$(3),
                                        t.xc7(
                                            "width",
                                            n.checkProgress(
                                                null == n.data ? null : n.data.usedLimit,
                                                null == n.data ? null : n.data.availableBalance
                                            ) + "%"
                                        );
                                }
                            },
                            dependencies: [o.bT, x.G, S._, B.b6, o.QX, o.vh, p.D9],
                            styles: [
                                ".back-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-primary-border[_ngcontent-%COMP%]{height:auto;padding:0 8px;border-radius:24px}.card-panel[_ngcontent-%COMP%]{background-color:#003258;min-height:100%}.card-panel-title[_ngcontent-%COMP%]{padding:48px 40px 0;color:#fff}.back-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:5px}.back-title-container[_ngcontent-%COMP%]   .last-update-date[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:.7142857143rem;line-height:1.5}.back-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:auto}.back-icon[_ngcontent-%COMP%]{margin-right:20px;font-size:20px;cursor:pointer}.back-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#4a4a49}.title-label[_ngcontent-%COMP%]{font-weight:700;font-size:2.5714285714rem;line-height:1.3333333333;font-style:normal}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:24px 0}.blue-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,#8ea2b7 -37.49%,#416487 53.7%,#002240 112.95%);box-shadow:0 4px 8px -2px #002240cc;border-radius:8px;display:flex;flex-direction:column;min-height:250px;padding:40px;color:#fff;height:auto}.blue-card.small[_ngcontent-%COMP%]{width:336px;margin-right:16px}.blue-card.large[_ngcontent-%COMP%]{width:810px}.card-label-bold[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1rem;line-height:1.4285714286;font-style:normal}.card-caption2[_ngcontent-%COMP%], .card-primary-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:.7142857143rem;line-height:1.5;font-style:normal}.card-body1[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-weight:400;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-h4[_ngcontent-%COMP%], .card-h4-bold[_ngcontent-%COMP%], .card-h4-label-golden-yellow[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:1.7142857143rem;line-height:1.3333333333;font-style:normal}.card-flex-display[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-primary-label[_ngcontent-%COMP%]{color:#ffcb00;text-align:center}.card-primary-label.disabled[_ngcontent-%COMP%]{color:#bbb}.card-primary-border[_ngcontent-%COMP%]{vertical-align:middle;border:1px solid #ffcb00;color:#ffcb00}.card-primary-border.disabled[_ngcontent-%COMP%]{border:1px solid #bbbbbb;pointer-events:none}.card-h4-label-golden-yellow[_ngcontent-%COMP%]{color:#ffcb00}.card-h4-bold[_ngcontent-%COMP%]{color:#fff;font-weight:700}.divider[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #416487}.divider-large[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #647e9a}.progress-cont[_ngcontent-%COMP%]{position:relative;height:7px;width:100%;border-radius:4px;background:linear-gradient(180deg,#e3e3e3,#bbb)}.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:0;height:100%;position:absolute;z-index:1;top:0;left:0;border-radius:4px;background:linear-gradient(180deg,#4ed8da,#00a6e6);transition:.5s all}.currency-flag[_ngcontent-%COMP%]{font-size:20px}.height-20-px[_ngcontent-%COMP%]{height:20px}.height-52-px[_ngcontent-%COMP%]{height:52px}.mr-5[_ngcontent-%COMP%]{margin-left:5px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            var N = u(18359);
            const Dt = ["*"],
                Ot = (l) => ({ "key-value": !0, light: l }),
                Et = (l) => ({ data: !0, small: l });
            let w = (() => {
                class l {
                    constructor() {
                        (this.light = !1), (this.small = !1);
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)();
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-key-value"]],
                            inputs: {
                                label: "label",
                                data: "data",
                                light: "light",
                                small: "small",
                            },
                            ngContentSelectors: Dt,
                            decls: 6,
                            vars: 8,
                            consts: [
                                [3, "ngClass"],
                                [1, "label"],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    (t.NAR(),
                                        t.j41(0, "div", 0)(1, "div", 1),
                                        t.EFF(2),
                                        t.k0s(),
                                        t.j41(3, "div", 0),
                                        t.EFF(4),
                                        t.SdG(5),
                                        t.k0s()()),
                                    2 & a &&
                                    (t.Y8G("ngClass", t.eq3(4, Ot, n.light)),
                                        t.R7$(2),
                                        t.JRh(n.label),
                                        t.R7$(),
                                        t.Y8G("ngClass", t.eq3(6, Et, n.small)),
                                        t.R7$(),
                                        t.SpI(" ", n.data, " "));
                            },
                            dependencies: [o.YU],
                            styles: [
                                ".key-value[_ngcontent-%COMP%]   .data.small[_ngcontent-%COMP%], .key-value[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1rem;line-height:1.4285714286}.key-value[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]:not(.small){font-size:1.1428571429rem;line-height:1.5}.key-value[_ngcontent-%COMP%]{word-break:break-word}.key-value[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#868686;margin-bottom:.2857142857rem}.key-value[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{color:#002240}.key-value.light[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .key-value.light[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{color:#fff}",
                            ],
                        });
                    }
                }
                return l;
            })();
            function xt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 1)(1, "div", 2)(2, "h5", 3),
                            t.EFF(3),
                            t.nI1(4, "translate"),
                            t.k0s()(),
                            t.j41(5, "div", 4),
                            t.nrm(6, "ktb-key-value", 5),
                            t.nI1(7, "translate"),
                            t.nrm(8, "ktb-key-value", 5),
                            t.nI1(9, "translate"),
                            t.k0s(),
                            t.nrm(10, "div", 6),
                            t.j41(11, "div", 4)(12, "div", 7),
                            t.nrm(13, "ktb-key-value", 5),
                            t.nI1(14, "translate"),
                            t.nrm(15, "ktb-key-value", 5),
                            t.nI1(16, "translate"),
                            t.k0s(),
                            t.j41(17, "div", 7),
                            t.nrm(18, "ktb-key-value", 5),
                            t.nI1(19, "translate"),
                            t.nrm(20, "ktb-key-value", 5),
                            t.nI1(21, "translate"),
                            t.k0s(),
                            t.j41(22, "div", 7),
                            t.nrm(23, "ktb-key-value", 5),
                            t.nI1(24, "translate"),
                            t.k0s()(),
                            t.j41(25, "div", 4),
                            t.nrm(26, "ktb-key-value", 8),
                            t.nI1(27, "translate"),
                            t.nrm(28, "ktb-key-value", 5),
                            t.nI1(29, "translate"),
                            t.k0s()()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(
                            t.bMT(
                                4,
                                37,
                                "account_enquiry_transaction_panel_permutation_to_label"
                            )
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                7,
                                39,
                                "account_enquiry_current_panel_transfer_amount_label"
                            )
                        )("data", e.transferAmount),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(9, 41, "account_enquiry_current_panel_tax_label")
                        )("data", e.taxAmount),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(14, 43, "account_enquiry_current_panel_value_date_label")
                        )("data", e.transactionDateTime),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                16,
                                45,
                                "account_enquiry_current_panel_transaction_code_label"
                            )
                        )("data", e.transactionCode),
                        t.R7$(3),
                        t.Y8G(
                            "label",
                            t.bMT(19, 47, "account_enquiry_current_panel_cheque_number_label")
                        )("data", e.chequeNumber),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                21,
                                49,
                                "account_enquiry_current_panel_transaction_type_label"
                            )
                        )("data", e.transactionType),
                        t.R7$(3),
                        t.Y8G(
                            "label",
                            t.bMT(24, 51, "account_enquiry_current_panel_branch_code_label")
                        )("data", e.branchCode),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(27, 53, "account_enquiry_current_panel_description_label")
                        )("data", e.description),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(29, 55, "account_enquiry_current_panel_teller_id_label")
                        )("data", e.tellerId);
                }
            }
            let At = (() => {
                class l {
                    constructor(e, a, n, i, r) {
                        (this.accountEnquiryService = e),
                            (this._decimalPipe = a),
                            (this._datePipe = n),
                            (this._translate = i),
                            (this.facade = r),
                            (this.transactionSubs = new N.yU());
                    }
                    ngOnInit() {
                        var e = this;
                        this.transactionSubs.add(
                            this.accountEnquiryService.historyRowClicked.subscribe(
                                (function () {
                                    var a = (0, g.A)(function* (n) {
                                        e.transactionHistory = yield e.facade.getTransactionDetail(
                                            n.transactionIndex
                                        );
                                    });
                                    return function (n) {
                                        return a.apply(this, arguments);
                                    };
                                })()
                            )
                        );
                    }
                    get transferAmount() {
                        const { transferAmount: e, currency: a } = this.transactionHistory;
                        return e ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}` : "-";
                    }
                    get transactionRefId() {
                        return this.transactionHistory?.transactionRefId || "-";
                    }
                    get taxAmount() {
                        const { taxAmount: e } = this.transactionHistory;
                        return e ? `${this._decimalPipe.transform(e, "1.2-2")} THB` : "-";
                    }
                    get transactionDateTime() {
                        const { transactionDateTime: e } = this.transactionHistory;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy HH:mm") : "-";
                    }
                    get transactionCode() {
                        return this.transactionHistory?.transactionCode || "-";
                    }
                    get chequeNumber() {
                        return this.transactionHistory?.chequeNumber || "-";
                    }
                    get tellerId() {
                        return this.transactionHistory?.tellerId || "-";
                    }
                    get transactionType() {
                        return this.transactionHistory?.transactionType || "-";
                    }
                    get branchCode() {
                        return this.transactionHistory?.branchCode || "-";
                    }
                    get description() {
                        const {
                            transactionCode: e,
                            descriptionName: a,
                            transactionComment: n,
                            descriptionChannel: i,
                            paymentRef: r,
                        } = this.transactionHistory;
                        return `${e} ${a} \n    ${n} ${r || ""
                            }\n    ${this._translate.instant(
                                "account_enquiry_current_channel_label"
                            )}: ${i}`;
                    }
                    ngOnDestroy() {
                        this.transactionSubs.unsubscribe();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(E.e),
                                t.rXU(o.QX),
                                t.rXU(o.vh),
                                t.rXU(p.c$),
                                t.rXU(d.j)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-transaction-history-side-panel"]],
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "collapsible is-side-panel-content", 4, "ngIf"],
                                [1, "collapsible", "is-side-panel-content"],
                                [1, "account-number"],
                                [1, "to-label"],
                                [
                                    "uiGrid",
                                    "",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [3, "label", "data"],
                                [1, "divider-line"],
                                [1, "column-blocks-wrapper"],
                                [1, "ws-pre-line", 3, "label", "data"],
                            ],
                            template: function (a, n) {
                                1 & a && t.DNE(0, xt, 30, 57, "div", 0),
                                    2 & a && t.Y8G("ngIf", n.transactionHistory);
                            },
                            dependencies: [o.bT, S._, w, p.D9],
                            styles: [
                                '.collapsible[_ngcontent-%COMP%]{padding:2.1428571429rem 2.8571428571rem;margin-bottom:2.8571428571rem;word-break:break-word;background-color:#fff}.collapsible[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;color:#002240}.collapsible[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]{display:block;font-size:1rem;line-height:1.4285714286;font-weight:300;color:#868686}.collapsible[_ngcontent-%COMP%]   .remove-collapsible-padding[_ngcontent-%COMP%]{margin-left:-2.8571428571rem;margin-right:-2.8571428571rem}[_nghost-%COMP%]     .body{border-top-color:transparent!important}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{margin-bottom:0;padding:1.7142857143rem 2.8571428571rem;background-color:transparent}.collapsible.is-side-panel-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}.collapsible.is-side-panel-content[_ngcontent-%COMP%]:not(.table-wrapper)   .content[_ngcontent-%COMP%]{padding-top:1.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table{background-color:transparent}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:not(:last-of-type) td{border-bottom:1px solid #e3e3e3}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:last-of-type td{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .table-footer{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .empty-table-display{padding-top:.7142857143rem;padding-bottom:.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .header{padding:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .body-content{padding-bottom:0}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{padding-top:0}.column-blocks-wrapper[_ngcontent-%COMP%]{display:block}.column-blocks-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-bottom:1.7142857143rem}.row[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1.7142857143rem}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:before, [_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:after{content:""}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-container.is-disabled{opacity:1}.avatar[_ngcontent-%COMP%]{display:block;width:6.8571428571rem;height:6.8571428571rem;border-radius:50%;overflow:hidden}.avatar[_ngcontent-%COMP%] > .ktb-icon[_ngcontent-%COMP%]{font-size:6.8571428571rem;opacity:.7}.text-link[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:.8571428571rem;line-height:1.5;border-bottom:2px solid #ffcb00;cursor:pointer}.account-number[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:30px}.to-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.4285714286rem;line-height:1.4;color:#002240}.divider-line[_ngcontent-%COMP%]{display:block;height:0;margin:24px 0;width:auto;border-bottom:1px solid #e3e3e3}.ws-pre-line[_ngcontent-%COMP%]{white-space:pre-line}',
                            ],
                        });
                    }
                }
                return l;
            })();
            const $t = () => ({ pointerEvents: "none" });
            function Gt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "form", 2)(1, "div", 3),
                            t.nrm(2, "ui-datepicker", 4),
                            t.nI1(3, "translate"),
                            t.nrm(4, "ui-datepicker", 5),
                            t.nI1(5, "translate"),
                            t.nrm(6, "ui-amount-range-input", 6),
                            t.nI1(7, "translate"),
                            t.nI1(8, "translate"),
                            t.nI1(9, "translate"),
                            t.nI1(10, "translate"),
                            t.k0s()()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.Y8G("formGroup", e.formGroup),
                        t.R7$(),
                        t.Y8G("ngStyle", !e.enableDepositDetailFilter && t.lJ4(29, $t)),
                        t.R7$(),
                        t.Y8G(
                            "headerText",
                            t.bMT(3, 17, "account_enquiry_fda_sub_deposit_date_placeholder")
                        )("filterWeekends", e.filterWeekends)("minDate", e.minDate)(
                            "maxDate",
                            e.maxDepositDate
                        )("selectRange", e.selectRange),
                        t.R7$(2),
                        t.Y8G(
                            "headerText",
                            t.bMT(5, 19, "account_enquiry_fda_sub_maturity_date_placeholder")
                        )("filterWeekends", e.filterWeekends)("minDate", e.minDate)(
                            "maxDate",
                            e.maxDate
                        )("selectRange", e.selectRange),
                        t.R7$(2),
                        t.Y8G(
                            "placeholder",
                            t.bMT(7, 21, "account_enquiry_current_select_amount_placeholder")
                        )(
                            "minAmountLabelText",
                            t.bMT(8, 23, "account_enquiry_current_min_amount_label")
                        )(
                            "maxAmountLabelText",
                            t.bMT(9, 25, "account_enquiry_current_max_amount_label")
                        )(
                            "errorText",
                            t.bMT(
                                10,
                                27,
                                "Account_enquiry_filter_maximum_more_than_minimum_limit"
                            )
                        )("maxlength", 13);
                }
            }
            let jt = (() => {
                class l {
                    constructor(e, a, n, i) {
                        (this._datePipe = e),
                            (this._decimalPipe = a),
                            (this.translate = n),
                            (this.fb = i),
                            (this.data = []),
                            (this.defaultPageSize = 10),
                            (this.pageSize = 10),
                            (this.currentPage = 1),
                            (this.tablePropertyChanged = new t.bkB()),
                            (this.filterChanged = new t.bkB()),
                            (this.refreshData = new t.bkB()),
                            (this.isSorted = !1),
                            (this.formGroup = new _.J3({
                                depositDateControl: new _.hs(""),
                                maturityDateControl: new _.hs(""),
                                depositAmountControl: new _.hs(""),
                            })),
                            (this.formGroup = this.fb.group({
                                depositDateControl: null,
                                maturityDateControl: null,
                                depositAmountControl: null,
                            }));
                    }
                    ngOnChanges() {
                        (this.maxDepositDate = new Date()),
                            this.formGroup.valueChanges.subscribe((e) => {
                                this.onFilterChange(e);
                            }),
                            (0, D.isEmpty)(this.data) &&
                            !this.isAPIError &&
                            (this.emptyTableTextData = {
                                title: this.translate.instant(
                                    "account_enquiry_casa_no_deposit_label"
                                ),
                                subtitle: this.translate.instant(
                                    "account_enquiry_casa_no_deposit_remark_explainer"
                                ),
                                icon: "empty-tasks",
                            }),
                            (0, D.isEmpty)(this.data) &&
                            !0 === this.enableDepositDetailFilter &&
                            !this.isAPIError &&
                            (this.emptyTableTextData = {
                                title: "",
                                subtitle: this.translate.instant(
                                    "account_enquiry_fda_no_data_date_filter_remark_explainer_30024"
                                ),
                                icon: "empty-tasks",
                            });
                    }
                    refreshTbl() {
                        this.refreshData.emit();
                    }
                    getApiParams() {
                        return {
                            depositStartDate: this.depositStartDate,
                            depositEndDate: this.depositEndDate,
                            maturityStartDate: this.maturityStartDate,
                            maturityEndDate: this.maturityEndDate,
                            minAmount: this.minAmount,
                            maxAmount: this.maxAmount,
                            pageSize: this.pageableParam?.pageSize,
                            pageNumber: this.pageableParam?.pageNumber,
                            order: this.pageableParam?.order,
                            orderBy: this.pageableParam?.orderBy,
                            isSorted: this.isSorted,
                        };
                    }
                    onPageChanged(e) {
                        const a = this.getApiParams();
                        (this.currentPage = e),
                            (a.pageNumber = this.currentPage - 1),
                            this.tablePropertyChanged.emit(a);
                    }
                    onPageSizeChanged(e) {
                        const a = this.getApiParams();
                        (a.pageSize = e),
                            (a.pageNumber = 0),
                            (this.currentPage = 1),
                            this.tablePropertyChanged.emit(a);
                    }
                    onSortChanged(e) {
                        const a = this.getApiParams();
                        (a.isSorted = !0),
                            (a.order = e?.order),
                            (a.orderBy = e?.orderBy),
                            this.tablePropertyChanged.emit(a);
                    }
                    onRowClicked(e) {
                        this.tablePropertyChanged.emit(e);
                    }
                    onFilterChange(e) {
                        const a = this.getApiParams();
                        if (null !== e?.depositDateControl) {
                            const n = this.formatDate(
                                e?.depositDateControl?.start,
                                e?.depositDateControl?.end
                            );
                            (a.depositStartDate = n?.start), (a.depositEndDate = n?.end);
                        }
                        if (null !== e?.maturityDateControl) {
                            const n = this.formatDate(
                                e?.maturityDateControl?.start,
                                e?.maturityDateControl?.end
                            );
                            (a.maturityStartDate = n.start), (a.maturityEndDate = n.end);
                        }
                        null !== e?.depositAmountControl &&
                            ((a.minAmount =
                                0 !== e?.depositAmountControl?.minimumAmount
                                    ? e?.depositAmountControl?.minimumAmount
                                    : "0"),
                                (a.maxAmount = e?.depositAmountControl?.maximumAmount)),
                            this.filterChanged.emit(a);
                    }
                    formatDate(e, a) {
                        return {
                            start: this._datePipe.transform(e, "yyyy-MM-dd"),
                            end: this._datePipe.transform(a, "yyyy-MM-dd"),
                        };
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(o.vh),
                                t.rXU(o.QX),
                                t.rXU(p.c$),
                                t.rXU(_.ze)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-deposit-detail"]],
                            inputs: {
                                data: "data",
                                tableHeader: "tableHeader",
                                pageable: "pageable",
                                pageableParam: "pageableParam",
                                enablePagination: "enablePagination",
                                pageSizeOptions: "pageSizeOptions",
                                selectionMode: "selectionMode",
                                enableFilters: "enableFilters",
                                emptyTableTextData: "emptyTableTextData",
                                enableDepositDetailFilter: "enableDepositDetailFilter",
                                isAPIError: "isAPIError",
                                isDisplayFilter: "isDisplayFilter",
                            },
                            outputs: {
                                tablePropertyChanged: "tablePropertyChanged",
                                filterChanged: "filterChanged",
                                refreshData: "refreshData",
                            },
                            features: [t.OA$],
                            decls: 2,
                            vars: 12,
                            consts: [
                                [3, "formGroup", 4, "ngIf"],
                                [
                                    1,
                                    "remove-padding",
                                    3,
                                    "pageChanged",
                                    "pageSizeChanged",
                                    "sortChanged",
                                    "rowClicked",
                                    "refreshData",
                                    "data",
                                    "tableHeader",
                                    "totalItems",
                                    "enablePagination",
                                    "pageSizeOptions",
                                    "defaultPageSize",
                                    "pageSize",
                                    "totalPages",
                                    "currentPage",
                                    "selectionMode",
                                    "emptyTableTextData",
                                ],
                                [3, "formGroup"],
                                [
                                    "id",
                                    "deposit-detail-filter",
                                    1,
                                    "deposit-detail__filter",
                                    2,
                                    "display",
                                    "flex",
                                    "padding-bottom",
                                    "24px",
                                    "column-count",
                                    "3",
                                    "column-gap",
                                    "16px",
                                    3,
                                    "ngStyle",
                                ],
                                [
                                    "formControlName",
                                    "depositDateControl",
                                    "rangePicker",
                                    "",
                                    3,
                                    "headerText",
                                    "filterWeekends",
                                    "minDate",
                                    "maxDate",
                                    "selectRange",
                                ],
                                [
                                    "formControlName",
                                    "maturityDateControl",
                                    "rangePicker",
                                    "",
                                    3,
                                    "headerText",
                                    "filterWeekends",
                                    "minDate",
                                    "maxDate",
                                    "selectRange",
                                ],
                                [
                                    "formControlName",
                                    "depositAmountControl",
                                    3,
                                    "placeholder",
                                    "minAmountLabelText",
                                    "maxAmountLabelText",
                                    "errorText",
                                    "maxlength",
                                ],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    (t.DNE(0, Gt, 11, 30, "form", 0),
                                        t.j41(1, "ui-table", 1),
                                        t.bIt("pageChanged", function (r) {
                                            return n.onPageChanged(r);
                                        })("pageSizeChanged", function (r) {
                                            return n.onPageSizeChanged(r);
                                        })("sortChanged", function (r) {
                                            return n.onSortChanged(r);
                                        })("rowClicked", function (r) {
                                            return n.onRowClicked(r);
                                        })("refreshData", function () {
                                            return n.refreshTbl();
                                        }),
                                        t.k0s()),
                                    2 & a &&
                                    (t.Y8G("ngIf", n.isDisplayFilter),
                                        t.R7$(),
                                        t.Y8G("data", n.data)("tableHeader", n.tableHeader)(
                                            "totalItems",
                                            null == n.pageable ? null : n.pageable.totalElements
                                        )("enablePagination", n.enablePagination)(
                                            "pageSizeOptions",
                                            n.pageSizeOptions
                                        )("defaultPageSize", n.defaultPageSize)(
                                            "pageSize",
                                            (null == n.pageable ? null : n.pageable.pageSize) ||
                                            n.defaultPageSize
                                        )(
                                            "totalPages",
                                            null == n.pageable ? null : n.pageable.totalPages
                                        )("currentPage", n.currentPage)(
                                            "selectionMode",
                                            n.selectionMode
                                        )("emptyTableTextData", n.emptyTableTextData));
                            },
                            dependencies: [
                                o.bT,
                                o.B3,
                                et.F,
                                _.qT,
                                _.BC,
                                _.cb,
                                _.tU,
                                V.O,
                                L.O,
                                _.j4,
                                _.JD,
                                p.D9,
                            ],
                            styles: [
                                ".remove-padding[_ngcontent-%COMP%]{margin:0 -40px}.pt-4-px[_ngcontent-%COMP%]{padding-top:4px!important}",
                            ],
                        });
                    }
                }
                return l;
            })();
            var Nt = u(21626),
                wt = u(70152),
                O = u(97586),
                U = u(36920),
                qt = u(43919),
                Yt = u(3970);
            function Lt(l, s) {
                if ((1 & l && t.nrm(0, "div", 14), 2 & l)) {
                    const e = t.XpG(2);
                    t.xc7(
                        "background-image",
                        "url(" +
                        (e.transaction.to.billerIconUrl ||
                            e.transaction.to.categoryIconUrl) +
                        ")"
                    );
                }
            }
            function Bt(l, s) {
                if ((1 & l && (t.j41(0, "div", 15), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(), t.SpI(" ", e.generateIconText, " ");
                }
            }
            function Ut(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G("label", t.bMT(1, 2, "Pre-Advice Date"))(
                        "data",
                        e.preadviceDate
                    );
                }
            }
            function zt(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_scheduled_transaction_bulk_transfer_total_transaction_label"
                        )
                    )("data", e.transaction.totalTransaction);
                }
            }
            function Xt(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_transaction_panel_permutation_ref_id_one_label"
                        )
                    )("data", e.transaction.ref1);
                }
            }
            function Vt(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_transaction_panel_permutation_ref_id_two_label"
                        )
                    )("data", e.transaction.ref2);
                }
            }
            function Ht(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_transaction_panel_permutation_ref_id_three_label"
                        )
                    )("data", e.transaction.ref3);
                }
            }
            function Jt(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_transaction_panel_permutation_ref_id_four_label"
                        )
                    )("data", e.transaction.ref4);
                }
            }
            function Kt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 16),
                            t.nrm(1, "ktb-key-value", 9),
                            t.nI1(2, "translate"),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G("cols", 1)("gap", "1rem")("justifyContent", "start")(
                        "alignContent",
                        "start"
                    )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                2,
                                8,
                                "bill_payment_new_pay_bills_multiple_transaction_outcome_maker_payment_information_side_panel_note_label"
                            )
                        )("data", e.transaction.note);
                }
            }
            function Qt(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 1)(1, "div", 2)(2, "h5"),
                            t.EFF(3),
                            t.nI1(4, "translate"),
                            t.k0s()(),
                            t.j41(5, "div", 3),
                            t.DNE(6, Lt, 1, 2, "div", 4)(7, Bt, 2, 1, "div", 5),
                            t.j41(8, "div")(9, "p"),
                            t.EFF(10),
                            t.k0s(),
                            t.j41(11, "p"),
                            t.EFF(12),
                            t.k0s(),
                            t.j41(13, "p", 6),
                            t.EFF(14),
                            t.k0s()()(),
                            t.j41(15, "div", 7),
                            t.nrm(16, "ktb-key-value", 8)(17, "ktb-key-value", 9),
                            t.nI1(18, "translate"),
                            t.nrm(19, "ktb-key-value", 9),
                            t.nI1(20, "translate"),
                            t.k0s(),
                            t.nrm(21, "div", 10),
                            t.j41(22, "div", 7),
                            t.nrm(23, "ktb-key-value", 9)(24, "ktb-key-value", 9)(
                                25,
                                "ktb-key-value",
                                9
                            ),
                            t.nI1(26, "translate"),
                            t.DNE(27, Ut, 2, 4, "ktb-key-value", 11),
                            t.nrm(28, "ktb-key-value", 9),
                            t.nI1(29, "translate"),
                            t.DNE(30, zt, 2, 4, "ktb-key-value", 11)(
                                31,
                                Xt,
                                2,
                                4,
                                "ktb-key-value",
                                11
                            )(32, Vt, 2, 4, "ktb-key-value", 11),
                            t.k0s(),
                            t.j41(33, "div", 7)(34, "div", 12),
                            t.DNE(35, Ht, 2, 4, "ktb-key-value", 11),
                            t.k0s(),
                            t.j41(36, "div", 12),
                            t.DNE(37, Jt, 2, 4, "ktb-key-value", 11),
                            t.k0s()(),
                            t.DNE(38, Kt, 3, 10, "div", 13),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(
                            t.bMT(
                                4,
                                45,
                                "account_enquiry_transaction_panel_permutation_to_label"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "ngIf",
                            e.transaction.to.billerIconUrl || e.transaction.to.categoryIconUrl
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !e.transaction.to.billerIconUrl &&
                            !e.transaction.to.categoryIconUrl
                        ),
                        t.R7$(3),
                        t.JRh(e.transaction.to.name),
                        t.R7$(2),
                        t.JRh(e.transaction.to.compName),
                        t.R7$(2),
                        t.JRh(e.transaction.to.accountNo),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G("label", e.amountLabel)("data", e.amount),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(18, 47, "account_enquiry_casa_schedule_fee_label")
                        )("data", e.tax),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                20,
                                49,
                                "account_enquiry_transaction_panel_permutation_grand_total_label"
                            )
                        )("data", e.grandTotalAmount),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G("label", e.dateTimeLabel)("data", e.createdDateTime),
                        t.R7$(),
                        t.Y8G("label", e.valueDateLabel)(
                            "data",
                            "OUTSTANDING_BILL_PAYMENT" === e.serviceType
                                ? e.expiryDate
                                : e.valueDate
                        ),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                26,
                                51,
                                "account_enquiry_transaction_panel_permutation_service_type_label"
                            )
                        )("data", e.transaction.serviceName),
                        t.R7$(2),
                        t.Y8G("ngIf", "OUTWARD_REMITTANCE" === e.serviceType),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                29,
                                53,
                                "maker_new_pay_bills_single_transaction_outcome_summary_card_reference_no_label"
                            )
                        )("data", e.transaction.instructionRefNo),
                        t.R7$(2),
                        t.Y8G(
                            "ngIf",
                            null == e.transaction ? null : e.transaction.totalTransaction
                        ),
                        t.R7$(),
                        t.Y8G("ngIf", e.transaction.ref1),
                        t.R7$(),
                        t.Y8G("ngIf", e.transaction.ref2),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(2),
                        t.Y8G("ngIf", e.transaction.ref3),
                        t.R7$(2),
                        t.Y8G("ngIf", e.transaction.ref4),
                        t.R7$(),
                        t.Y8G("ngIf", e.transaction.note);
                }
            }
            function Wt(l, s) {
                if ((1 & l && t.nrm(0, "div", 14), 2 & l)) {
                    const e = t.XpG(2);
                    t.xc7(
                        "background-image",
                        "url(" +
                        ((null == e.transaction || null == e.transaction.to
                            ? null
                            : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)) +
                        ")"
                    );
                }
            }
            function Zt(l, s) {
                if ((1 & l && (t.j41(0, "div", 15), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(), t.SpI(" ", e.generateIconText, " ");
                }
            }
            function te(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_scheduled_transaction_bulk_transfer_total_transaction_label"
                        )
                    )("data", e.transaction.totalTransaction);
                }
            }
            function ee(l, s) {
                if (
                    (1 & l && (t.nrm(0, "ktb-key-value", 9), t.nI1(1, "translate")),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G(
                        "label",
                        t.bMT(
                            1,
                            2,
                            "account_enquiry_transaction_panel_permutation_total_document_label"
                        )
                    )("data", e.transaction.totalDocument);
                }
            }
            function ne(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 16)(1, "div", 12),
                            t.nrm(2, "ktb-key-value", 9),
                            t.nI1(3, "translate"),
                            t.k0s(),
                            t.j41(4, "div", 12),
                            t.nrm(5, "ktb-key-value", 9),
                            t.nI1(6, "translate"),
                            t.k0s(),
                            t.nrm(7, "ktb-key-value", 9),
                            t.nI1(8, "translate"),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                        "alignContent",
                        "start"
                    )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                3,
                                12,
                                "workflow_management_transactions_listing_table_title_value_date"
                            )
                        )("data", e.valueDate),
                        t.R7$(3),
                        t.Y8G(
                            "label",
                            t.bMT(
                                6,
                                14,
                                "account_enquiry_transaction_panel_permutation_service_type_label"
                            )
                        )("data", e.transaction.serviceName),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                8,
                                16,
                                "maker_new_pay_bills_single_transaction_outcome_summary_card_reference_no_label"
                            )
                        )("data", e.transaction.instructionRefNo);
                }
            }
            function ae(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 1)(1, "div", 2)(2, "h5"),
                            t.EFF(3),
                            t.nI1(4, "translate"),
                            t.k0s()(),
                            t.j41(5, "div", 3),
                            t.DNE(6, Wt, 1, 2, "div", 4)(7, Zt, 2, 1, "div", 5),
                            t.j41(8, "div")(9, "p"),
                            t.EFF(10),
                            t.k0s(),
                            t.j41(11, "p"),
                            t.EFF(12),
                            t.k0s(),
                            t.j41(13, "p", 6),
                            t.EFF(14),
                            t.k0s()()(),
                            t.j41(15, "div", 7),
                            t.DNE(16, te, 2, 4, "ktb-key-value", 11)(
                                17,
                                ee,
                                2,
                                4,
                                "ktb-key-value",
                                11
                            ),
                            t.j41(18, "div", 12),
                            t.nrm(19, "ktb-key-value", 9),
                            t.nI1(20, "translate"),
                            t.k0s()(),
                            t.j41(21, "div", 7),
                            t.nrm(22, "ktb-key-value", 8),
                            t.nI1(23, "translate"),
                            t.nrm(24, "ktb-key-value", 9),
                            t.nI1(25, "translate"),
                            t.nrm(26, "ktb-key-value", 9),
                            t.nI1(27, "translate"),
                            t.k0s(),
                            t.DNE(28, ne, 9, 18, "div", 13),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(
                            t.bMT(
                                4,
                                29,
                                "account_enquiry_transaction_panel_permutation_to_label"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "ngIf",
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !(
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.billerIconUrl) ||
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.categoryIconUrl)
                            )
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.name
                        ),
                        t.R7$(2),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.compName
                        ),
                        t.R7$(2),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.accountNo
                        ),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            null == e.transaction ? null : e.transaction.totalTransaction
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            null == e.transaction ? null : e.transaction.totalDocument
                        ),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                20,
                                31,
                                "single_payment_new_pay_bills_single_summary_summary_card_total_fee_label"
                            )
                        )("data", e.tax),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                23,
                                33,
                                "account_enquiry_transaction_panel_permutation_total_amount_label"
                            )
                        )("data", e.amount),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                25,
                                35,
                                "account_enquiry_transaction_panel_permutation_grand_total_label"
                            )
                        )("data", e.grandTotalAmount),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(27, 37, "quick_template_creation_date_time_label")
                        )("data", e.createdDateTime),
                        t.R7$(2),
                        t.Y8G("ngIf", e.transaction.note);
                }
            }
            var A = (function (l) {
                return (
                    (l.TRANSFER = "TRANSFER"),
                    (l.BULK_TRANSFER = "BULK_TRANSFER"),
                    (l.BILL_PAYMENT = "BILL_PAYMENT"),
                    (l.PAYROLL = "PAYROLL"),
                    (l.OUTWARD_REMITTANCE = "OUTWARD_REMITTANCE"),
                    (l.OUTSTANDING_BILL_PAYMENT = "OUTSTANDING_BILL_PAYMENT"),
                    l
                );
            })(A || {});
            let ie = (() => {
                class l {
                    constructor(e, a, n, i, r, m) {
                        (this.accountEnquiryService = e),
                            (this._decimalPipe = a),
                            (this._datePipe = n),
                            (this.facade = i),
                            (this.translate = r),
                            (this.analyticsService = m),
                            (this.transactionSubs = new N.yU());
                    }
                    ngOnInit() {
                        var e = this;
                        this.transactionSubs.add(
                            this.accountEnquiryService.historyRowClicked.subscribe(
                                (function () {
                                    var a = (0, g.A)(function* (n) {
                                        switch (
                                        ((e.transaction =
                                            yield e.facade.getScheduledTransactionDetail(
                                                n.scheduledTransactionRefId
                                            )),
                                            (e.serviceType = e.transaction?.serviceType),
                                            e.serviceType)
                                        ) {
                                            case A.TRANSFER:
                                            case A.BULK_TRANSFER:
                                                (e.amountLabel = e.translate.instant(
                                                    "account_enquiry_transaction_panel_permutation_transfer_amount_label"
                                                )),
                                                    (e.dateTimeLabel = e.translate.instant(
                                                        "account_enquiry_transaction_panel_permutation_create_datetime_label"
                                                    )),
                                                    (e.valueDateLabel = e.translate.instant(
                                                        "account_enquiry_current_value_date_label"
                                                    ));
                                                break;
                                            case A.BILL_PAYMENT:
                                                (e.amountLabel = e.translate.instant(
                                                    "account_enquiry_transaction_panel_permutation_payment_amount_label"
                                                )),
                                                    (e.valueDateLabel = e.translate.instant(
                                                        "account_enquiry_current_value_date_label"
                                                    )),
                                                    (e.dateTimeLabel = e.translate.instant(
                                                        "account_enquiry_transaction_panel_permutation_create_datetime_label"
                                                    ));
                                                break;
                                            case A.PAYROLL:
                                            case A.OUTWARD_REMITTANCE:
                                                (e.amountLabel = e.translate.instant(
                                                    "account_enquiry_transaction_panel_permutation_transfer_amount_label"
                                                )),
                                                    (e.dateTimeLabel = e.translate.instant(
                                                        "account_enquiry_transaction_panel_permutation_create_datetime_label"
                                                    )),
                                                    (e.valueDateLabel = e.translate.instant(
                                                        "account_enquiry_current_value_date_label"
                                                    ));
                                                break;
                                            case A.OUTSTANDING_BILL_PAYMENT:
                                                (e.amountLabel = e.translate.instant(
                                                    "account_enquiry_transaction_panel_permutation_payment_amount_label"
                                                )),
                                                    (e.dateTimeLabel = e.translate.instant(
                                                        "account_enquiry_scheduled_transaction_outstanding_payment_receiving_dateTime"
                                                    )),
                                                    (e.valueDateLabel = e.translate.instant(
                                                        "account_enquiry_scheduled_transaction_outstanding_payment_expiry_date"
                                                    ));
                                        }
                                    });
                                    return function (n) {
                                        return a.apply(this, arguments);
                                    };
                                })()
                            )
                        ),
                            this.getGATAgging();
                    }
                    getGATAgging() {
                        this.analyticsService.sendPageViewEvent(
                            "Account Enquiry_CASA_Scheduled_Details_SlidingBar"
                        );
                    }
                    get generateIconText() {
                        let e = "";
                        const a = this.transaction.to.name.split(" "),
                            n = a[0]?.[0],
                            i = a[1]?.[0];
                        return (e = (n || "") + (i || "")), e.toLocaleUpperCase();
                    }
                    get amount() {
                        const {
                            amount: e,
                            currency: a,
                            transferAmount: n,
                            transferCurrency: i,
                        } = this.transaction;
                        return e
                            ? n && i
                                ? "EIPP" === this.transaction?.serviceType
                                    ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                                    : `${this._decimalPipe.transform(
                                        e,
                                        "1.2-2"
                                    )} ${a}\n          (\u2248 ${this._decimalPipe.transform(
                                        n,
                                        "1.2-2"
                                    )} ${i})`
                                : `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : "-";
                    }
                    get tax() {
                        const { tax: e, currency: a } = this.transaction;
                        return e
                            ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : `0.00 ${a}`;
                    }
                    get grandTotalAmount() {
                        const { grandTotalAmount: e, currency: a } = this.transaction;
                        return e
                            ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : `0.00 ${a}`;
                    }
                    get createdDateTime() {
                        const { createdDateTime: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy HH:mm") : "-";
                    }
                    get valueDate() {
                        const { valueDate: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy") : "-";
                    }
                    get expiryDate() {
                        const { expiryDate: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy") : "-";
                    }
                    get preadviceDate() {
                        const { preadviceDate: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy") : "-";
                    }
                    ngOnDestroy() {
                        this.transactionSubs.unsubscribe();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(E.e),
                                t.rXU(o.QX),
                                t.rXU(o.vh),
                                t.rXU(d.j),
                                t.rXU(p.c$),
                                t.rXU(Y.c)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-scheduled-transaction-side-panel"]],
                            decls: 2,
                            vars: 2,
                            consts: [
                                ["class", "collapsible is-side-panel-content", 4, "ngIf"],
                                [1, "collapsible", "is-side-panel-content"],
                                [1, "title"],
                                [1, "account"],
                                ["class", "account-image", 3, "background-image", 4, "ngIf"],
                                ["class", "account-default", 4, "ngIf"],
                                [1, "account-number"],
                                [
                                    "uiGrid",
                                    "",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [1, "ws-pre-line", 3, "label", "data"],
                                [3, "label", "data"],
                                [1, "divider"],
                                [3, "label", "data", 4, "ngIf"],
                                [1, "column-blocks-wrapper"],
                                [
                                    "uiGrid",
                                    "",
                                    "class",
                                    "pad-top-24",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                    4,
                                    "ngIf",
                                ],
                                [1, "account-image"],
                                [1, "account-default"],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "pad-top-24",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                            ],
                            template: function (a, n) {
                                1 & a &&
                                    t.DNE(0, Qt, 39, 55, "div", 0)(1, ae, 29, 39, "div", 0),
                                    2 & a &&
                                    (t.Y8G(
                                        "ngIf",
                                        n.transaction &&
                                        "EIPP" !==
                                        (null == n.transaction
                                            ? null
                                            : n.transaction.serviceType)
                                    ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            "EIPP" ===
                                            (null == n.transaction
                                                ? null
                                                : n.transaction.serviceType)
                                        ));
                            },
                            dependencies: [o.bT, S._, w, p.D9],
                            styles: [
                                '.collapsible[_ngcontent-%COMP%]{padding:2.1428571429rem 2.8571428571rem;margin-bottom:2.8571428571rem;word-break:break-word;background-color:#fff}.collapsible[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;color:#002240}.collapsible[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]{display:block;font-size:1rem;line-height:1.4285714286;font-weight:300;color:#868686}.collapsible[_ngcontent-%COMP%]   .remove-collapsible-padding[_ngcontent-%COMP%]{margin-left:-2.8571428571rem;margin-right:-2.8571428571rem}[_nghost-%COMP%]     .body{border-top-color:transparent!important}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{margin-bottom:0;padding:1.7142857143rem 2.8571428571rem;background-color:transparent}.collapsible.is-side-panel-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}.collapsible.is-side-panel-content[_ngcontent-%COMP%]:not(.table-wrapper)   .content[_ngcontent-%COMP%]{padding-top:1.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table{background-color:transparent}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:not(:last-of-type) td{border-bottom:1px solid #e3e3e3}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:last-of-type td{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .table-footer{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .empty-table-display{padding-top:.7142857143rem;padding-bottom:.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .header{padding:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .body-content{padding-bottom:0}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{padding-top:0;padding-bottom:5rem}.column-blocks-wrapper[_ngcontent-%COMP%]{display:block}.column-blocks-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-bottom:1.7142857143rem}.row[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1.7142857143rem}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:before, [_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:after{content:""}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-container.is-disabled{opacity:1}.title[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:1rem;font-weight:700}.account[_ngcontent-%COMP%]{display:flex;margin-bottom:2rem}.account-image[_ngcontent-%COMP%]{background-size:cover;background-position:center;width:40px;height:40px;border-radius:50%;margin-right:1rem}.account-default[_ngcontent-%COMP%]{height:40px;width:40px;line-height:40px;text-align:center;border-radius:50%;background-color:#8ea2b7;color:#fff;cursor:default;margin-right:1rem}.account-number[_ngcontent-%COMP%]{color:#868686}.ws-pre-line[_ngcontent-%COMP%]{white-space:pre-line}.divider[_ngcontent-%COMP%]{margin:24px 0;border-bottom:1px solid #e3e3e3}.pad-top-24[_ngcontent-%COMP%]{padding-top:24px}',
                            ],
                        });
                    }
                }
                return l;
            })();
            var nt = u(48844),
                at = u(98760);
            const le = (l, s, e) => ({
                interestIndex: l,
                currentDate: s,
                interestRate: e,
            }),
                it = (l) => ({ informationDate: l });
            function oe(l, s) {
                if ((1 & l && (t.j41(0, "div", 36), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(),
                        t.JRh(
                            (null == e.transaction || null == e.transaction.loanInfo
                                ? null
                                : e.transaction.loanInfo.pnNumber) || "-"
                        );
                }
            }
            function re(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(),
                        t.SpI(
                            " ",
                            t.bMT(
                                2,
                                1,
                                "term_loan_upcoming_details_side_panel_content_effective_date"
                            ),
                            ""
                        ));
            }
            function se(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(),
                        t.SpI(
                            " ",
                            t.bMT(
                                2,
                                1,
                                "term_loan_draft_details_side_panel_content_label_effective_date"
                            ),
                            ""
                        ));
            }
            function ce(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(),
                        t.SpI(
                            " ",
                            t.bMT(
                                2,
                                1,
                                "term_loan_upcoming_details_side_panel_content_marturity_date"
                            ),
                            " "
                        ));
            }
            function ue(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(),
                        t.SpI(
                            " ",
                            t.bMT(2, 1, "promissory_note_maturity_date_details"),
                            " "
                        ));
            }
            function de(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(), t.SpI(" ", t.bMT(2, 1, "term_loan_tenor_details"), ""));
            }
            function _e(l, s) {
                1 & l && (t.j41(0, "label"), t.EFF(1), t.nI1(2, "translate"), t.k0s()),
                    2 & l &&
                    (t.R7$(),
                        t.SpI(" ", t.bMT(2, 1, "promissory_note_pn_tenor_details"), ""));
            }
            function pe(l, s) {
                if ((1 & l && (t.j41(0, "div"), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(),
                        t.SpI(" ", e.transaction.loanInfo.repaymentTenure || "-", " ");
                }
            }
            function me(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div")(1, "label"),
                            t.EFF(2),
                            t.nI1(3, "translate"),
                            t.k0s(),
                            t.j41(4, "div"),
                            t.EFF(5),
                            t.k0s()()),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                3,
                                2,
                                "term_loan_draft_details_side_panel_content_label_auto_repayment_account"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.JRh(e.transaction.loanInfo.autoRepaymentAccountNo);
                }
            }
            function ge(l, s) {
                1 & l &&
                    (t.j41(0, "div", 28)(1, "div"),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s()()),
                    2 & l &&
                    (t.Y8G("cols", 1)("gap", "2px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                3,
                                3,
                                "promissory_note_loan_manual_repayment_at_call_last_installment_new_text"
                            ),
                            " "
                        ));
            }
            function he(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 31)(1, "p"),
                            t.EFF(2),
                            t.nI1(3, "translate"),
                            t.k0s(),
                            t.j41(4, "div"),
                            t.EFF(5),
                            t.k0s()()),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.R7$(2),
                        t.JRh(
                            t.bMT(
                                3,
                                3,
                                "term_loan_draft_details_side_panel_content_label_prepayment_fee"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            e.transformAmount(
                                e.transaction.currency,
                                e.transaction.repaymentInfo.repaymentSummary.prePaymentFee
                            ),
                            " ",
                            e.transaction.currency,
                            " "
                        );
                }
            }
            function fe(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h5"),
                            t.EFF(4),
                            t.nI1(5, "translate"),
                            t.k0s()(),
                            t.j41(6, "div", 7)(7, "div", 8)(8, "div", 9),
                            t.nrm(9, "ui-initials-image", 10),
                            t.j41(10, "div", 11),
                            t.DNE(11, oe, 2, 1, "div", 12),
                            t.j41(12, "div", 13),
                            t.EFF(13),
                            t.k0s(),
                            t.j41(14, "div"),
                            t.EFF(15),
                            t.k0s()()()()()(),
                            t.j41(16, "div", 5)(17, "ui-collapsible", 14)(18, "div", 6)(
                                19,
                                "h5"
                            ),
                            t.EFF(20),
                            t.nI1(21, "translate"),
                            t.k0s()(),
                            t.j41(22, "div", 7)(23, "div", 15)(24, "div")(25, "label"),
                            t.EFF(26),
                            t.nI1(27, "translate"),
                            t.k0s(),
                            t.j41(28, "div"),
                            t.EFF(29),
                            t.k0s()()(),
                            t.j41(30, "div", 15)(31, "div"),
                            t.DNE(32, re, 3, 3, "label", 16)(33, se, 3, 3, "label", 16),
                            t.j41(34, "div"),
                            t.EFF(35),
                            t.nI1(36, "date"),
                            t.k0s()(),
                            t.j41(37, "div"),
                            t.DNE(38, ce, 3, 3, "label", 16)(39, ue, 3, 3, "label", 16),
                            t.j41(40, "div"),
                            t.EFF(41),
                            t.k0s()(),
                            t.j41(42, "div"),
                            t.DNE(43, de, 3, 3, "label", 16)(44, _e, 3, 3, "label", 16)(
                                45,
                                pe,
                                2,
                                1,
                                "div",
                                16
                            ),
                            t.k0s(),
                            t.j41(46, "div")(47, "label"),
                            t.EFF(48),
                            t.nI1(49, "translate"),
                            t.k0s(),
                            t.j41(50, "span", null, 0),
                            t.nrm(52, "ui-icon", 17),
                            t.k0s(),
                            t.j41(53, "div", 18)(54, "div", 19)(55, "div", 20),
                            t.EFF(56),
                            t.nI1(57, "translate"),
                            t.k0s(),
                            t.j41(58, "div", 21),
                            t.EFF(59),
                            t.k0s(),
                            t.j41(60, "div"),
                            t.EFF(61),
                            t.nI1(62, "translate"),
                            t.k0s(),
                            t.j41(63, "div", 22),
                            t.EFF(64),
                            t.k0s(),
                            t.j41(65, "div"),
                            t.EFF(66),
                            t.nI1(67, "translate"),
                            t.k0s(),
                            t.j41(68, "div", 22),
                            t.EFF(69),
                            t.k0s(),
                            t.j41(70, "div"),
                            t.EFF(71),
                            t.nI1(72, "translate"),
                            t.k0s(),
                            t.j41(73, "div", 22),
                            t.EFF(74),
                            t.k0s(),
                            t.j41(75, "div"),
                            t.EFF(76),
                            t.nI1(77, "translate"),
                            t.k0s(),
                            t.j41(78, "div", 22),
                            t.EFF(79),
                            t.k0s()()(),
                            t.j41(80, "div"),
                            t.EFF(81),
                            t.k0s()(),
                            t.j41(82, "div")(83, "label"),
                            t.EFF(84),
                            t.nI1(85, "translate"),
                            t.k0s(),
                            t.j41(86, "span", null, 1),
                            t.nrm(88, "ui-icon", 17),
                            t.k0s(),
                            t.j41(89, "div", 18)(90, "div", 19)(91, "div"),
                            t.EFF(92),
                            t.nI1(93, "translate"),
                            t.k0s(),
                            t.j41(94, "div", 22),
                            t.EFF(95),
                            t.k0s(),
                            t.j41(96, "div"),
                            t.EFF(97),
                            t.nI1(98, "translate"),
                            t.k0s(),
                            t.j41(99, "div", 22),
                            t.EFF(100),
                            t.k0s()(),
                            t.j41(101, "div")(102, "div"),
                            t.EFF(103),
                            t.nI1(104, "date"),
                            t.nI1(105, "translate"),
                            t.k0s()()(),
                            t.j41(106, "div"),
                            t.EFF(107),
                            t.k0s()(),
                            t.j41(108, "div")(109, "label"),
                            t.EFF(110),
                            t.nI1(111, "translate"),
                            t.k0s(),
                            t.j41(112, "div"),
                            t.nrm(113, "ui-icon", 23),
                            t.EFF(114),
                            t.k0s(),
                            t.j41(115, "div", 24),
                            t.EFF(116),
                            t.nI1(117, "translate"),
                            t.k0s()()(),
                            t.j41(118, "div", 15)(119, "div")(120, "label"),
                            t.EFF(121),
                            t.nI1(122, "translate"),
                            t.k0s(),
                            t.j41(123, "div"),
                            t.EFF(124),
                            t.nI1(125, "translate"),
                            t.nI1(126, "translate"),
                            t.k0s()(),
                            t.DNE(127, me, 6, 4, "div", 16),
                            t.k0s()()()(),
                            t.j41(128, "div", 5)(129, "ui-collapsible", 14)(130, "div", 6)(
                                131,
                                "h5"
                            ),
                            t.EFF(132),
                            t.nI1(133, "translate"),
                            t.k0s()(),
                            t.j41(134, "div", 7)(135, "div", 25)(136, "div", 26)(137, "div")(
                                138,
                                "label"
                            ),
                            t.EFF(139),
                            t.nI1(140, "translate"),
                            t.k0s(),
                            t.j41(141, "span", null, 2),
                            t.nrm(143, "ui-icon", 27),
                            t.k0s(),
                            t.j41(144, "div", 18)(145, "div", 19)(146, "div", 20),
                            t.EFF(147),
                            t.nI1(148, "translate"),
                            t.k0s(),
                            t.j41(149, "div", 21),
                            t.EFF(150),
                            t.k0s(),
                            t.j41(151, "div"),
                            t.EFF(152),
                            t.nI1(153, "translate"),
                            t.k0s(),
                            t.j41(154, "div", 22),
                            t.EFF(155),
                            t.k0s(),
                            t.j41(156, "div"),
                            t.EFF(157),
                            t.nI1(158, "translate"),
                            t.k0s(),
                            t.j41(159, "div", 22),
                            t.EFF(160),
                            t.k0s(),
                            t.j41(161, "div"),
                            t.EFF(162),
                            t.nI1(163, "translate"),
                            t.k0s(),
                            t.j41(164, "div", 22),
                            t.EFF(165),
                            t.k0s(),
                            t.j41(166, "div"),
                            t.EFF(167),
                            t.nI1(168, "translate"),
                            t.k0s(),
                            t.j41(169, "div", 22),
                            t.EFF(170),
                            t.k0s()(),
                            t.j41(171, "div", 28)(172, "div"),
                            t.EFF(173),
                            t.nI1(174, "date"),
                            t.nI1(175, "translate"),
                            t.k0s()(),
                            t.DNE(176, ge, 4, 5, "div", 29),
                            t.k0s(),
                            t.j41(177, "div"),
                            t.EFF(178),
                            t.k0s()(),
                            t.j41(179, "div")(180, "label"),
                            t.EFF(181),
                            t.nI1(182, "translate"),
                            t.k0s(),
                            t.j41(183, "div"),
                            t.EFF(184),
                            t.nI1(185, "date"),
                            t.k0s()()(),
                            t.j41(186, "div", 26)(187, "div")(188, "label"),
                            t.EFF(189),
                            t.nI1(190, "translate"),
                            t.k0s(),
                            t.j41(191, "div"),
                            t.EFF(192),
                            t.k0s()(),
                            t.j41(193, "div")(194, "label"),
                            t.EFF(195),
                            t.nI1(196, "translate"),
                            t.k0s(),
                            t.j41(197, "div"),
                            t.EFF(198),
                            t.nI1(199, "date"),
                            t.k0s()()(),
                            t.j41(200, "div", 15)(201, "div")(202, "label"),
                            t.EFF(203),
                            t.nI1(204, "translate"),
                            t.k0s(),
                            t.j41(205, "div"),
                            t.EFF(206),
                            t.k0s()()(),
                            t.j41(207, "div", 30)(208, "div", 31)(209, "h5"),
                            t.EFF(210),
                            t.nI1(211, "translate"),
                            t.k0s()(),
                            t.j41(212, "div", 31)(213, "p"),
                            t.EFF(214),
                            t.nI1(215, "translate"),
                            t.k0s(),
                            t.j41(216, "div"),
                            t.EFF(217),
                            t.k0s()(),
                            t.j41(218, "div", 31)(219, "p"),
                            t.EFF(220),
                            t.nI1(221, "translate"),
                            t.k0s(),
                            t.j41(222, "div"),
                            t.EFF(223),
                            t.k0s()(),
                            t.j41(224, "div", 31)(225, "p"),
                            t.EFF(226),
                            t.nI1(227, "translate"),
                            t.k0s(),
                            t.j41(228, "div"),
                            t.EFF(229),
                            t.k0s()(),
                            t.j41(230, "div", 31)(231, "p"),
                            t.EFF(232),
                            t.nI1(233, "translate"),
                            t.k0s(),
                            t.j41(234, "div"),
                            t.EFF(235),
                            t.k0s()(),
                            t.DNE(236, he, 6, 5, "div", 32),
                            t.j41(237, "div", 33)(238, "h6"),
                            t.EFF(239),
                            t.nI1(240, "translate"),
                            t.k0s(),
                            t.j41(241, "h5"),
                            t.EFF(242),
                            t.k0s()()(),
                            t.j41(243, "label", 34),
                            t.nrm(244, "ui-icon", 35),
                            t.EFF(245),
                            t.nI1(246, "date"),
                            t.nI1(247, "translate"),
                            t.k0s()()()()()()),
                        2 & l)
                ) {
                    const e = t.sdS(51),
                        a = t.sdS(87),
                        n = t.sdS(142),
                        i = t.XpG();
                    t.R7$(4),
                        t.JRh(
                            t.bMT(
                                5,
                                131,
                                "term_loan_repayment_scheduled_transactions_details_repay_to_label"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 1)("gap", "24px"),
                        t.R7$(2),
                        t.Y8G(
                            "name",
                            null == i.transaction || null == i.transaction.to
                                ? null
                                : i.transaction.to.name
                        ),
                        t.R7$(2),
                        t.Y8G("ngIf", i.isPromissoryNote),
                        t.R7$(),
                        t.Y8G("ngClass", i.isPromissoryNote ? "" : "color-precious-blue"),
                        t.R7$(),
                        t.JRh(
                            (null == i.transaction || null == i.transaction.to
                                ? null
                                : i.transaction.to.name) || "-"
                        ),
                        t.R7$(2),
                        t.JRh(
                            (null == i.transaction || null == i.transaction.to
                                ? null
                                : i.transaction.to.accountNo) || "-"
                        ),
                        t.R7$(2),
                        t.Y8G("defaultState", i.defaultState),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                21,
                                133,
                                "term_loan_draft_details_side_panel_content_collapse_loan_information"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                27,
                                135,
                                "term_loan_draft_details_side_panel_content_label_account_type"
                            )
                        ),
                        t.R7$(3),
                        t.JRh(
                            (null == i.transaction ||
                                null == i.transaction.loanInfo ||
                                null == i.transaction.loanInfo.loanType
                                ? null
                                : i.transaction.loanInfo.loanType.label) || "-"
                        ),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(2),
                        t.Y8G("ngIf", !i.isPromissoryNote),
                        t.R7$(),
                        t.Y8G("ngIf", i.isPromissoryNote),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.i5U(
                                36,
                                137,
                                null == i.transaction || null == i.transaction.loanInfo
                                    ? null
                                    : i.transaction.loanInfo.effectiveDate,
                                "dd LLL yyyy"
                            ) || "-",
                            " "
                        ),
                        t.R7$(3),
                        t.Y8G("ngIf", !i.isPromissoryNote),
                        t.R7$(),
                        t.Y8G("ngIf", i.isPromissoryNote),
                        t.R7$(2),
                        t.JRh(i.maturityDate),
                        t.R7$(2),
                        t.Y8G("ngIf", !i.isPromissoryNote),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            i.isPromissoryNote &&
                            !(
                                null != i.transaction &&
                                null != i.transaction.loanInfo &&
                                i.transaction.loanInfo.isAtCall
                            )
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !i.isPromissoryNote ||
                            (i.isPromissoryNote &&
                                !(
                                    null != i.transaction &&
                                    null != i.transaction.loanInfo &&
                                    i.transaction.loanInfo.isAtCall
                                ))
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                49,
                                140,
                                "term_loan_draft_details_side_panel_content_label_total_out_amount"
                            ),
                            ""
                        ),
                        t.R7$(5),
                        t.Y8G("uiTooltip", "dark")("target", e)("placement", "bottom"),
                        t.R7$(),
                        t.Y8G("cols", 2)("gap", "2px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                57,
                                142,
                                "term_loan_account_section_table_header_outstanding_balance"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount.total
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                62,
                                144,
                                "term_loan_repayment_tooltip_outstanding_principal_label"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount
                                        .outstandingPrincipal
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                67,
                                146,
                                "term_loan_repayment_tooltip_accrual_interest_label"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount
                                        .accrualInterest
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(72, 148, "term_loan_repayment_tooltip_late_charge_label"),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount.lateCharge
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(77, 150, "term_loan_repayment_tooltip_misc_charge_label"),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount
                                        .miscellaneousCharge
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.loanInfo ||
                                    null == i.transaction.loanInfo.totalOutstandingAmount
                                    ? null
                                    : i.transaction.loanInfo.totalOutstandingAmount.total
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                85,
                                152,
                                "term_loan_repayment_upcoming_detail_interest_rate"
                            ),
                            ""
                        ),
                        t.R7$(5),
                        t.Y8G("uiTooltip", "dark")("target", a)("placement", "bottom"),
                        t.R7$(),
                        t.Y8G("cols", 2)("gap", "2px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                93,
                                154,
                                "term_loan_transaction_repayment_summary_tooltip_interest_index"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == i.transaction ||
                                null == i.transaction.loanInfo ||
                                null == i.transaction.loanInfo.interestRate
                                ? null
                                : i.transaction.loanInfo.interestRate.interestIndex
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                98,
                                156,
                                "term_loan_transaction_repayment_summary_tooltip_interest_spread"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == i.transaction ||
                                null == i.transaction.loanInfo ||
                                null == i.transaction.loanInfo.interestRate
                                ? null
                                : i.transaction.loanInfo.interestRate.interestSpread
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.i5U(
                                105,
                                161,
                                "term_loan_draft_details_side_panel_interest_rate_tooltip",
                                t.sMw(
                                    226,
                                    le,
                                    null == i.transaction ||
                                        null == i.transaction.loanInfo ||
                                        null == i.transaction.loanInfo.interestRate
                                        ? null
                                        : i.transaction.loanInfo.interestRate.interestIndex,
                                    t.i5U(
                                        104,
                                        158,
                                        null == i.transaction ||
                                            null == i.transaction.loanInfo ||
                                            null == i.transaction.loanInfo.interestRate
                                            ? null
                                            : i.transaction.loanInfo.interestRate.rateDate,
                                        "dd MMM y"
                                    ),
                                    null == i.transaction ||
                                        null == i.transaction.loanInfo ||
                                        null == i.transaction.loanInfo.interestRate
                                        ? null
                                        : i.transaction.loanInfo.interestRate.morRate
                                )
                            ),
                            " "
                        ),
                        t.R7$(4),
                        t.JRh(
                            (null == i.transaction ||
                                null == i.transaction.loanInfo ||
                                null == i.transaction.loanInfo.interestRate
                                ? null
                                : i.transaction.loanInfo.interestRate.rate) + " %"
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                111,
                                164,
                                "term_loan_draft_details_side_panel_content_label_currency"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "name",
                            i.transaction.currency
                                ? i.currencyIcon[i.transaction.currency]
                                : "country-default"
                        ),
                        t.R7$(),
                        t.SpI("", i.transaction.currency, " "),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            i.transaction.currency
                                ? t.bMT(
                                    117,
                                    166,
                                    "term_loan_draft_details_side_panel_currency_name_label_" +
                                    i.transaction.currency
                                )
                                : "",
                            " "
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                122,
                                168,
                                "term_loan_draft_details_side_panel_content_label_auto_repayment"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            i.transaction.loanInfo.isAutoRepayment
                                ? t.bMT(
                                    125,
                                    170,
                                    "term_loan_draft_details_side_panel_content_auto_repayment_value_yes"
                                )
                                : t.bMT(
                                    126,
                                    172,
                                    "term_loan_draft_details_side_panel_content_auto_repayment_value_no"
                                ),
                            " "
                        ),
                        t.R7$(3),
                        t.Y8G("ngIf", i.transaction.loanInfo.isAutoRepayment),
                        t.R7$(2),
                        t.Y8G("defaultState", i.defaultState),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(133, 174, "promissory_note_repayment_information_details")
                        ),
                        t.R7$(4),
                        t.Y8G("cols", 2)("gap", "24px"),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                140,
                                176,
                                "term_loan_repayment_draft_details_side_panel_content_label_total_amount_due"
                            )
                        ),
                        t.R7$(5),
                        t.Y8G("uiTooltip", "dark")("target", n)("placement", "bottom"),
                        t.R7$(),
                        t.Y8G("cols", 2)("gap", "2px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                148,
                                178,
                                "term_loan_draft_details_side_panel_content_label_total_amount_due"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.repaymentInfo ||
                                    null == i.transaction.repaymentInfo.totalAmountDue
                                    ? null
                                    : i.transaction.repaymentInfo.totalAmountDue.total
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                153,
                                180,
                                "term_loan_draft_details_side_panel_content_label_principal_amount"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.repaymentInfo ||
                                    null == i.transaction.repaymentInfo.totalAmountDue
                                    ? null
                                    : i.transaction.repaymentInfo.totalAmountDue.principalAmount
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                158,
                                182,
                                "term_loan_draft_details_side_panel_content_label_accrual_interest"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.repaymentInfo ||
                                    null == i.transaction.repaymentInfo.totalAmountDue
                                    ? null
                                    : i.transaction.repaymentInfo.totalAmountDue.interestAmount
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                163,
                                184,
                                "term_loan_draft_details_side_panel_content_label_late_charge"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.repaymentInfo ||
                                    null == i.transaction.repaymentInfo.totalAmountDue
                                    ? null
                                    : i.transaction.repaymentInfo.totalAmountDue.lateCharge
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                168,
                                186,
                                "term_loan_draft_details_side_panel_content_label_misc_charges_fee"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                null == i.transaction ||
                                    null == i.transaction.repaymentInfo ||
                                    null == i.transaction.repaymentInfo.totalAmountDue
                                    ? null
                                    : i.transaction.repaymentInfo.totalAmountDue
                                        .miscellaneousCharge
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "2px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.i5U(
                                175,
                                191,
                                "promissory_note_static_remark_details",
                                t.eq3(
                                    230,
                                    it,
                                    t.i5U(
                                        174,
                                        188,
                                        null == i.transaction ||
                                            null == i.transaction.loanInfo ||
                                            null == i.transaction.loanInfo.interestRate
                                            ? null
                                            : i.transaction.loanInfo.interestRate.rateDate,
                                        "dd MMM y"
                                    )
                                )
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "ngIf",
                            i.isPromissoryNoteRepayment &&
                            (null == i.transaction || null == i.transaction.repaymentInfo
                                ? null
                                : i.transaction.repaymentInfo.isPayOff) &&
                            (null == i.transaction || null == i.transaction.loanInfo
                                ? null
                                : i.transaction.loanInfo.isAtCall)
                        ),
                        t.R7$(2),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.repaymentInfo.totalAmountDue.total
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(182, 194, "term_loan_upcoming_payment_table_head_due_date")
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.i5U(
                                185,
                                196,
                                i.transaction.repaymentInfo.dueDate,
                                "dd LLL yyyy"
                            )
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 2)("gap", "24px"),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                190,
                                199,
                                "term_loan_repayment_draft_details_side_panel_content_label_repayment_amount"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.transferAmount
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                196,
                                201,
                                "term_loan_repayment_draft_details_side_panel_content_label_value_date"
                            )
                        ),
                        t.R7$(3),
                        t.JRh(t.i5U(199, 203, i.transaction.valueDate, "dd LLL yyyy")),
                        t.R7$(2),
                        t.Y8G("cols", 1)("gap", "24px"),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                204,
                                206,
                                "term_loan_draft_details_side_panel_content_label_note"
                            )
                        ),
                        t.R7$(3),
                        t.JRh((null == i.transaction ? null : i.transaction.note) || "-"),
                        t.R7$(4),
                        t.JRh(
                            t.bMT(
                                211,
                                208,
                                "term_loan_repayment_draft_details_side_panel_content_label_repayment_summary"
                            )
                        ),
                        t.R7$(4),
                        t.JRh(
                            t.bMT(
                                215,
                                210,
                                "term_loan_draft_details_side_panel_content_label_principal_amount"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.repaymentInfo.repaymentSummary.principalAmount
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                221,
                                212,
                                "term_loan_draft_details_side_panel_content_label_accrual_interest"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.repaymentInfo.repaymentSummary.accrualInterest
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                227,
                                214,
                                "term_loan_draft_details_side_panel_content_label_late_charge"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            0 !== i.transaction.repaymentInfo.repaymentSummary.lateCharge
                                ? i.transformAmount(
                                    i.transaction.currency,
                                    i.transaction.repaymentInfo.repaymentSummary.lateCharge
                                )
                                : "0.00",
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(t.bMT(233, 216, "promissory_note_misc_charges_details")),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.repaymentInfo.repaymentSummary.miscellaneousCharge
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            i.transaction.repaymentInfo.repaymentSummary.prePaymentFee > 0
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                240,
                                218,
                                "term_loan_repayment_details_repayment_amount_label"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            i.transformAmount(
                                i.transaction.currency,
                                i.transaction.transferAmount
                            ),
                            " ",
                            i.transaction.currency,
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.i5U(
                                247,
                                223,
                                "term_loan_repayment_details_side_panel_pay_off_note",
                                t.eq3(232, it, t.i5U(246, 220, i.todaysDate, "dd LLL yyyy"))
                            ),
                            " "
                        );
                }
            }
            let be = (() => {
                class l {
                    get isPromissoryNote() {
                        return (
                            this.transaction?.loanInfo?.loanType?.value ===
                            U.iH.PROMISSORY_NOTE
                        );
                    }
                    get maturityDate() {
                        return this.transaction?.loanInfo?.isAtCall
                            ? this.translate.instant(
                                "promissory_note_new_pn_request_input_details_pn_request_info_at_call"
                            )
                            : this.datePipe.transform(
                                this.transaction?.loanInfo?.maturityDate,
                                "dd MMM yyyy"
                            );
                    }
                    constructor(e, a, n, i) {
                        (this.facade = e),
                            (this._decimalPipe = a),
                            (this.translate = n),
                            (this.datePipe = i),
                            (this.transaction = []),
                            (this.currencyIcon = f.VR),
                            (this.interstrateValues = []),
                            (this.defaultState = "expand"),
                            (this.todaysDate = new Date());
                    }
                    ngOnInit() {
                        this.getTransctionDetails();
                    }
                    getTransctionDetails() {
                        var e = this;
                        return (0, g.A)(function* () {
                            const { scheduledTransactionRefId: a } =
                                e.scheduleTransactionData;
                            (e.transaction = yield e.facade.getScheduledTransactionDetail(a)),
                                (e.valueDate = e.scheduleTransactionData.valueDate),
                                e.interstrateValues.push(e.transaction.loanInfo.interestRate);
                        })();
                    }
                    transformAmount(e, a) {
                        let n = "";
                        return (
                            (n = a
                                ? this._decimalPipe.transform(
                                    a,
                                    "JPY" === e ? "1.0-0" : "1.2-2"
                                )
                                : "0.00"),
                            n
                        );
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(d.j),
                                t.rXU(o.QX),
                                t.rXU(p.c$),
                                t.rXU(o.vh)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-single-scheduled-transaction-side-panel"]],
                            inputs: { scheduleTransactionData: "scheduleTransactionData" },
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["totalOutstandingTooltip", ""],
                                ["interestRateTooltip", ""],
                                ["totalAmountDueTooltip", ""],
                                ["class", "accountdeatils", 4, "ngIf"],
                                [1, "accountdeatils"],
                                [1, "collapsible"],
                                ["slot-header", ""],
                                ["slot-body", ""],
                                ["uiGrid", "", 1, "mt-12px", 3, "cols", "gap"],
                                [1, "accountdetals"],
                                [3, "name"],
                                [1, "ml-1"],
                                ["class", "color-precious-blue", 4, "ngIf"],
                                [3, "ngClass"],
                                [3, "defaultState"],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "mt-12px",
                                    "text-data",
                                    "color-precious-blue",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [4, "ngIf"],
                                [
                                    "name",
                                    "info",
                                    1,
                                    "mlt-3px",
                                    "color-medium-blue",
                                    "font-size-16px",
                                ],
                                [1, "tooltip-text", 3, "uiTooltip", "target", "placement"],
                                ["uiGrid", "", 3, "cols", "gap"],
                                [1, "tooltip-bold"],
                                [1, "right-align", "tooltip-bold"],
                                [1, "right-align"],
                                [1, "currency-icon", 3, "name"],
                                [1, "ml-35", "text-data-12px", "color-medium-grey"],
                                [1, "mt-12px"],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "mt-12px",
                                    "text-data",
                                    "color-precious-blue",
                                    "mt-24px",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [
                                    "name",
                                    "info",
                                    1,
                                    "mlt-3px",
                                    "color-precious-blue",
                                    "font-size-16px",
                                ],
                                ["uiGrid", "", 1, "remark-container", 3, "cols", "gap"],
                                [
                                    "uiGrid",
                                    "",
                                    "class",
                                    "remark-container",
                                    3,
                                    "cols",
                                    "gap",
                                    4,
                                    "ngIf",
                                ],
                                [1, "mt-12px", "text-data", "color-precious-blue", "mt-24px"],
                                [1, "repayment-summary"],
                                ["class", "repayment-summary", 4, "ngIf"],
                                [1, "repayment-summary", "grandtotal"],
                                [1, "fotter_label"],
                                ["name", "info", 1, "mr-7px", "color-medium-grey"],
                                [1, "color-precious-blue"],
                            ],
                            template: function (a, n) {
                                1 & a && t.DNE(0, fe, 248, 234, "div", 3),
                                    2 & a && t.Y8G("ngIf", n.transaction);
                            },
                            dependencies: [
                                o.YU,
                                o.bT,
                                x.G,
                                nt.g,
                                S._,
                                B.b6,
                                at.w,
                                o.vh,
                                p.D9,
                            ],
                            styles: [
                                ".accountdeatils[_ngcontent-%COMP%]{margin-bottom:112px}.accountdeatils[_ngcontent-%COMP%]   .collapsible[_ngcontent-%COMP%]{padding:24px 42.29px 24px 40px;border-bottom:1px solid #e3e3e3}.accountdeatils[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#002240;font-weight:700;font-size:20px;line-height:28px}.accountdeatils[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%]{margin-left:5px}.accountdeatils[_ngcontent-%COMP%]   .fotter_label[_ngcontent-%COMP%]{font-size:12px;display:flex;align-items:baseline;margin-bottom:15px}.accountdeatils[_ngcontent-%COMP%]   .mr-7px[_ngcontent-%COMP%]{margin-right:7px}.accountdetals[_ngcontent-%COMP%]{display:flex}.ml-2[_ngcontent-%COMP%]{margin-left:12px}.color-precious-blue[_ngcontent-%COMP%]{color:#002240;font-size:16px}.collapsible[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#868686;font-weight:400;font-size:14px;line-height:20px;font-family:Krungthai Fast,sans-serif}.mt-24px[_ngcontent-%COMP%]{margin-top:24px}.mt-12px[_ngcontent-%COMP%]{margin-top:15px}.repayment-summary[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-top:1px solid #e3e3e3;padding:20px 10px}.grandtotal[_ngcontent-%COMP%]{background-color:#e4e8ed;margin-bottom:20px}.grandtotal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .grandtotal[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#003258;font-weight:900}.font-size-16px[_ngcontent-%COMP%]{font-size:16px}.mlt-3px[_ngcontent-%COMP%]{margin-left:3px;margin-top:3px}.color-medium-grey[_ngcontent-%COMP%]{color:#868686}.text-data-12px[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:18px}.ml-35[_ngcontent-%COMP%]{margin-left:35px}.currency-icon[_ngcontent-%COMP%]{margin-top:2px;margin-right:5px;font-size:30px}.tooltip-bold[_ngcontent-%COMP%]{color:#ffcb00}.tooltip-text[_ngcontent-%COMP%]{font-size:16px}.right-align[_ngcontent-%COMP%]{text-align:right}.remark-container[_ngcontent-%COMP%]{display:flex;margin-top:1rem;font-size:13px;font-weight:400}.remark-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{line-height:1.3rem}",
                            ],
                        });
                    }
                }
                return l;
            })();
            function ye(l, s) {
                if ((1 & l && t.nrm(0, "div", 12), 2 & l)) {
                    const e = t.XpG(2);
                    t.xc7(
                        "background-image",
                        "url(" +
                        ((null == e.transaction || null == e.transaction.to
                            ? null
                            : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)) +
                        ")"
                    );
                }
            }
            function Ce(l, s) {
                if ((1 & l && (t.j41(0, "div", 13), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(), t.SpI(" ", e.generateIconText, " ");
                }
            }
            function ve(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 1)(1, "div", 2)(2, "h5"),
                            t.EFF(3),
                            t.nI1(4, "translate"),
                            t.k0s()(),
                            t.j41(5, "div", 3),
                            t.DNE(6, ye, 1, 2, "div", 4)(7, Ce, 2, 1, "div", 5),
                            t.j41(8, "div")(9, "p"),
                            t.EFF(10),
                            t.k0s(),
                            t.j41(11, "p"),
                            t.EFF(12),
                            t.k0s(),
                            t.j41(13, "p", 6),
                            t.EFF(14),
                            t.k0s()()(),
                            t.j41(15, "div", 7),
                            t.nrm(16, "ktb-key-value", 8),
                            t.nI1(17, "translate"),
                            t.nrm(18, "ktb-key-value", 8),
                            t.nI1(19, "translate"),
                            t.j41(20, "div", 9),
                            t.nrm(21, "ktb-key-value", 8),
                            t.nI1(22, "translate"),
                            t.k0s()(),
                            t.j41(23, "div", 7),
                            t.nrm(24, "ktb-key-value", 10),
                            t.nI1(25, "translate"),
                            t.nrm(26, "ktb-key-value", 8),
                            t.nI1(27, "translate"),
                            t.nrm(28, "ktb-key-value", 8),
                            t.nI1(29, "translate"),
                            t.k0s(),
                            t.j41(30, "div", 11)(31, "div", 9),
                            t.nrm(32, "ktb-key-value", 8),
                            t.nI1(33, "translate"),
                            t.k0s(),
                            t.j41(34, "div", 9),
                            t.nrm(35, "ktb-key-value", 8),
                            t.nI1(36, "translate"),
                            t.k0s(),
                            t.nrm(37, "ktb-key-value", 8),
                            t.nI1(38, "translate"),
                            t.k0s()()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(
                            t.bMT(
                                4,
                                42,
                                "account_enquiry_transaction_panel_permutation_to_label"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "ngIf",
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !(
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.billerIconUrl) ||
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.categoryIconUrl)
                            )
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.name
                        ),
                        t.R7$(2),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.compName
                        ),
                        t.R7$(2),
                        t.JRh(
                            null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.accountNo
                        ),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                17,
                                44,
                                "account_enquiry_scheduled_transaction_bulk_transfer_total_transaction_label"
                            )
                        )("data", e.transaction.totalTransaction),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                19,
                                46,
                                "eipp_presentment_seller_draft_details_total_documents"
                            )
                        )("data", e.transaction.totalDocument),
                        t.R7$(3),
                        t.Y8G(
                            "label",
                            t.bMT(
                                22,
                                48,
                                "single_payment_new_pay_bills_single_summary_summary_card_total_fee_label"
                            )
                        )("data", e.tax),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                25,
                                50,
                                "account_enquiry_transaction_panel_permutation_total_amount_label"
                            )
                        )("data", e.amount),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                27,
                                52,
                                "account_enquiry_transaction_panel_permutation_grand_total_label"
                            )
                        )("data", e.grandTotalAmount),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                29,
                                54,
                                "settings_user_profile_details_summary_card_profile_creation_date_label"
                            )
                        )("data", e.createdDateTime),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                33,
                                56,
                                "workflow_management_transactions_listing_table_title_value_date"
                            )
                        )("data", e.valueDate),
                        t.R7$(3),
                        t.Y8G(
                            "label",
                            t.bMT(
                                36,
                                58,
                                "account_enquiry_transaction_panel_permutation_eipp_service_type_label"
                            )
                        )("data", e.serviceType),
                        t.R7$(2),
                        t.Y8G(
                            "label",
                            t.bMT(
                                38,
                                60,
                                "maker_new_pay_bills_single_transaction_outcome_summary_card_reference_no_label"
                            )
                        )("data", e.transaction.instructionRefNo);
                }
            }
            let Te = (() => {
                class l {
                    constructor(e, a, n, i, r, m) {
                        (this.accountEnquiryService = e),
                            (this._decimalPipe = a),
                            (this._datePipe = n),
                            (this.translate = i),
                            (this.sidePanel = r),
                            (this.facade = m),
                            (this.transactionSubs = new N.yU());
                    }
                    ngOnInit() {
                        var e = this;
                        this.transactionSubs.add(
                            this.accountEnquiryService.historyRowClicked.subscribe(
                                (function () {
                                    var a = (0, g.A)(function* (n) {
                                        (e.transaction =
                                            yield e.facade.getScheduledTransactionDetail(
                                                n.scheduledTransactionRefId
                                            )),
                                            (e.serviceType = `${e.transaction.serviceName}`);
                                    });
                                    return function (n) {
                                        return a.apply(this, arguments);
                                    };
                                })()
                            )
                        );
                    }
                    get generateIconText() {
                        let e = "";
                        const a = this.transaction.to.name.split(" "),
                            n = a[0]?.[0],
                            i = a[1]?.[0];
                        return (e = (n || "") + (i || "")), e.toLocaleUpperCase();
                    }
                    get amount() {
                        const {
                            amount: e,
                            currency: a,
                            transferAmount: n,
                            transferCurrency: i,
                        } = this.transaction;
                        return e
                            ? n && i
                                ? "EIPP" === this.transaction?.serviceType
                                    ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                                    : `${this._decimalPipe.transform(
                                        e,
                                        "1.2-2"
                                    )} ${a}\n          (\u2248 ${this._decimalPipe.transform(
                                        n,
                                        "1.2-2"
                                    )} ${i})`
                                : `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : "-";
                    }
                    get tax() {
                        const { tax: e, currency: a } = this.transaction;
                        return e
                            ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : `0.00 ${a}`;
                    }
                    get grandTotalAmount() {
                        const { grandTotalAmount: e, currency: a } = this.transaction;
                        return e
                            ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : `0.00 ${a}`;
                    }
                    get createdDateTime() {
                        const { createdDateTime: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy HH:mm") : "-";
                    }
                    get valueDate() {
                        const { valueDate: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy") : "-";
                    }
                    ngOnDestroy() {
                        this.sidePanel.close();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(E.e),
                                t.rXU(o.QX),
                                t.rXU(o.vh),
                                t.rXU(p.c$),
                                t.rXU(h.J$),
                                t.rXU(d.j)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-eipp-scheduled-transaction-detail"]],
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "collapsible is-side-panel-content", 4, "ngIf"],
                                [1, "collapsible", "is-side-panel-content"],
                                [1, "title"],
                                [1, "account"],
                                ["class", "account-image", 3, "background-image", 4, "ngIf"],
                                ["class", "account-default", 4, "ngIf"],
                                [1, "account-number"],
                                [
                                    "uiGrid",
                                    "",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [3, "label", "data"],
                                [1, "column-blocks-wrapper"],
                                [1, "ws-pre-line", 3, "label", "data"],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "pad-top-24",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [1, "account-image"],
                                [1, "account-default"],
                            ],
                            template: function (a, n) {
                                1 & a && t.DNE(0, ve, 39, 62, "div", 0),
                                    2 & a && t.Y8G("ngIf", n.transaction);
                            },
                            dependencies: [o.bT, S._, w, p.D9],
                            styles: [
                                '.collapsible[_ngcontent-%COMP%]{padding:2.1428571429rem 2.8571428571rem;margin-bottom:2.8571428571rem;word-break:break-word;background-color:#fff}.collapsible[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;color:#002240}.collapsible[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]{display:block;font-size:1rem;line-height:1.4285714286;font-weight:300;color:#868686}.collapsible[_ngcontent-%COMP%]   .remove-collapsible-padding[_ngcontent-%COMP%]{margin-left:-2.8571428571rem;margin-right:-2.8571428571rem}[_nghost-%COMP%]     .body{border-top-color:transparent!important}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{margin-bottom:0;padding:1.7142857143rem 2.8571428571rem;background-color:transparent}.collapsible.is-side-panel-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}.collapsible.is-side-panel-content[_ngcontent-%COMP%]:not(.table-wrapper)   .content[_ngcontent-%COMP%]{padding-top:1.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table{background-color:transparent}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:not(:last-of-type) td{border-bottom:1px solid #e3e3e3}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:last-of-type td{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .table-footer{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .empty-table-display{padding-top:.7142857143rem;padding-bottom:.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .header{padding:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .body-content{padding-bottom:0}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{padding-top:0;padding-bottom:5rem}.column-blocks-wrapper[_ngcontent-%COMP%]{display:block}.column-blocks-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-bottom:1.7142857143rem}.row[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1.7142857143rem}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:before, [_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:after{content:""}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-container.is-disabled{opacity:1}.title[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:1rem;font-weight:700}.account[_ngcontent-%COMP%]{display:flex;margin-bottom:2rem}.account-image[_ngcontent-%COMP%]{background-size:cover;background-position:center;width:40px;height:40px;border-radius:50%;margin-right:1rem}.account-default[_ngcontent-%COMP%]{height:40px;width:40px;line-height:40px;text-align:center;border-radius:50%;background-color:#8ea2b7;color:#fff;cursor:default;margin-right:1rem}.account-number[_ngcontent-%COMP%]{color:#868686}.ws-pre-line[_ngcontent-%COMP%]{white-space:pre-line}.divider[_ngcontent-%COMP%]{margin:24px 0;border-bottom:1px solid #e3e3e3}.pad-top-24[_ngcontent-%COMP%]{padding-top:24px}',
                            ],
                        });
                    }
                }
                return l;
            })();
            const Pe = (l, s, e) => ({
                interestIndex: l,
                currentDate: s,
                interestRate: e,
            }),
                Re = (l) => ({ informationDate: l });
            function Ie(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h5"),
                            t.EFF(4),
                            t.nI1(5, "translate"),
                            t.k0s()(),
                            t.j41(6, "div", 6)(7, "div", 7)(8, "div", 8),
                            t.nrm(9, "ui-initials-image", 9),
                            t.j41(10, "div", 10)(11, "label"),
                            t.EFF(12),
                            t.k0s(),
                            t.j41(13, "div"),
                            t.EFF(14),
                            t.k0s(),
                            t.j41(15, "div"),
                            t.EFF(16),
                            t.k0s()()()()()(),
                            t.j41(17, "div", 4)(18, "ui-collapsible", 11)(19, "div", 5)(
                                20,
                                "h5"
                            ),
                            t.EFF(21),
                            t.nI1(22, "translate"),
                            t.k0s()(),
                            t.j41(23, "div", 6)(24, "div", 7)(25, "div")(26, "label"),
                            t.EFF(27),
                            t.nI1(28, "translate"),
                            t.k0s(),
                            t.j41(29, "div"),
                            t.EFF(30),
                            t.nI1(31, "translate"),
                            t.k0s()()(),
                            t.j41(32, "div", 7)(33, "div")(34, "label"),
                            t.EFF(35),
                            t.nI1(36, "translate"),
                            t.k0s(),
                            t.j41(37, "div"),
                            t.EFF(38),
                            t.k0s()(),
                            t.j41(39, "div")(40, "label"),
                            t.EFF(41),
                            t.nI1(42, "translate"),
                            t.k0s(),
                            t.j41(43, "div"),
                            t.EFF(44),
                            t.k0s()(),
                            t.j41(45, "div")(46, "label"),
                            t.EFF(47),
                            t.nI1(48, "translate"),
                            t.k0s(),
                            t.j41(49, "div"),
                            t.EFF(50),
                            t.k0s()()(),
                            t.j41(51, "div", 7)(52, "div")(53, "label"),
                            t.EFF(54),
                            t.nI1(55, "translate"),
                            t.k0s(),
                            t.j41(56, "div"),
                            t.EFF(57),
                            t.k0s()(),
                            t.j41(58, "div")(59, "label"),
                            t.EFF(60),
                            t.nI1(61, "translate"),
                            t.k0s(),
                            t.j41(62, "span", null, 0),
                            t.nrm(64, "ui-icon", 12),
                            t.k0s(),
                            t.j41(65, "div", 13)(66, "div", 14)(67, "div"),
                            t.EFF(68),
                            t.nI1(69, "translate"),
                            t.k0s(),
                            t.j41(70, "div"),
                            t.EFF(71),
                            t.k0s(),
                            t.j41(72, "div"),
                            t.EFF(73),
                            t.nI1(74, "translate"),
                            t.k0s(),
                            t.j41(75, "div"),
                            t.EFF(76),
                            t.k0s()(),
                            t.j41(77, "div", 14)(78, "div"),
                            t.EFF(79),
                            t.nI1(80, "date"),
                            t.nI1(81, "translate"),
                            t.k0s()()(),
                            t.j41(82, "div"),
                            t.EFF(83),
                            t.k0s()(),
                            t.j41(84, "div")(85, "label"),
                            t.EFF(86),
                            t.nI1(87, "translate"),
                            t.k0s(),
                            t.j41(88, "div"),
                            t.EFF(89),
                            t.k0s()()(),
                            t.j41(90, "div", 7)(91, "div")(92, "label"),
                            t.EFF(93),
                            t.nI1(94, "translate"),
                            t.k0s(),
                            t.j41(95, "span", null, 1),
                            t.nrm(97, "ui-icon", 12),
                            t.k0s(),
                            t.j41(98, "div", 13)(99, "div", 14)(100, "div"),
                            t.EFF(101),
                            t.nI1(102, "translate"),
                            t.k0s(),
                            t.j41(103, "div"),
                            t.EFF(104),
                            t.k0s(),
                            t.j41(105, "div"),
                            t.EFF(106),
                            t.nI1(107, "translate"),
                            t.k0s(),
                            t.j41(108, "div"),
                            t.EFF(109),
                            t.k0s(),
                            t.j41(110, "div"),
                            t.EFF(111),
                            t.nI1(112, "translate"),
                            t.k0s(),
                            t.j41(113, "div"),
                            t.EFF(114),
                            t.k0s(),
                            t.j41(115, "div"),
                            t.EFF(116),
                            t.nI1(117, "translate"),
                            t.k0s(),
                            t.j41(118, "div"),
                            t.EFF(119),
                            t.k0s()()(),
                            t.j41(120, "div"),
                            t.EFF(121),
                            t.k0s()()()()()(),
                            t.j41(122, "div", 4)(123, "ui-collapsible", 11)(124, "div", 5)(
                                125,
                                "h5"
                            ),
                            t.EFF(126),
                            t.nI1(127, "translate"),
                            t.k0s()(),
                            t.j41(128, "div", 6)(129, "div", 7)(130, "div")(131, "label"),
                            t.EFF(132),
                            t.nI1(133, "translate"),
                            t.k0s(),
                            t.j41(134, "div"),
                            t.EFF(135),
                            t.k0s()(),
                            t.j41(136, "div")(137, "label"),
                            t.EFF(138),
                            t.nI1(139, "translate"),
                            t.k0s(),
                            t.j41(140, "div"),
                            t.EFF(141),
                            t.k0s()(),
                            t.j41(142, "div")(143, "label"),
                            t.EFF(144),
                            t.nI1(145, "translate"),
                            t.k0s(),
                            t.j41(146, "div"),
                            t.EFF(147),
                            t.nI1(148, "date"),
                            t.k0s()(),
                            t.j41(149, "div")(150, "label"),
                            t.EFF(151),
                            t.k0s(),
                            t.j41(152, "div"),
                            t.EFF(153),
                            t.k0s()()(),
                            t.j41(154, "div", 15)(155, "div", 16)(156, "h5"),
                            t.EFF(157),
                            t.nI1(158, "translate"),
                            t.k0s()(),
                            t.j41(159, "div", 16)(160, "p"),
                            t.EFF(161),
                            t.nI1(162, "translate"),
                            t.k0s(),
                            t.j41(163, "div"),
                            t.EFF(164),
                            t.k0s()(),
                            t.j41(165, "div", 16)(166, "p"),
                            t.EFF(167),
                            t.nI1(168, "translate"),
                            t.k0s(),
                            t.j41(169, "div"),
                            t.EFF(170),
                            t.k0s()(),
                            t.j41(171, "div", 16)(172, "p"),
                            t.EFF(173),
                            t.nI1(174, "translate"),
                            t.k0s(),
                            t.j41(175, "div"),
                            t.EFF(176),
                            t.k0s()(),
                            t.j41(177, "div", 16)(178, "p"),
                            t.EFF(179),
                            t.nI1(180, "translate"),
                            t.k0s(),
                            t.j41(181, "div"),
                            t.EFF(182),
                            t.k0s()(),
                            t.j41(183, "div", 17)(184, "h6"),
                            t.EFF(185),
                            t.nI1(186, "translate"),
                            t.k0s(),
                            t.j41(187, "h5"),
                            t.EFF(188),
                            t.k0s()()(),
                            t.j41(189, "label", 18),
                            t.nrm(190, "ui-icon", 19),
                            t.EFF(191),
                            t.nI1(192, "date"),
                            t.nI1(193, "translate"),
                            t.k0s()()()()()),
                        2 & l)
                ) {
                    const e = t.sdS(63),
                        a = t.sdS(96),
                        n = t.XpG();
                    t.R7$(4),
                        t.JRh(
                            t.bMT(
                                5,
                                92,
                                "term_loan_single_repayment_review_payoff_summery_label_repay_to"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(2),
                        t.Y8G("name", n.data.to.name),
                        t.R7$(3),
                        t.JRh(
                            null == n.data || null == n.data.to ? null : n.data.to.pnNumber
                        ),
                        t.R7$(2),
                        t.JRh(null == n.data || null == n.data.to ? null : n.data.to.name),
                        t.R7$(2),
                        t.JRh(
                            null == n.data || null == n.data.to ? null : n.data.to.accountNo
                        ),
                        t.R7$(2),
                        t.Y8G("defaultState", n.expand),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                22,
                                94,
                                "term_loan_draft_details_side_panel_content_collapse_loan_information"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                28,
                                96,
                                "term_loan_single_repayment_review_payoff_summery_label_loan_type"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                31,
                                98,
                                "term_loan_landing_dropdown_sub_header_promissory_note"
                            ),
                            " "
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                36,
                                100,
                                "term_loan_draft_details_side_panel_content_label_auto_repayment"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            n.isAutoRepayment(
                                null == n.data || null == n.data.loanInfo
                                    ? null
                                    : n.data.loanInfo.isAutoRepayment
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                42,
                                102,
                                "lg_credit_account_lg_note_transaction_label_effective_date"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            null == n.data || null == n.data.loanInfo
                                ? null
                                : n.data.loanInfo.effectiveDate,
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                48,
                                104,
                                "term_loan_draft_details_side_panel_content_label_maturity_date"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            null == n.data || null == n.data.loanInfo
                                ? null
                                : n.data.loanInfo.maturityDate,
                            " "
                        ),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(" ", t.bMT(55, 106, "promissory_note_pn_tenor_details"), ""),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            null == n.data || null == n.data.loanInfo
                                ? null
                                : n.data.loanInfo.repaymentTenure,
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                61,
                                108,
                                "term_loan_draft_details_side_panel_content_label_interest_rate"
                            ),
                            ""
                        ),
                        t.R7$(5),
                        t.Y8G("uiTooltip", "dark")("target", e)("placement", "bottom"),
                        t.R7$(),
                        t.Y8G("cols", 2)("gap", "4px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                69,
                                110,
                                "term_loan_transaction_repayment_summary_tooltip_interest_index"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == n.data ||
                                null == n.data.loanInfo ||
                                null == n.data.loanInfo.interestRate
                                ? null
                                : n.data.loanInfo.interestRate.interestIndex
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                74,
                                112,
                                "term_loan_transaction_repayment_summary_tooltip_interest_spread"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == n.data ||
                                null == n.data.loanInfo ||
                                null == n.data.loanInfo.interestRate
                                ? null
                                : n.data.loanInfo.interestRate.interestSpread
                        ),
                        t.R7$(),
                        t.Y8G("cols", 1)("gap", "4px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.i5U(
                                81,
                                117,
                                "term_loan_draft_details_side_panel_interest_rate_tooltip",
                                t.sMw(
                                    161,
                                    Pe,
                                    null == n.data ||
                                        null == n.data.loanInfo ||
                                        null == n.data.loanInfo.interestRate
                                        ? null
                                        : n.data.loanInfo.interestRate.interestIndex,
                                    t.i5U(
                                        80,
                                        114,
                                        null == n.data ||
                                            null == n.data.loanInfo ||
                                            null == n.data.loanInfo.interestRate
                                            ? null
                                            : n.data.loanInfo.interestRate.rateDate,
                                        "dd MMM y"
                                    ),
                                    null == n.data ||
                                        null == n.data.loanInfo ||
                                        null == n.data.loanInfo.interestRate
                                        ? null
                                        : n.data.loanInfo.interestRate.morRate
                                )
                            ),
                            " "
                        ),
                        t.R7$(4),
                        t.JRh(
                            (null == n.data ||
                                null == n.data.loanInfo ||
                                null == n.data.loanInfo.interestRate
                                ? null
                                : n.data.loanInfo.interestRate.rate) + " %"
                        ),
                        t.R7$(3),
                        t.SpI(" ", t.bMT(87, 120, "Currency"), ""),
                        t.R7$(3),
                        t.SpI(" ", null == n.data ? null : n.data.transferCurrency, " "),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                94,
                                122,
                                "term_loan_draft_details_side_panel_content_label_total_out_amount"
                            ),
                            ""
                        ),
                        t.R7$(5),
                        t.Y8G("uiTooltip", "dark")("target", a)("placement", "bottom"),
                        t.R7$(),
                        t.Y8G("cols", 2)("gap", "4px"),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                102,
                                124,
                                "term_loan_repayment_tooltip_outstanding_principal_label"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            n.transformAmount(
                                null == n.data ? null : n.data.tranferCurrency,
                                null == n.data ||
                                    null == n.data.loanInfo ||
                                    null == n.data.loanInfo.totalOutstandingAmount
                                    ? null
                                    : n.data.loanInfo.totalOutstandingAmount.outstandingPrincipal
                            ),
                            " ",
                            n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(
                                107,
                                126,
                                "term_loan_repayment_tooltip_accrual_interest_label"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            n.transformAmount(
                                null == n.data ? null : n.data.transferCurrency,
                                null == n.data ||
                                    null == n.data.loanInfo ||
                                    null == n.data.loanInfo.totalOutstandingAmount
                                    ? null
                                    : n.data.loanInfo.totalOutstandingAmount.accrualInterest
                            ),
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(112, 128, "term_loan_repayment_tooltip_late_charge_label"),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            n.transformAmount(
                                null == n.data ? null : n.data.transferCurrency,
                                null == n.data ||
                                    null == n.data.loanInfo ||
                                    null == n.data.loanInfo.totalOutstandingAmount
                                    ? null
                                    : n.data.loanInfo.totalOutstandingAmount.lateCharge
                            ),
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            t.bMT(117, 130, "term_loan_repayment_tooltip_misc_charge_label"),
                            " "
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            n.transformAmount(
                                null == n.data ? null : n.data.transferCurrency,
                                null == n.data ||
                                    null == n.data.loanInfo ||
                                    null == n.data.loanInfo.totalOutstandingAmount
                                    ? null
                                    : n.data.loanInfo.totalOutstandingAmount.miscellaneousCharge
                            ),
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(2),
                        t.Lme(
                            " ",
                            n.transformAmount(
                                null == n.data ? null : n.data.transferCurrency,
                                null == n.data.loanInfo ||
                                    null == n.data.loanInfo.totalOutstandingAmount
                                    ? null
                                    : n.data.loanInfo.totalOutstandingAmount.outstandingPrincipal
                            ),
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(2),
                        t.Y8G("defaultState", n.expand),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                127,
                                132,
                                "term_loan_draft_details_side_panel_content_collapse_repayment_information"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G("cols", 3)("gap", "24px"),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(133, 134, "term_loan_details_side_panel_pay_off"),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(null == n.data || null == n.data.to ? null : n.data.to.name),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                139,
                                136,
                                "term_loan_manual_repayment_other_amount_total_repayment_amount"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            null == n.data ||
                                null == n.data.repaymentInfo ||
                                null == n.data.repaymentInfo.totalAmountDue
                                ? null
                                : n.data.repaymentInfo.totalAmountDue.total
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(
                                145,
                                138,
                                "term_loan_single_repayment_review_payoff_label_value_date"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.i5U(
                                148,
                                140,
                                null == n.data ? null : n.data.valueDate,
                                "dd mmm YYYY"
                            )
                        ),
                        t.R7$(4),
                        t.SpI(" ", "term_loan_manual_repayment_side_note", " "),
                        t.R7$(2),
                        t.JRh(null == n.data ? null : n.data.note),
                        t.R7$(4),
                        t.JRh(
                            t.bMT(
                                158,
                                143,
                                "promissory_note_repayment_details_repayment_summary"
                            )
                        ),
                        t.R7$(4),
                        t.JRh(
                            t.bMT(
                                162,
                                145,
                                "term_loan_draft_details_side_panel_content_label_principal_amount"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            null == n.data ||
                                null == n.data.repaymentInfo ||
                                null == n.data.repaymentInfo.repaymentSummary
                                ? null
                                : n.data.repaymentInfo.repaymentSummary.principalAmount,
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            ""
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                168,
                                147,
                                "term_loan_draft_details_side_panel_content_label_accrual_interest"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            null == n.data ||
                                null == n.data.repaymentInfo ||
                                null == n.data.repaymentInfo.repaymentSummary
                                ? null
                                : n.data.repaymentInfo.repaymentSummary.accrualInterest,
                            " ",
                            null == n.data ? null : n.data.transferCurrencyy,
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                174,
                                149,
                                "term_loan_draft_details_side_panel_content_label_late_charge"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            null == n.data ||
                                null == n.data.repaymentInfo ||
                                null == n.data.repaymentInfo.repaymentSummary
                                ? null
                                : n.data.repaymentInfo.repaymentSummary.lateCharge,
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            ""
                        ),
                        t.R7$(3),
                        t.JRh(
                            t.bMT(
                                180,
                                151,
                                "term_loan_draft_details_side_panel_content_label_misc_charges_fee"
                            )
                        ),
                        t.R7$(3),
                        t.Lme(
                            " ",
                            null == n.data ||
                                null == n.data.repaymentInfo ||
                                null == n.data.repaymentInfo.repaymentSummary
                                ? null
                                : n.data.repaymentInfo.repaymentSummary.miscellaneousCharge,
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            "Total ",
                            t.bMT(
                                186,
                                153,
                                "term_loan_multiple_repayment_submitted_table_head_repayment_amount"
                            ),
                            ""
                        ),
                        t.R7$(3),
                        t.Lme(
                            "",
                            null == n.data ? null : n.data.transferAmount,
                            " ",
                            null == n.data ? null : n.data.transferCurrency,
                            ""
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.i5U(
                                193,
                                158,
                                "promissory_note_static_remark_details",
                                t.eq3(165, Re, t.i5U(192, 155, n.todaysDate, "dd LLL yyyy"))
                            ),
                            " "
                        );
                }
            }
            let ke = (() => {
                class l {
                    constructor(e, a, n) {
                        (this.facade = e), (this.translate = a), (this._decimalPipe = n);
                    }
                    ngOnInit() {
                        var e = this;
                        return (0, g.A)(function* () {
                            const { scheduledTransactionRefId: a } =
                                e.scheduleTransactionData;
                            e.data = yield e.facade.getScheduledTransactionDetail(a);
                        })();
                    }
                    isAutoRepayment(e) {
                        return this.translate.instant(
                            e
                                ? "term_loan_draft_details_side_panel_content_auto_repayment_value_yes"
                                : "term_loan_draft_details_side_panel_content_auto_repayment_value_no"
                        );
                    }
                    transformAmount(e, a) {
                        let n = "";
                        return (
                            (n = a
                                ? this._decimalPipe.transform(
                                    a,
                                    "JPY" === e ? "1.0-0" : "1.2-2"
                                )
                                : "0.00"),
                            n
                        );
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(d.j), t.rXU(p.c$), t.rXU(o.QX));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-term-loan-repayment-side-panel"]],
                            inputs: { scheduleTransactionData: "scheduleTransactionData" },
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["interestRateTooltip", ""],
                                ["totalOutstandingTooltip", ""],
                                ["class", "account-details", 4, "ngIf"],
                                [1, "account-details"],
                                [1, "collapsible"],
                                ["slot-header", ""],
                                ["slot-body", ""],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "mt-12px",
                                    "text-data",
                                    "color-precious-blue",
                                    3,
                                    "cols",
                                    "gap",
                                ],
                                [1, "account-det"],
                                [3, "name"],
                                [1, "ml-1"],
                                [3, "defaultState"],
                                [
                                    "name",
                                    "info",
                                    1,
                                    "mlt-3px",
                                    "color-medium-grey",
                                    "font-size-16px",
                                ],
                                [1, "tooltip-text", 3, "uiTooltip", "target", "placement"],
                                ["uiGrid", "", 3, "cols", "gap"],
                                [1, "mt-12px", "text-data", "color-precious-blue", "mt-24px"],
                                [1, "repayment-summary"],
                                [1, "repayment-summary", "grandtotal"],
                                [1, "fotter_label"],
                                ["name", "form-warning", 1, "mr-7px", "color-medium-grey"],
                            ],
                            template: function (a, n) {
                                1 & a && t.DNE(0, Ie, 194, 167, "div", 2),
                                    2 & a && t.Y8G("ngIf", n.data);
                            },
                            dependencies: [o.bT, x.G, nt.g, S._, B.b6, at.w, o.vh, p.D9],
                            styles: [
                                ".account-details[_ngcontent-%COMP%]{margin-bottom:112px}.account-details[_ngcontent-%COMP%]   .collapsible[_ngcontent-%COMP%]{padding:24px 42.29px 24px 40px;border-bottom:1px solid #e3e3e3}.account-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#002240;font-weight:700;font-size:20px;line-height:28px}.account-details[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%]{margin-left:5px}.account-details[_ngcontent-%COMP%]   .fotter_label[_ngcontent-%COMP%]{font-size:12px;display:flex;align-items:baseline;margin-bottom:15px}.account-details[_ngcontent-%COMP%]   .mr-7px[_ngcontent-%COMP%]{margin-right:7px}.account-det[_ngcontent-%COMP%]{display:flex}.ml-2[_ngcontent-%COMP%]{margin-left:12px}.color-precious-blue[_ngcontent-%COMP%]{color:#002240;font-size:16px}.collapsible[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#868686;font-weight:400;font-size:14px;line-height:20px;font-family:Krungthai Fast,sans-serif}.mt-24px[_ngcontent-%COMP%]{margin-top:24px}.mt-12px[_ngcontent-%COMP%]{margin-top:15px}.repayment-summary[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-top:1px solid #e3e3e3;padding:20px 10px}.grandtotal[_ngcontent-%COMP%]{background-color:#e4e8ed;margin-bottom:20px}.grandtotal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .grandtotal[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#003258;font-weight:900}.font-size-16px[_ngcontent-%COMP%]{font-size:16px}.mlt-3px[_ngcontent-%COMP%]{margin-left:3px;margin-top:3px}.color-medium-grey[_ngcontent-%COMP%]{color:#868686}.text-data-12px[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:18px}.ml-35[_ngcontent-%COMP%]{margin-left:35px}.currency-icon[_ngcontent-%COMP%]{margin-top:2px;margin-right:5px;font-size:30px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            function Me(l, s) {
                1 & l && t.nrm(0, "ui-icon", 14);
            }
            function Fe(l, s) {
                if ((1 & l && (t.j41(0, "div")(1, "p"), t.EFF(2), t.k0s()()), 2 & l)) {
                    const e = s.$implicit;
                    t.R7$(2), t.Lme("", e.value, " ", e.label, "");
                }
            }
            function Se(l, s) {
                if ((1 & l && (t.j41(0, "div", 15), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = s.$implicit;
                    t.R7$(), t.Lme(" ", e.value, " ", e.label, " ");
                }
            }
            function De(l, s) {
                1 & l && (t.j41(0, "div")(1, "p"), t.EFF(2, "-"), t.k0s()());
            }
            function Oe(l, s) {
                1 & l && t.nrm(0, "ui-icon", 14);
            }
            function Ee(l, s) {
                if ((1 & l && (t.j41(0, "div")(1, "p"), t.EFF(2), t.k0s()()), 2 & l)) {
                    const e = s.$implicit;
                    t.R7$(2),
                        t.Lme(
                            "",
                            null == e ? null : e.branchCode,
                            " ",
                            null == e ? null : e.branchName,
                            ""
                        );
                }
            }
            function xe(l, s) {
                if ((1 & l && (t.j41(0, "div", 15), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = s.$implicit;
                    t.R7$(),
                        t.Lme(
                            " ",
                            null == e ? null : e.branchCode,
                            " ",
                            null == e ? null : e.branchName,
                            " "
                        );
                }
            }
            function Ae(l, s) {
                1 & l && (t.j41(0, "div")(1, "p"), t.EFF(2, "-"), t.k0s()());
            }
            function $e(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0),
                            t.j41(1, "div", 20),
                            t.EFF(2),
                            t.k0s(),
                            t.j41(3, "div", 21),
                            t.EFF(4),
                            t.nI1(5, "translate"),
                            t.k0s(),
                            t.bVm()),
                        2 & l)
                ) {
                    const e = s.$implicit,
                        a = s.index,
                        n = t.XpG(2);
                    t.R7$(2),
                        t.Lme("", a + 1, ". ", e.errorMessage, ""),
                        t.R7$(2),
                        t.SpI(
                            " ",
                            n.replaceTranslationErrorCode(
                                t.bMT(
                                    5,
                                    3,
                                    "bulk_upload_transfer_maker_landing_error_code_x_data"
                                ),
                                e.errorCode
                            ),
                            " "
                        );
                }
            }
            function Ge(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0),
                            t.j41(1, "div", 16)(2, "div", 17)(3, "div", 18),
                            t.EFF(4),
                            t.nI1(5, "translate"),
                            t.k0s(),
                            t.j41(6, "div", 19),
                            t.EFF(7),
                            t.nI1(8, "translate"),
                            t.k0s()(),
                            t.DNE(9, $e, 6, 5, "ng-container", 9),
                            t.k0s(),
                            t.bVm()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(4),
                        t.SpI(
                            " ",
                            t.bMT(
                                5,
                                3,
                                "cheque_services_cheque_convience_side_panel_history_detail_label_error_reason"
                            ),
                            " "
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            e.replaceTranslationNumber(
                                t.bMT(
                                    8,
                                    5,
                                    "bulk_upload_transfer_upload_details_side_panel_error_x_errors_label"
                                ),
                                null == e.scheduledDetails ||
                                    null == e.scheduledDetails.errorReasons
                                    ? null
                                    : e.scheduledDetails.errorReasons.length
                            ),
                            " "
                        ),
                        t.R7$(2),
                        t.Y8G(
                            "ngForOf",
                            null == e.scheduledDetails
                                ? null
                                : e.scheduledDetails.errorReasons
                        );
                }
            }
            let je = (() => {
                class l {
                    constructor(e, a) {
                        (this.facade = e), (this.decimal = a);
                    }
                    ngOnInit() {
                        this.formattedPayerAccountNo(),
                            this.formattedPackageName(),
                            this.formattedDeliveryMethods(),
                            this.formattedPickupChequeLocationsList();
                    }
                    formattedPackageName() {
                        this.scheduledDetails.fileName = this.facade.abbreviateWithEllipsis(
                            this.scheduledDetails.fileName,
                            30
                        );
                    }
                    formattedPayerAccountNo() {
                        this.scheduledDetails.payerAccountNo &&
                            (this.scheduledDetails.payerAccountNo = this.scheduledDetails
                                ?.payerAccountNo
                                ? this.scheduledDetails.payerAccountNo.replace(
                                    /(\d{3}-\d-)(\d{2})(\d{2})(\d)-(\d)/,
                                    "XXX-X-XX$3$4-$5"
                                )
                                : "");
                    }
                    formattedDeliveryMethods() {
                        if (
                            this.scheduledDetails.deliveryMethods &&
                            ((this.deliveryMethodsList = this.scheduledDetails.deliveryMethods
                                .slice(0, 5)
                                .map((e) => ({
                                    ...e,
                                    value: e.value ? `- ${e.value}` : "",
                                    label: `- ${e.label}`,
                                }))),
                                this.scheduledDetails.deliveryMethods.length > 5)
                        ) {
                            const e =
                                this.deliveryMethodsList[this.deliveryMethodsList.length - 1];
                            e.label = `${e.label.substring(0, e.label.length)}...`;
                        }
                    }
                    formattedPickupChequeLocationsList() {
                        if (
                            this.scheduledDetails.pickupChequeLocations &&
                            ((this.pickupChequeLocationsList =
                                this.scheduledDetails.pickupChequeLocations
                                    .slice(0, 5)
                                    .map((e) => ({
                                        ...e,
                                        branchCode: e.branchCode ? `- ${e.branchCode}` : "",
                                        branchName: `- ${e.branchName}`,
                                    }))),
                                this.scheduledDetails.pickupChequeLocations.length > 5)
                        ) {
                            const e =
                                this.pickupChequeLocationsList[
                                this.pickupChequeLocationsList.length - 1
                                ];
                            e.branchName = `${e.branchName.substring(
                                0,
                                e.branchName.length
                            )}...`;
                        }
                    }
                    replaceTranslationNumber(e, a) {
                        return e.replace(/x/, String(a));
                    }
                    replaceTranslationErrorCode(e, a) {
                        return e.replace(/_errorCode_/, String(a));
                    }
                    amountText(e, a) {
                        return e ? `${this.decimal.transform(e, "1.2-2")} ${a}` : "-";
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(d.j), t.rXU(o.QX));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [
                                ["ktb-casa-scheduled-transaction-details-side-panel"],
                            ],
                            inputs: { scheduledDetails: "scheduledDetails" },
                            decls: 42,
                            vars: 66,
                            consts: [
                                ["deliveryMethodsTooltip", ""],
                                ["pickupChequeLocationsTooltip", ""],
                                [1, "content-container"],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "key-value-container",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [3, "label", "data", "small"],
                                [1, "delivery-method-details"],
                                [1, "title-message"],
                                ["name", "info", "class", "tooltip-icon", 4, "ngIf"],
                                [
                                    1,
                                    "acc-overview-tooltip-text",
                                    3,
                                    "uiTooltip",
                                    "target",
                                    "placement",
                                ],
                                [4, "ngFor", "ngForOf"],
                                ["class", "details-message", 4, "ngFor", "ngForOf"],
                                [4, "ngIf"],
                                [1, "pickup-location-details"],
                                [3, "uiTooltip", "target", "placement"],
                                ["name", "info", 1, "tooltip-icon"],
                                [1, "details-message"],
                                [1, "section-line-top"],
                                [1, "flex-row", "justify-between", "pb-12px"],
                                [1, "header-title"],
                                [1, "text-grey"],
                                [1, "error-message", "mt-12px"],
                                [1, "error-code"],
                            ],
                            template: function (a, n) {
                                if (
                                    (1 & a &&
                                        (t.j41(0, "div", 2)(1, "div", 3),
                                            t.nrm(2, "ktb-key-value", 4),
                                            t.nI1(3, "translate"),
                                            t.nrm(4, "ktb-key-value", 4),
                                            t.nI1(5, "translate"),
                                            t.j41(6, "ktb-key-value", 4),
                                            t.nI1(7, "translate"),
                                            t.j41(8, "div"),
                                            t.EFF(9),
                                            t.k0s()(),
                                            t.nrm(10, "ktb-key-value", 4),
                                            t.nI1(11, "translate"),
                                            t.nrm(12, "ktb-key-value", 4),
                                            t.nI1(13, "translate"),
                                            t.nI1(14, "date"),
                                            t.j41(15, "div", 5)(16, "div", 6),
                                            t.EFF(17),
                                            t.nI1(18, "translate"),
                                            t.j41(19, "span", null, 0),
                                            t.DNE(21, Me, 1, 0, "ui-icon", 7),
                                            t.k0s(),
                                            t.j41(22, "div", 8),
                                            t.DNE(23, Fe, 3, 2, "div", 9),
                                            t.k0s()(),
                                            t.DNE(24, Se, 2, 2, "div", 10)(25, De, 3, 0, "div", 11),
                                            t.k0s(),
                                            t.j41(26, "div", 12)(27, "div", 6),
                                            t.EFF(28),
                                            t.nI1(29, "translate"),
                                            t.j41(30, "span", null, 1),
                                            t.DNE(32, Oe, 1, 0, "ui-icon", 7),
                                            t.k0s(),
                                            t.j41(33, "div", 13),
                                            t.DNE(34, Ee, 3, 2, "div", 9),
                                            t.k0s()(),
                                            t.DNE(35, xe, 2, 2, "div", 10)(36, Ae, 3, 0, "div", 11),
                                            t.k0s(),
                                            t.nrm(37, "ktb-key-value", 4),
                                            t.nI1(38, "translate"),
                                            t.nrm(39, "ktb-key-value", 4),
                                            t.nI1(40, "translate"),
                                            t.k0s(),
                                            t.DNE(41, Ge, 10, 7, "ng-container", 11),
                                            t.k0s()),
                                        2 & a)
                                ) {
                                    const i = t.sdS(20),
                                        r = t.sdS(31);
                                    t.R7$(),
                                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                                            "alignContent",
                                            "start"
                                        )("justifyItems", "unset")("alignItems", "start"),
                                        t.R7$(),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                3,
                                                45,
                                                "scheduled_transaction_details_side_panel_package_reference_no_label"
                                            )
                                        )(
                                            "data",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.packageRefNo) || "-"
                                        )("small", !0),
                                        t.R7$(2),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                5,
                                                47,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_package_name"
                                            )
                                        )(
                                            "data",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.fileName) || "-"
                                        )("small", !0),
                                        t.R7$(2),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                7,
                                                49,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_from"
                                            )
                                        )(
                                            "data",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.payerAccountName) || "-"
                                        )("small", !0),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.payerAccountNo,
                                            " "
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                11,
                                                51,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_total_transactions"
                                            )
                                        )(
                                            "data",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.totalRecords) || "-"
                                        )("small", !0),
                                        t.R7$(2),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                13,
                                                53,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_effective_date"
                                            )
                                        )(
                                            "data",
                                            t.i5U(
                                                14,
                                                55,
                                                null == n.scheduledDetails
                                                    ? null
                                                    : n.scheduledDetails.valueDate,
                                                "dd LLL yyyy"
                                            )
                                        )("small", !0),
                                        t.R7$(5),
                                        t.SpI(
                                            " ",
                                            t.bMT(
                                                18,
                                                58,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_delivery_method"
                                            ),
                                            " "
                                        ),
                                        t.R7$(4),
                                        t.Y8G(
                                            "ngIf",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.deliveryMethods.length) > 5
                                        ),
                                        t.R7$(),
                                        t.Y8G("uiTooltip", "dark")("target", i)(
                                            "placement",
                                            "bottom"
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngForOf",
                                            null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.deliveryMethods
                                        ),
                                        t.R7$(),
                                        t.Y8G("ngForOf", n.deliveryMethodsList),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            !(
                                                null != n.deliveryMethodsList &&
                                                n.deliveryMethodsList.length
                                            )
                                        ),
                                        t.R7$(3),
                                        t.SpI(
                                            " ",
                                            t.bMT(
                                                29,
                                                60,
                                                "cheque_services_cheque_convience_side_panel_history_detail_label_pick_up_location"
                                            ),
                                            " "
                                        ),
                                        t.R7$(4),
                                        t.Y8G(
                                            "ngIf",
                                            (null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.pickupChequeLocations.length) > 5
                                        ),
                                        t.R7$(),
                                        t.Y8G("uiTooltip", "dark")("target", r)(
                                            "placement",
                                            "bottom"
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngForOf",
                                            null == n.scheduledDetails
                                                ? null
                                                : n.scheduledDetails.pickupChequeLocations
                                        ),
                                        t.R7$(),
                                        t.Y8G("ngForOf", n.pickupChequeLocationsList),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            !(
                                                null != n.pickupChequeLocationsList &&
                                                n.pickupChequeLocationsList.length
                                            )
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                38,
                                                62,
                                                "cheque_services_cheque_convience_history_table_header_total_fee"
                                            )
                                        )(
                                            "data",
                                            n.amountText(
                                                null == n.scheduledDetails
                                                    ? null
                                                    : n.scheduledDetails.totalFee,
                                                n.scheduledDetails.currency
                                            ) || "-"
                                        )("small", !0),
                                        t.R7$(2),
                                        t.Y8G(
                                            "label",
                                            t.bMT(
                                                40,
                                                64,
                                                "cheque_services_cheque_convience_history_table_header_total_cheque_amount"
                                            )
                                        )(
                                            "data",
                                            n.amountText(
                                                null == n.scheduledDetails
                                                    ? null
                                                    : n.scheduledDetails.totalChequeAmount,
                                                n.scheduledDetails.currency
                                            ) || "-"
                                        )("small", !0),
                                        t.R7$(2),
                                        t.Y8G(
                                            "ngIf",
                                            (null == n.scheduledDetails ||
                                                null == n.scheduledDetails.errorReasons
                                                ? null
                                                : n.scheduledDetails.errorReasons.length) > 0
                                        );
                                }
                            },
                            dependencies: [o.Sq, o.bT, x.G, S._, B.b6, w, o.vh, p.D9],
                            styles: [
                                ".content-container[_ngcontent-%COMP%]{margin:0 40px}.content-container[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.4285714286rem;line-height:1.4;font-weight:700;color:#002240}.key-value-container[_ngcontent-%COMP%]{margin:24px 0}.section-line-top[_ngcontent-%COMP%]{padding:24px 0;border-top:1px solid #e3e3e3}.grid-col-st-2[_ngcontent-%COMP%]{grid-column-start:2}.grid-col-en-4[_ngcontent-%COMP%]{grid-column-end:4}.mt-12px[_ngcontent-%COMP%]{margin-top:12px}.pb-12px[_ngcontent-%COMP%]{padding-bottom:12px}.flex-row[_ngcontent-%COMP%]{display:flex;flex-flow:row}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.error-message[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-size:16px;line-height:24px}.title-message[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;color:#868686;font-size:16px}.details-message[_ngcontent-%COMP%]{color:#002240;font-family:Krungthai Smart,sans-serif;font-size:16px}.text-grey[_ngcontent-%COMP%], .error-code[_ngcontent-%COMP%]{color:#868686}.tooltip-icon[_ngcontent-%COMP%]{color:#003258;vertical-align:middle;margin-bottom:5px}.error-code[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-size:12px;line-height:20px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            const Ne = (l) => ({ "pad-top-24": l });
            function we(l, s) {
                if ((1 & l && t.nrm(0, "div", 18), 2 & l)) {
                    const e = t.XpG(2);
                    t.xc7(
                        "background-image",
                        "url(" +
                        ((null == e.transaction || null == e.transaction.to
                            ? null
                            : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)) +
                        ")"
                    );
                }
            }
            function qe(l, s) {
                if ((1 & l && (t.j41(0, "div", 19), t.EFF(1), t.k0s()), 2 & l)) {
                    const e = t.XpG(2);
                    t.R7$(), t.SpI(" ", e.generateIconText, " ");
                }
            }
            function Ye(l, s) {
                1 & l && t.nrm(0, "div", 20);
            }
            function Le(l, s) {
                1 & l && t.nrm(0, "div", 20);
            }
            function Be(l, s) {
                if ((1 & l && t.nrm(0, "ktb-key-value", 10), 2 & l)) {
                    const e = t.XpG(2);
                    t.Y8G("label", e.valuePreAdviceDateLabel)("data", e.preadviceDate);
                }
            }
            function Ue(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 12),
                            t.nrm(1, "ktb-key-value", 10),
                            t.nI1(2, "translate"),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG(2);
                    t.Y8G("cols", 1)("gap", "1rem")("justifyContent", "start")(
                        "alignContent",
                        "start"
                    )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "label",
                            t.bMT(
                                2,
                                8,
                                "bill_payment_new_pay_bills_multiple_transaction_outcome_maker_payment_information_side_panel_note_label"
                            )
                        )("data", null == e.transaction ? null : e.transaction.note);
                }
            }
            function ze(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 1)(1, "div", 2)(2, "h5"),
                            t.EFF(3),
                            t.nI1(4, "translate"),
                            t.k0s()(),
                            t.j41(5, "div", 3),
                            t.DNE(6, we, 1, 2, "div", 4)(7, qe, 2, 1, "div", 5),
                            t.j41(8, "div")(9, "p"),
                            t.EFF(10),
                            t.k0s(),
                            t.j41(11, "p"),
                            t.EFF(12),
                            t.k0s(),
                            t.j41(13, "p", 6),
                            t.EFF(14),
                            t.k0s()()(),
                            t.DNE(15, Ye, 1, 0, "div", 7),
                            t.j41(16, "div", 8),
                            t.nrm(17, "ktb-key-value", 9)(18, "ktb-key-value", 10),
                            t.nI1(19, "translate"),
                            t.nrm(20, "ktb-key-value", 10),
                            t.nI1(21, "translate"),
                            t.k0s(),
                            t.DNE(22, Le, 1, 0, "div", 7),
                            t.j41(23, "div", 11),
                            t.nrm(24, "ktb-key-value", 10)(25, "ktb-key-value", 10)(
                                26,
                                "ktb-key-value",
                                10
                            ),
                            t.nI1(27, "translate"),
                            t.k0s(),
                            t.j41(28, "div", 12),
                            t.DNE(29, Be, 1, 2, "ktb-key-value", 13),
                            t.j41(30, "div", 14)(31, "div", 15),
                            t.EFF(32),
                            t.nI1(33, "translate"),
                            t.k0s(),
                            t.j41(34, "div", 16),
                            t.EFF(35),
                            t.k0s()()(),
                            t.DNE(36, Ue, 3, 10, "div", 17),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(
                            t.bMT(
                                4,
                                43,
                                "account_enquiry_transaction_panel_permutation_to_label"
                            )
                        ),
                        t.R7$(3),
                        t.Y8G(
                            "ngIf",
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.billerIconUrl) ||
                            (null == e.transaction || null == e.transaction.to
                                ? null
                                : e.transaction.to.categoryIconUrl)
                        ),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            !(
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.billerIconUrl) ||
                                (null != e.transaction &&
                                    null != e.transaction.to &&
                                    e.transaction.to.categoryIconUrl)
                            )
                        ),
                        t.R7$(3),
                        t.JRh(
                            e.toHandleNullOrEmpty(
                                null == e.transaction || null == e.transaction.to
                                    ? null
                                    : e.transaction.to.name
                            )
                        ),
                        t.R7$(2),
                        t.JRh(e.displayAccountAndTransferCurrency()),
                        t.R7$(2),
                        t.JRh(
                            e.toHandleNullOrEmpty(
                                null == e.transaction || null == e.transaction.to
                                    ? null
                                    : e.transaction.to.accountNo
                            )
                        ),
                        t.R7$(),
                        t.Y8G("ngIf", !e.isFcdTransferOtherBank),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G("label", e.amountLabel)("data", e.transferAmount),
                        t.R7$(),
                        t.Y8G("label", t.bMT(19, 45, "fcd_total_fee_comm_in_lieu"))(
                            "data",
                            e.tax
                        ),
                        t.R7$(2),
                        t.Y8G("label", t.bMT(21, 47, "fcd_grand_total_amount"))(
                            "data",
                            e.grandTotalAmount
                        ),
                        t.R7$(2),
                        t.Y8G("ngIf", e.isFcdTransferOtherBank),
                        t.R7$(),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start")(
                            "ngClass",
                            t.eq3(53, Ne, !e.isFcdTransferOtherBank)
                        ),
                        t.R7$(),
                        t.Y8G("label", e.dateTimeLabel)("data", e.createdDateTime),
                        t.R7$(),
                        t.Y8G("label", e.valueDateLabel)("data", e.valueDate),
                        t.R7$(),
                        t.Y8G("label", t.bMT(27, 49, "fcd_landing_service_type"))(
                            "data",
                            e.toHandleNullOrEmpty(
                                null == e.transaction ? null : e.transaction.serviceName
                            )
                        ),
                        t.R7$(2),
                        t.Y8G("cols", 3)("gap", "1rem")("justifyContent", "start")(
                            "alignContent",
                            "start"
                        )("justifyItems", "unset")("alignItems", "start"),
                        t.R7$(),
                        t.Y8G(
                            "ngIf",
                            null == e.transaction ? null : e.transaction.preadviceDate
                        ),
                        t.R7$(3),
                        t.SpI(
                            " ",
                            t.bMT(33, 51, "report_criteria_label_report_reference_no"),
                            " "
                        ),
                        t.R7$(3),
                        t.JRh(
                            e.toHandleNullOrEmpty(
                                null == e.transaction ? null : e.transaction.instructionRefNo
                            )
                        ),
                        t.R7$(),
                        t.Y8G("ngIf", null == e.transaction ? null : e.transaction.note);
                }
            }
            let Xe = (() => {
                class l {
                    constructor(e, a, n, i, r, m) {
                        (this.accountEnquiryService = e),
                            (this._decimalPipe = a),
                            (this._datePipe = n),
                            (this.facade = i),
                            (this.translate = r),
                            (this.analyticsService = m),
                            (this.transactionSubs = new N.yU());
                    }
                    ngOnInit() {
                        var e = this;
                        this.transactionSubs.add(
                            this.accountEnquiryService.historyRowClicked.subscribe(
                                (function () {
                                    var a = (0, g.A)(function* (n) {
                                        (e.transaction =
                                            yield e.facade.getScheduledTransactionDetail(
                                                n.scheduledTransactionRefId
                                            )),
                                            (e.serviceType = e.transaction?.serviceType),
                                            (e.amountLabel = e.translate.instant(
                                                "fcd_draft_section_transfer_out_amount"
                                            )),
                                            (e.dateTimeLabel = e.translate.instant(
                                                "account_enquiry_transaction_panel_permutation_create_datetime_label"
                                            )),
                                            (e.valueDateLabel = e.translate.instant(
                                                "fcd_draft_section_value_date"
                                            )),
                                            (e.valuePreAdviceDateLabel = e.translate.instant(
                                                "fcd_transfer_input_pre_advice_date_label"
                                            ));
                                    });
                                    return function (n) {
                                        return a.apply(this, arguments);
                                    };
                                })()
                            )
                        ),
                            this.getGATAgging();
                    }
                    getGATAgging() {
                        this.analyticsService.sendPageViewEvent(
                            "Account Enquiry_CASA_Scheduled_Details_SlidingBar"
                        );
                    }
                    get generateIconText() {
                        let e = "";
                        const a = this.transaction?.to?.name.split(" "),
                            n = a[0]?.[0],
                            i = a[1]?.[0];
                        return (e = (n || "") + (i || "")), e.toLocaleUpperCase();
                    }
                    get transferAmount() {
                        const {
                            amount: e,
                            currency: a,
                            transferAmount: n,
                            transferCurrency: i,
                            dealType: r,
                        } = this.transaction;
                        if (!e && !n) return "-";
                        const m = this.displayAmountWithCurrency(n, i);
                        return r && r !== v.nu.SAME_CURRENCY
                            ? r === v.nu.COUNTER
                                ? `${m}\n(\u2248 ${this._decimalPipe.transform(
                                    e,
                                    "1.2-2"
                                )} ${a})\n`
                                : `${m}\n(= ${this._decimalPipe.transform(e, "1.2-2")} ${a})\n`
                            : m;
                    }
                    get tax() {
                        const { tax: e, currency: a } = this.transaction;
                        return e
                            ? `${this._decimalPipe.transform(e, "1.2-2")} ${a}`
                            : `0.00 ${a}`;
                    }
                    get grandTotalAmount() {
                        const {
                            amount: e,
                            grandTotalAmount: a,
                            tax: n,
                            currency: i,
                        } = this.transaction;
                        if (!e) return "-";
                        if (
                            this.transaction?.subService ===
                            y.cC.FCD_DOMESTIC_TRANSFER_OTHER_BANK
                        )
                            return `${this._decimalPipe.transform(a, "1.2-2")} ${i}`;
                        const r = Number(e) + Number(n);
                        return `${this._decimalPipe.transform(Number(r), "1.2-2")} ${i}`;
                    }
                    get createdDateTime() {
                        const { createdDateTime: e } = this.transaction;
                        return e ? this._datePipe.transform(e, "dd MMM yyyy HH:mm") : "-";
                    }
                    get valueDate() {
                        const { valueDate: e, valueTime: a } = this.transaction;
                        let n = "-";
                        return (
                            e &&
                            ((n = this._datePipe.transform(e, "dd MMM yyyy")),
                                a && (n = n.concat(" - ").concat(a))),
                            n
                        );
                    }
                    get preadviceDate() {
                        return this._datePipe.transform(
                            this.transaction?.preadviceDate,
                            "dd MMM yyyy"
                        );
                    }
                    get isFcdTransferOtherBank() {
                        return (
                            this.transaction?.subService ===
                            y.cC.FCD_DOMESTIC_TRANSFER_OTHER_BANK
                        );
                    }
                    displayAccountAndTransferCurrency() {
                        return this.transaction?.subService ===
                            y.cC.FCD_DOMESTIC_TRANSFER_3RD_PARTY
                            ? `${this.toHandleNullOrEmpty(
                                this.transaction?.to?.compName
                            )} | ${this.toHandleNullOrEmpty(
                                this.transaction?.transferCurrency
                            )}`
                            : this.transaction?.subService ===
                                y.cC.FCD_DOMESTIC_TRANSFER_OTHER_BANK
                                ? `${this.toHandleNullOrEmpty(this.transaction?.to?.compName)}`
                                : `${this.toHandleNullOrEmpty(
                                    this.transaction?.toAccountType
                                )} | ${this.toHandleNullOrEmpty(
                                    this.transaction?.transferCurrency
                                )}`;
                    }
                    displayAmountWithCurrency(e, a) {
                        return "JPY" === a || "VND" === a
                            ? `${this._decimalPipe.transform(e, "1.0-0")} ${a}`
                            : `${this._decimalPipe.transform(e, "1.2-2")} ${a}`;
                    }
                    toHandleNullOrEmpty(e) {
                        return e || "-";
                    }
                    ngOnDestroy() {
                        this.transactionSubs.unsubscribe();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(E.e),
                                t.rXU(o.QX),
                                t.rXU(o.vh),
                                t.rXU(d.j),
                                t.rXU(p.c$),
                                t.rXU(Y.c)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-fcd-domestic-scheduled-side-panel"]],
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "collapsible is-side-panel-content", 4, "ngIf"],
                                [1, "collapsible", "is-side-panel-content"],
                                [1, "title"],
                                [1, "account"],
                                ["class", "account-image", 3, "background-image", 4, "ngIf"],
                                ["class", "account-default", 4, "ngIf"],
                                [1, "account-number"],
                                ["class", "divider", 4, "ngIf"],
                                [
                                    "uiGrid",
                                    "",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [1, "ws-pre-line", 3, "label", "data"],
                                [3, "label", "data"],
                                [
                                    "uiGrid",
                                    "",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                    "ngClass",
                                ],
                                [
                                    "uiGrid",
                                    "",
                                    1,
                                    "pad-top-24",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                ],
                                [3, "label", "data", 4, "ngIf"],
                                [1, "instruction-ref-id"],
                                [1, "label"],
                                [1, "data"],
                                [
                                    "uiGrid",
                                    "",
                                    "class",
                                    "pad-top-24",
                                    3,
                                    "cols",
                                    "gap",
                                    "justifyContent",
                                    "alignContent",
                                    "justifyItems",
                                    "alignItems",
                                    4,
                                    "ngIf",
                                ],
                                [1, "account-image"],
                                [1, "account-default"],
                                [1, "divider"],
                            ],
                            template: function (a, n) {
                                1 & a && t.DNE(0, ze, 37, 55, "div", 0),
                                    2 & a && t.Y8G("ngIf", n.transaction);
                            },
                            dependencies: [o.YU, o.bT, S._, w, p.D9],
                            styles: [
                                '.collapsible[_ngcontent-%COMP%]{padding:2.1428571429rem 2.8571428571rem;margin-bottom:2.8571428571rem;word-break:break-word;background-color:#fff}.collapsible[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;color:#002240}.collapsible[_ngcontent-%COMP%]   .remarks[_ngcontent-%COMP%]{display:block;font-size:1rem;line-height:1.4285714286;font-weight:300;color:#868686}.collapsible[_ngcontent-%COMP%]   .remove-collapsible-padding[_ngcontent-%COMP%]{margin-left:-2.8571428571rem;margin-right:-2.8571428571rem}[_nghost-%COMP%]     .body{border-top-color:transparent!important}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{margin-bottom:0;padding:1.7142857143rem 2.8571428571rem;background-color:transparent}.collapsible.is-side-panel-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}.collapsible.is-side-panel-content[_ngcontent-%COMP%]:not(.table-wrapper)   .content[_ngcontent-%COMP%]{padding-top:1.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table{background-color:transparent}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:not(:last-of-type) td{border-bottom:1px solid #e3e3e3}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table tr:last-of-type td{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .table-footer{padding-bottom:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-table .empty-table-display{padding-top:.7142857143rem;padding-bottom:.7142857143rem}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .header{padding:0}[_nghost-%COMP%]   .collapsible.is-side-panel-content[_ngcontent-%COMP%]     ui-collapsible .body-content{padding-bottom:0}.collapsible.is-side-panel-content[_ngcontent-%COMP%]{padding-top:0;padding-bottom:5rem}.column-blocks-wrapper[_ngcontent-%COMP%]{display:block}.column-blocks-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-bottom:1.7142857143rem}.row[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:1.7142857143rem}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:before, [_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-label:after{content:""}[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]     .switch-container.is-disabled{opacity:1}.title[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:1rem;font-weight:700}.account[_ngcontent-%COMP%]{display:flex;margin-bottom:2rem}.account-image[_ngcontent-%COMP%]{background-size:cover;background-position:center;width:40px;height:40px;border-radius:50%;margin-right:1rem}.account-default[_ngcontent-%COMP%]{height:40px;width:40px;line-height:40px;text-align:center;border-radius:50%;background-color:#8ea2b7;color:#fff;cursor:default;margin-right:1rem}.account-number[_ngcontent-%COMP%]{color:#868686}.ws-pre-line[_ngcontent-%COMP%]{white-space:pre-line}.divider[_ngcontent-%COMP%]{margin:24px 0;border-bottom:1px solid #e3e3e3}.pad-top-24[_ngcontent-%COMP%]{padding-top:24px}.instruction-ref-id[_ngcontent-%COMP%]   .data.small[_ngcontent-%COMP%], .instruction-ref-id[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1rem;line-height:1.4285714286}.instruction-ref-id[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]:not(.small){font-size:1.1428571429rem;line-height:1.5}.instruction-ref-id[_ngcontent-%COMP%]{word-break:break-word}.instruction-ref-id[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#868686;margin-bottom:.2857142857rem}.instruction-ref-id[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{color:#4a4a49}',
                            ],
                        });
                    }
                }
                return l;
            })();
            const Ve = ["sidePanelScheduledTransaction"],
                He = ["singleScheduledTransactionSidepanel"],
                Je = ["sidePanelEippScheduledTransaction"],
                Ke = ["searchSuggestion"],
                Qe = ["termLoanRepaymentSidePanel"],
                We = ["chequeSchduledTransaction"],
                Ze = ["fcdDomesticSidePanel"],
                tn = (l) => ({ key: "serviceTypeControl", value: l });
            function en(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "ui-select-option", 23),
                            t.nrm(1, "ui-icon", 24),
                            t.EFF(2),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = s.$implicit,
                        a = s.index,
                        n = t.XpG(2);
                    t.FS9("id", a),
                        t.Y8G("label", e.name)("value", e.id),
                        t.R7$(),
                        t.Y8G(
                            "name",
                            n.isCheckboxSelected(t.eq3(5, tn, e.id))
                                ? "checkbox-active"
                                : "checkbox-inactive"
                        ),
                        t.R7$(),
                        t.SpI(" ", e.name, " ");
                }
            }
            function nn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "div", 17)(1, "ktb-search-suggestion-shared", 18, 7),
                        t.nI1(3, "translate"),
                        t.bIt("onSearchSuggestion", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchSuggestion(n));
                        })("onSearchEnter", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.OnSearchEnter(n));
                        })("onOptionSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSuggestionClicked(n));
                        })("onSearchCleared", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.onSearchCleared());
                        }),
                        t.k0s(),
                        t.j41(4, "div", 19)(5, "ui-datepicker", 20),
                        t.nI1(6, "translate"),
                        t.bIt("onClickSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onClickDateSelected(n));
                        }),
                        t.k0s()(),
                        t.j41(7, "div", 19)(8, "ui-select", 21),
                        t.nI1(9, "translate"),
                        t.DNE(10, en, 3, 7, "ui-select-option", 22),
                        t.k0s()()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("formGroup", e.formGroup),
                        t.R7$(),
                        t.Y8G("isDisabled", e.isDisabledFilter)(
                            "placeholderKey",
                            t.bMT(
                                3,
                                17,
                                "account_enquiry_current_search_ref_no_payee_biller_placeholder"
                            )
                        )("isSearchbarUpdatedWhenSelect", !1)(
                            "clearKeyword",
                            e.clearKeyword
                        )("suggestionList", e.suggestion)("isCallApiOnEmpty", !0),
                        t.R7$(4),
                        t.Y8G(
                            "headerText",
                            t.bMT(6, 19, "account_enquiry_dropdown_select_date_placeholder")
                        )("filterWeekends", !1)("minDate", e.minDate)("maxDate", e.maxDate)(
                            "selectRange",
                            e.selectRange
                        )("disabled", e.isDisabledFilter),
                        t.R7$(3),
                        t.Y8G(
                            "placeholderText",
                            t.bMT(
                                9,
                                21,
                                "account_enquiry_current_select_service_type_placeholder"
                            )
                        )("multiple", !0)("disabled", e.isDisabledFilter),
                        t.R7$(2),
                        t.Y8G("ngForOf", e.serviceTypeList);
                }
            }
            function an(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "div", 25)(1, "ktb-active-filters", 26),
                        t.bIt("removeFilter", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onRemoveFilter(n));
                        })("clearFilters", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.onClearFilter());
                        }),
                        t.k0s()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(), t.Y8G("activeFilters", e.activeFilterList);
                }
            }
            function ln(l, s) {
                1 & l && t.nrm(0, "ktb-scheduled-transaction-side-panel");
            }
            function on(l, s) {
                if (
                    (1 & l && t.nrm(0, "ktb-single-scheduled-transaction-side-panel", 27),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.Y8G("scheduleTransactionData", e.scheduleTransactionData);
                }
            }
            function rn(l, s) {
                1 & l && t.nrm(0, "ktb-eipp-scheduled-transaction-detail");
            }
            function sn(l, s) {
                if (
                    (1 & l && t.nrm(0, "ktb-term-loan-repayment-side-panel", 27), 2 & l)
                ) {
                    const e = t.XpG();
                    t.Y8G("scheduleTransactionData", e.scheduleTransactionData);
                }
            }
            function cn(l, s) {
                if (
                    (1 & l &&
                        t.nrm(0, "ktb-casa-scheduled-transaction-details-side-panel", 28),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.Y8G("scheduledDetails", e.scheduledDetails);
                }
            }
            function un(l, s) {
                1 & l && t.nrm(0, "ktb-fcd-domestic-scheduled-side-panel");
            }
            let dn = (() => {
                class l {
                    constructor(e, a, n, i, r, m) {
                        (this.facade = e),
                            (this.datePipe = a),
                            (this.translate = n),
                            (this.sidePanelService = i),
                            (this._decimalPipe = r),
                            (this.accountEnquiryService = m),
                            (this.pageSizeOptions = [10, 20, 30, 40, 50]),
                            (this.currentPage = 1),
                            (this.pageNumber = 0),
                            (this.defaultPageSize = 10),
                            (this.totalPages = 0),
                            (this.pageSize = 10),
                            (this.enablePagination = !0),
                            (this.suggestion = []),
                            (this.serviceTypeList = []),
                            (this.displayFilter = !1),
                            (this.transactionData = []),
                            (this.isDisplayActiveFilter = !1),
                            (this.isDisabledFilter = !1),
                            (this.isDisplayFilter = !0),
                            (this.scheduleTransactionData = {}),
                            (this.exceptionHandlingConfig = {
                                filterAndSearchApiError: !1,
                                apiServiceDown: !1,
                                dateRangeFilterError: !1,
                                filterError: !1,
                            }),
                            (this.activeFilterList = []),
                            (this.minDate = O().toDate()),
                            (this.maxDate = O().add(90, "days").toDate()),
                            (this.selectRange = {
                                start: O().toDate(),
                                end: O().add(90, "days").toDate(),
                            }),
                            (this.ninetyDaysScope = O().add(90, "days").toDate()),
                            (this.threeSixtyDaysScope = O().add(365, "days").toDate()),
                            (this.formGroup = new _.gE({
                                dateControl: new _.MJ(""),
                                serviceTypeControl: new _.MJ([]),
                            }));
                    }
                    ngOnInit() {
                        this.formChanges(),
                            this.getScheduledTransactionFilterList(),
                            this.getScheduledTransaction(!0);
                    }
                    formChanges() {
                        this.formGroup.valueChanges.pipe((0, wt.B)(300)).subscribe((e) => {
                            e?.serviceTypeControl && this.convertToFilterTags(e),
                                this.onFilterChange(e);
                        });
                    }
                    getScheduledTransaction(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            try {
                                const n = {
                                    accountRefId: a.accountRefId,
                                    searchQuery: a.searchQuery,
                                    scheduledTransactionRefId: a.scheduledTransactionRefId,
                                    serviceType: a.serviceType,
                                    startDate: a.startDate,
                                    endDate: a.endDate,
                                    pageNumber: a.pageNumber.toString(),
                                    pageSize: a.pageSize.toString(),
                                    orderBy: a.order ? a.orderBy : "",
                                    order: a.order,
                                },
                                    i = yield a.facade.getScheduledTransactionList(n);
                                (a.transactionData = i?.transactions),
                                    (a.pageable = i?.pageable),
                                    (a.transactionData = a.formatTransactionData()),
                                    a.formatTableHeader(),
                                    a.setVariableAfterInit(e);
                            } catch (n) {
                                const { error: i, status: r } = n;
                                (a.pageable = {
                                    pageSize: 0,
                                    numberOfElements: 0,
                                    totalElements: 0,
                                    last: !0,
                                    totalPages: 0,
                                    pageNumber: 0,
                                }),
                                    a.errorHandling(r, i);
                            }
                        })();
                    }
                    setVariableAfterInit(e) {
                        (0, D.isEmpty)(this.transactionData) && e
                            ? this.emptyOnInit()
                            : (0, D.isEmpty)(this.transactionData)
                                ? this.emptyOnSearchAndFilter()
                                : this.pageable?.totalElements < 11
                                    ? this.hidePagination()
                                    : ((this.displayFilter = !0),
                                        (this.isDisabledFilter = !1),
                                        (this.enablePagination = !0));
                    }
                    emptyOnInit() {
                        (this.isDisabledFilter = !0),
                            (this.displayFilter = !0),
                            (this.enablePagination = !1),
                            (this.emptyTableTextData = {
                                title: this.translate.instant(
                                    "account_enquiry_current_no_scheduled_transaction_massage_label"
                                ),
                                subtitle: this.translate.instant(
                                    "account_enquiry_current_no_scheduled_transaction_massage_remark_explainer"
                                ),
                                icon: "empty-tasks",
                            });
                    }
                    emptyOnSearchAndFilter() {
                        (this.isDisabledFilter = !1),
                            (this.displayFilter = !0),
                            (this.enablePagination = !1),
                            (this.emptyTableTextData = {
                                title: this.translate.instant(
                                    "foundation_transaction_no_results_found"
                                ),
                                subtitle: this.translate.instant(
                                    "setting_user_please_try_again_later_remark"
                                ),
                                icon: "empty-tasks",
                            });
                    }
                    hidePagination() {
                        (this.isDisabledFilter = !1),
                            (this.displayFilter = !0),
                            (this.enablePagination = !1);
                    }
                    formatTransactionData() {
                        return this.transactionData.map((a) => {
                            let n = null;
                            if (
                                ((a.valueDate = this.datePipe.transform(
                                    a.valueDate,
                                    "dd MMM yyyy"
                                )),
                                    a?.to?.billerIconUrl || a?.to?.categoryIconUrl)
                            )
                                n = {
                                    ...a,
                                    service: a.serviceName,
                                    grandTotalAmount: `${this._decimalPipe.transform(
                                        a.grandTotalAmount,
                                        "1.2-2"
                                    )} ${a.currency}`,
                                    payeeNameEN: {
                                        cellType: h.Jf.InitialImageCell,
                                        allowHtml: !0,
                                        imageUrl: a?.to?.billerIconUrl,
                                        categoryIconUrl: a?.to?.categoryIconUrl,
                                        fallbackImageUrl: a?.to?.categoryIconUrl,
                                        rows:
                                            "SINGLE" === a?.to?.type
                                                ? [
                                                    a?.to?.name,
                                                    a?.to?.compName,
                                                    a?.to?.accountNo,
                                                    ...(a.to.pnNumber ? [a.to.pnNumber] : []),
                                                ]
                                                : [a?.to?.name],
                                    },
                                };
                            else {
                                let i, r;
                                a?.serviceType === U.iH.TERM_LOAN ||
                                    a?.serviceType === U.iH.PROMISSORY_NOTE
                                    ? ((i = h.Jf.Account),
                                        (r =
                                            a?.serviceType === U.iH.TERM_LOAN
                                                ? [a?.to?.name, a?.to?.accountNo]
                                                : [
                                                    a?.to?.name,
                                                    a?.to?.accountNo,
                                                    `${this.translate.instant(
                                                        "promissory_note_pn_number_label"
                                                    )}: ${a?.to?.pnNumber}`,
                                                ]))
                                    : ((i =
                                        "SINGLE" === a?.to?.type
                                            ? h.Jf.Account
                                            : h.Jf.MultipleAccount),
                                        (r =
                                            "SINGLE" === a?.to?.type
                                                ? [a?.to?.name, a?.to?.compName, a?.to?.accountNo]
                                                : [a?.to?.name])),
                                    a?.serviceType === qt.NR.FCD_DOMESTIC_TRANSFER
                                        ? (a?.valueTime &&
                                            (a.valueDate = a.valueDate
                                                .concat(" - ")
                                                .concat(a?.valueTime)),
                                            (i = h.Jf.Account),
                                            (r = [
                                                this.toHandleNullOrEmpty(a?.to?.name),
                                                this.getFCDSecondLine(a),
                                                this.toHandleNullOrEmpty(a?.to?.accountNo),
                                            ]))
                                        : ((i =
                                            "SINGLE" === a?.to?.type
                                                ? h.Jf.Account
                                                : h.Jf.MultipleAccount),
                                            (r =
                                                "SINGLE" === a?.to?.type
                                                    ? [a?.to?.name, a?.to?.compName, a?.to?.accountNo]
                                                    : [a?.to?.name])),
                                    (n = {
                                        ...a,
                                        service: a.serviceName,
                                        grandTotalAmount: `${this._decimalPipe.transform(
                                            a.grandTotalAmount,
                                            "1.2-2"
                                        )} ${a.currency}`,
                                        payeeNameEN: {
                                            cellType: i,
                                            allowHtml: !0,
                                            iconText:
                                                null !== a?.to?.billerIconUrl
                                                    ? a?.to?.billerIconUrl
                                                    : null !== a?.to?.categoryIconUrl
                                                        ? a?.to?.categoryIconUrl
                                                        : (0, f.WK)(a?.to?.name),
                                            rows: r,
                                        },
                                    });
                            }
                            return n;
                        });
                    }
                    errorHandling(e, a) {
                        "30024" === a?.code || "30015" === a?.code
                            ? ((this.displayFilter = !0),
                                (this.emptyTableTextData = {
                                    title: a?.title,
                                    subtitle: a?.message,
                                    icon: "empty-tasks",
                                    refreshText: null,
                                }))
                            : ((this.displayFilter = !1),
                                (this.emptyTableTextData = {
                                    title: this.translate.instant(
                                        "foundation_general_error_component_title"
                                    ),
                                    subtitle: this.translate.instant(
                                        "foundation_general_error_component_message"
                                    ),
                                    icon: "failed-to-load-api",
                                    refreshText: this.translate.instant(
                                        "foundation_general_error_component_refresh_button_label"
                                    ),
                                }));
                    }
                    refreshData() {
                        this.ngOnInit();
                    }
                    getScheduledTransactionFilterList() {
                        var e = this;
                        return (0, g.A)(function* () {
                            const a = yield e.facade.getScheduledTransactionFilterList();
                            e.serviceTypeList = a.serviceTypes;
                        })();
                    }
                    onFilterChange(e) {
                        const { dateControl: a, serviceTypeControl: n } = e;
                        (this.startDate = this.formatDate(a?.start)),
                            (this.endDate = this.formatDate(a?.end)),
                            (this.serviceType = n?.join()),
                            (this.currentPage = 1),
                            this.getScheduledTransaction(!1);
                    }
                    convertToFilterTags(e) {
                        this.activeFilterList = [];
                        const a = (0, D.isEmpty)(e?.serviceTypeControl)
                            ? ""
                            : e?.serviceTypeControl.map((n) => ({
                                key: "serviceTypeControl",
                                value: n,
                                label: (0, D.capitalize)((0, D.startCase)(n)),
                            }));
                        (this.activeFilterList = [...a]),
                            (this.isDisplayActiveFilter = !(0, D.isEmpty)(
                                this.activeFilterList
                            ));
                    }
                    onRemoveFilter(e) {
                        const a = e?.filter?.key;
                        if ("dateControl" === a)
                            this.formGroup.patchValue({
                                dateControl: "",
                                serviceTypeControl:
                                    this.formGroup.get("serviceTypeControl").value,
                            });
                        else if ("serviceTypeControl" === a) {
                            const n = this.formGroup
                                .get("serviceTypeControl")
                                .value.filter((i) => i !== e.filter.value);
                            this.formGroup.patchValue({
                                dateControl: this.formGroup.get("dateControl").value,
                                serviceTypeControl: n,
                            });
                        }
                    }
                    onClearFilter() {
                        var e = this;
                        return (0, g.A)(function* () {
                            (e.activeFilterList = []),
                                (e.serviceType = null),
                                e.formGroup.patchValue({
                                    dateControl: "",
                                    serviceTypeControl: [],
                                }),
                                yield e.getScheduledTransaction();
                        })();
                    }
                    onClickDateSelected(e) {
                        const a = O(e.start).add(90, "days").toDate();
                        this.onSetDisabledByDateRangeScope(a),
                            (this.minDate = O(e.start).toDate()),
                            e.start && e.end && (this.minDate = O().toDate());
                    }
                    onSetDisabledByDateRangeScope(e) {
                        this.maxDate =
                            e <= this.threeSixtyDaysScope ? e : this.threeSixtyDaysScope;
                    }
                    isCheckboxSelected({ key: e, value: a }) {
                        return (this.formGroup.get(e).value || []).includes(a);
                    }
                    formatTableHeader() {
                        this.transactionTableColumns = [
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_current_value_date_label"
                                ),
                                columnName: "valueDate",
                                sortable: !0,
                                direction: null,
                                widthSize: 160,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_settings_settings_accounts_approval_service_type_label"
                                ),
                                columnName: "service",
                                sortable: !0,
                                direction: null,
                                widthSize: 136,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_settings_settings_accounts_approval_reference_no_label"
                                ),
                                columnName: "instructionRefNo",
                                sortable: !0,
                                direction: null,
                                widthSize: 136,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_transaction_panel_permutation_to_payee_biller_label"
                                ),
                                columnName: "payeeNameEN",
                                sortable: !0,
                                direction: null,
                                widthSize: 296,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_transaction_panel_permutation_grand_total_label"
                                ),
                                columnName: "grandTotalAmount",
                                sortable: !0,
                                direction: null,
                                widthSize: 136,
                            },
                        ];
                    }
                    onSorting(e) {
                        (this.orderBy =
                            "payeeNameEN" === e.orderBy ? "toPayer" : e.orderBy),
                            (this.order = e.order),
                            this.getScheduledTransaction();
                    }
                    onPageChange(e) {
                        (this.currentPage = e),
                            (this.pageNumber = e - 1),
                            this.getScheduledTransaction();
                    }
                    onPageSizeChange(e) {
                        (this.pageSize = e),
                            (this.currentPage = 1),
                            (this.pageNumber = 0),
                            this.getScheduledTransaction();
                    }
                    onSelectTransaction(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            (a.scheduleTransactionData = e),
                                "TERM_LOAN" === e.serviceType ||
                                    "PROMISSORY_NOTE" === e.serviceType
                                    ? a.sidePanelService.setContent(
                                        a.singleScheduledTransactionSidepanel
                                    )
                                    : "EIPP" === e.serviceType
                                        ? a.sidePanelService.setContent(
                                            a.sidePanelEippScheduledTransaction
                                        )
                                        : "TERM_LOAN_REPAYMENT" === e.serviceType ||
                                            "PROMISSORY_NOTE_REPAYMENT" === e.serviceType
                                            ? a.sidePanelService.setContent(a.termLoanRepaymentSidePanel)
                                            : "CHEQUE" === e.serviceType
                                                ? ((a.scheduledDetails =
                                                    yield a.facade.getCvChequeTransactionDetail(
                                                        e.convchqOrderId
                                                    )),
                                                    a.sidePanelService.setContent(a.chequeSchduledTransaction))
                                                : a.sidePanelService.setContent(
                                                    "FCD_DOMESTIC_TRANSFER" === e.serviceType
                                                        ? a.fcdDomesticSidePanel
                                                        : a.sidePanelScheduledTransaction
                                                ),
                                a.sidePanelService.setHeader(
                                    a.translate.instant(
                                        "account_enquiry_transaction_panel_permutation_scheduled_transaction_title"
                                    ),
                                    !0,
                                    null
                                ),
                                a.sidePanelService.setGrayBackground(),
                                a.sidePanelService.setGrayHeader(),
                                a.accountEnquiryService.setTransactionHistoryData(e),
                                a.sidePanelService.open();
                        })();
                    }
                    onSuggestionClicked(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            const n = e?.key;
                            (a.scheduledTransactionRefId = n),
                                yield a.getScheduledTransaction();
                        })();
                    }
                    OnSearchEnter(e) {
                        (this.scheduledTransactionRefId = ""),
                            (this.searchQuery = e),
                            this.getScheduledTransaction();
                    }
                    onSearchSuggestion(e) {
                        e && 0 === e.length
                            ? ((this.searchQuery = null), this.getScheduledTransaction())
                            : e &&
                            e.length > 0 &&
                            ((this.searchQuery = e), this.loadSuggestion(this.searchQuery));
                    }
                    loadSuggestion(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            try {
                                const n = new Nt.Nl().set("searchQuery", e || ""),
                                    i = yield a.facade.getAccountSuggestionList(n);
                                a.suggestion = (0, D.map)(i?.content, (r) => ({
                                    data: [
                                        `${a.translate.instant(
                                            "account_enquiry_casa_schedule_search_suggestion_refno_label"
                                        )} ${r?.referenceNo ?? "-"}`,
                                        r.accountName,
                                        r.bankName,
                                        r.accountNo,
                                    ],
                                    key: r.scheduledTransactionRefId,
                                }));
                            } catch (n) { }
                        })();
                    }
                    onSearchCleared() {
                        var e = this;
                        return (0, g.A)(function* () {
                            (e.scheduledTransactionRefId = ""),
                                (e.searchQuery = ""),
                                yield e.getScheduledTransaction();
                        })();
                    }
                    formatDate(e, a = "yyyy-MM-dd") {
                        return this.datePipe.transform(e, a);
                    }
                    toHandleNullOrEmpty(e) {
                        return e || "-";
                    }
                    getFCDSecondLine(e) {
                        return e?.subService === y.cC.FCD_DOMESTIC_TRANSFER_3RD_PARTY
                            ? `${this.toHandleNullOrEmpty(
                                e?.to?.compName
                            )} | ${this.toHandleNullOrEmpty(e?.to?.accountCurrency)}`
                            : e?.subService === y.cC.FCD_DOMESTIC_TRANSFER_OTHER_BANK
                                ? `${this.toHandleNullOrEmpty(e?.to?.compName)}`
                                : `${this.toHandleNullOrEmpty(
                                    e?.to?.accountType
                                )} | ${this.toHandleNullOrEmpty(e?.to?.accountCurrency)}`;
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(d.j),
                                t.rXU(o.vh),
                                t.rXU(p.c$),
                                t.rXU(h.J$),
                                t.rXU(o.QX),
                                t.rXU(E.e)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-scheduled-transaction"]],
                            viewQuery: function (a, n) {
                                if (
                                    (1 & a &&
                                        (t.GBs(Ve, 5),
                                            t.GBs(He, 5),
                                            t.GBs(Je, 5),
                                            t.GBs(Ke, 5),
                                            t.GBs(Qe, 5),
                                            t.GBs(We, 5),
                                            t.GBs(Ze, 5)),
                                        2 & a)
                                ) {
                                    let i;
                                    t.mGM((i = t.lsd())) &&
                                        (n.sidePanelScheduledTransaction = i.first),
                                        t.mGM((i = t.lsd())) &&
                                        (n.singleScheduledTransactionSidepanel = i.first),
                                        t.mGM((i = t.lsd())) &&
                                        (n.sidePanelEippScheduledTransaction = i.first),
                                        t.mGM((i = t.lsd())) && (n.searchSuggestion = i.first),
                                        t.mGM((i = t.lsd())) &&
                                        (n.termLoanRepaymentSidePanel = i.first),
                                        t.mGM((i = t.lsd())) &&
                                        (n.chequeSchduledTransaction = i.first),
                                        t.mGM((i = t.lsd())) && (n.fcdDomesticSidePanel = i.first);
                                }
                            },
                            inputs: { accountRefId: "accountRefId" },
                            decls: 24,
                            vars: 16,
                            consts: [
                                ["uiTable", ""],
                                ["sidePanelScheduledTransaction", ""],
                                ["singleScheduledTransactionSidepanel", ""],
                                ["sidePanelEippScheduledTransaction", ""],
                                ["termLoanRepaymentSidePanel", ""],
                                ["chequeSchduledTransaction", ""],
                                ["fcdDomesticSidePanel", ""],
                                ["searchSuggestion", ""],
                                [1, "accounts-section"],
                                ["theme", "light", 1, "clear-padding-top"],
                                [1, "account-list-card"],
                                [1, "account-list-container"],
                                [1, "white-card-title"],
                                ["class", "search-filters-section", 3, "formGroup", 4, "ngIf"],
                                ["class", "active-filters", 4, "ngIf"],
                                [1, "scheduled-transaction-tbl"],
                                [
                                    3,
                                    "sortChanged",
                                    "pageChanged",
                                    "pageSizeChanged",
                                    "rowClicked",
                                    "refreshData",
                                    "data",
                                    "tableHeader",
                                    "totalItems",
                                    "enablePagination",
                                    "pageSizeOptions",
                                    "defaultPageSize",
                                    "pageSize",
                                    "totalPages",
                                    "currentPage",
                                    "emptyTableTextData",
                                    "selectionMode",
                                ],
                                [1, "search-filters-section", 3, "formGroup"],
                                [
                                    1,
                                    "search-input-field",
                                    2,
                                    "width",
                                    "'530px;'",
                                    3,
                                    "onSearchSuggestion",
                                    "onSearchEnter",
                                    "onOptionSelected",
                                    "onSearchCleared",
                                    "isDisabled",
                                    "placeholderKey",
                                    "isSearchbarUpdatedWhenSelect",
                                    "clearKeyword",
                                    "suggestionList",
                                    "isCallApiOnEmpty",
                                ],
                                [1, "ktb-form-label"],
                                [
                                    "formControlName",
                                    "dateControl",
                                    "rangePicker",
                                    "",
                                    3,
                                    "onClickSelected",
                                    "headerText",
                                    "filterWeekends",
                                    "minDate",
                                    "maxDate",
                                    "selectRange",
                                    "disabled",
                                ],
                                [
                                    "formControlName",
                                    "serviceTypeControl",
                                    1,
                                    "ui-select",
                                    3,
                                    "placeholderText",
                                    "multiple",
                                    "disabled",
                                ],
                                [
                                    "class",
                                    "ui-option",
                                    3,
                                    "label",
                                    "value",
                                    "id",
                                    4,
                                    "ngFor",
                                    "ngForOf",
                                ],
                                [1, "ui-option", 3, "label", "value", "id"],
                                [3, "name"],
                                [1, "active-filters"],
                                [3, "removeFilter", "clearFilters", "activeFilters"],
                                [3, "scheduleTransactionData"],
                                [3, "scheduledDetails"],
                            ],
                            template: function (a, n) {
                                if (1 & a) {
                                    const i = t.RV6();
                                    t.j41(0, "div", 8)(1, "ui-section", 9)(2, "div", 10)(
                                        3,
                                        "div",
                                        11
                                    )(4, "div", 12),
                                        t.EFF(5),
                                        t.nI1(6, "translate"),
                                        t.k0s()(),
                                        t.DNE(7, nn, 11, 23, "div", 13)(8, an, 2, 1, "div", 14),
                                        t.j41(9, "div", 15)(10, "ui-table", 16, 0),
                                        t.bIt("sortChanged", function (m) {
                                            return t.eBV(i), t.Njj(n.onSorting(m));
                                        })("pageChanged", function (m) {
                                            return t.eBV(i), t.Njj(n.onPageChange(m));
                                        })("pageSizeChanged", function (m) {
                                            return t.eBV(i), t.Njj(n.onPageSizeChange(m));
                                        })("rowClicked", function (m) {
                                            return t.eBV(i), t.Njj(n.onSelectTransaction(m));
                                        })("refreshData", function () {
                                            return t.eBV(i), t.Njj(n.refreshData());
                                        }),
                                        t.k0s()()()()(),
                                        t.DNE(12, ln, 1, 0, "ng-template", null, 1, t.C5r)(
                                            14,
                                            on,
                                            1,
                                            1,
                                            "ng-template",
                                            null,
                                            2,
                                            t.C5r
                                        )(16, rn, 1, 0, "ng-template", null, 3, t.C5r)(
                                            18,
                                            sn,
                                            1,
                                            1,
                                            "ng-template",
                                            null,
                                            4,
                                            t.C5r
                                        )(20, cn, 1, 1, "ng-template", null, 5, t.C5r)(
                                            22,
                                            un,
                                            1,
                                            0,
                                            "ng-template",
                                            null,
                                            6,
                                            t.C5r
                                        );
                                }
                                2 & a &&
                                    (t.R7$(5),
                                        t.SpI(
                                            " ",
                                            t.bMT(
                                                6,
                                                14,
                                                "account_enquiry_current_scheduled_transaction_title"
                                            ),
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("ngIf", n.displayFilter),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            null == n.activeFilterList
                                                ? null
                                                : n.activeFilterList.length
                                        ),
                                        t.R7$(2),
                                        t.Y8G("data", n.transactionData)(
                                            "tableHeader",
                                            n.transactionTableColumns
                                        )(
                                            "totalItems",
                                            null == n.pageable ? null : n.pageable.totalElements
                                        )("enablePagination", n.enablePagination)(
                                            "pageSizeOptions",
                                            n.pageSizeOptions
                                        )("defaultPageSize", n.defaultPageSize)(
                                            "pageSize",
                                            n.pageSize
                                        )(
                                            "totalPages",
                                            null == n.pageable ? null : n.pageable.totalPages
                                        )("currentPage", n.currentPage)(
                                            "emptyTableTextData",
                                            n.emptyTableTextData
                                        )("selectionMode", !1));
                            },
                            dependencies: [
                                o.Sq,
                                o.bT,
                                x.G,
                                _.BC,
                                _.cb,
                                V.O,
                                Z.w,
                                tt.F,
                                L.O,
                                _.j4,
                                _.JD,
                                H.n,
                                J.v,
                                Yt.H,
                                ie,
                                be,
                                Te,
                                ke,
                                je,
                                Xe,
                                p.D9,
                            ],
                            styles: [
                                "[_nghost-%COMP%]     .logo img{border-radius:50%;margin-right:10px}[_nghost-%COMP%]     .logo .cell-icon--account{height:40px;width:40px;line-height:40px;text-align:center;border-radius:50%;margin-right:10px;background-color:#8ea2b7;color:#fff;cursor:default}[_nghost-%COMP%]     ui-table .table-container{width:unset!important;margin:0 -40px}.white-card-title[_ngcontent-%COMP%]{font-size:1.7142857143rem;line-height:1.3333333333;color:#002240;font-family:Krungthai Fast,sans-serif;font-weight:700}.account-list-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.white-card-title[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.7142857143rem;line-height:1.3333333333;font-weight:700;color:#002240}.search-filters-section[_ngcontent-%COMP%]{display:flex;column-count:3;column-gap:16px;padding-top:24px}.scheduled-transaction-tbl[_ngcontent-%COMP%]{padding-top:24px}[_nghost-%COMP%]     ui-section.section-wrapper.clear-padding-top section{padding-top:20px!important}.no-pad[_ngcontent-%COMP%]{padding-top:0}.pad-top-48[_ngcontent-%COMP%]{padding-top:48px}.pad-top-24[_ngcontent-%COMP%]{padding-top:24px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            const _n = ["sidePanelTransactionHistory"],
                pn = ["quickBtnGroup"],
                mn = ["statementBtnGroup"],
                gn = (l) => ({ "pad-btm-24": l }),
                hn = () => ({ color: "#8ea2b7" }),
                fn = () => ({ pointerEvents: "none" });
            function bn(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 18),
                            t.EFF(1),
                            t.nI1(2, "translate"),
                            t.nI1(3, "date"),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Lme(
                            " ",
                            t.bMT(2, 2, e.constants.lastUpdate),
                            " : ",
                            t.i5U(3, 4, e.lastUpdate, "dd LLL yyyy - HH:mm"),
                            " "
                        );
                }
            }
            function yn(l, s) {
                if (
                    (1 & l && (t.j41(0, "div"), t.nrm(1, "ktb-casa-top", 19), t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G("data", e.casaAccountDetails)(
                            "isPrimaryAccount",
                            e.isPrimaryAccount
                        )("accountType", e.accountType);
                }
            }
            function Cn(l, s) {
                if (
                    (1 & l && (t.j41(0, "div"), t.nrm(1, "ktb-fda-top", 20), t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(), t.Y8G("data", e.fdAccountDetails)("isSubFda", !1);
                }
            }
            function vn(l, s) {
                if (
                    (1 & l && (t.j41(0, "div"), t.nrm(1, "ktb-fda-top", 20), t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(), t.Y8G("data", e.fdAccountDetails)("isSubFda", !0);
                }
            }
            function Tn(l, s) {
                if (
                    (1 & l && (t.j41(0, "div"), t.nrm(1, "ktb-la-top", 21), t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(), t.Y8G("data", e.loanAccountDetails);
                }
            }
            function Pn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "button", 22),
                        t.bIt("click", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onClickNewTransfer(n));
                        }),
                        t.nrm(1, "ui-icon", 23),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("disabled", !e.isTransferEnabled),
                        t.R7$(),
                        t.Y8G(
                            "ngClass",
                            e.isTransferEnabled
                                ? "acc-enquiry-icons"
                                : "acc-enquiry-icon-is-disabled"
                        ),
                        t.R7$(),
                        t.SpI(" ", t.bMT(3, 3, e.constants.newTransferBtn), " ");
                }
            }
            function Rn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "button", 22),
                        t.bIt("click", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onClickNewPayment(n));
                        }),
                        t.nrm(1, "ui-icon", 24),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("disabled", !e.isPaymentEnabled),
                        t.R7$(),
                        t.Y8G(
                            "ngClass",
                            e.isPaymentEnabled
                                ? "acc-enquiry-icons"
                                : "acc-enquiry-icon-is-disabled"
                        ),
                        t.R7$(),
                        t.SpI(" ", t.bMT(3, 3, e.constants.newPaymentBtn), " ");
                }
            }
            function In(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "button", 22),
                        t.bIt("click", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onClickNewInternationalTransfer(n));
                        }),
                        t.nrm(1, "ui-icon", 25),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("disabled", !e.isInternationalTransferEnabled),
                        t.R7$(),
                        t.Y8G(
                            "ngClass",
                            e.isInternationalTransferEnabled
                                ? "acc-enquiry-icons"
                                : "acc-enquiry-icon-is-disabled"
                        ),
                        t.R7$(),
                        t.SpI(
                            " ",
                            t.bMT(3, 3, e.constants.newInternationalTransferBtn),
                            " "
                        );
                }
            }
            function kn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "button", 22),
                        t.bIt("click", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.onClickRequestStatement());
                        }),
                        t.nrm(1, "ui-icon", 26),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("disabled", !e.isRequestStatementEnabled),
                        t.R7$(2),
                        t.SpI(
                            "",
                            t.bMT(3, 2, "account_enquiry_account_request_statement_button"),
                            " "
                        );
                }
            }
            function Mn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "button", 22),
                        t.bIt("click", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onClickNewFcdDomesticTransfer(n));
                        }),
                        t.nrm(1, "ui-icon", 26),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("disabled", !e.isFcdDomesticTransferEnabled),
                        t.R7$(2),
                        t.SpI(" ", t.bMT(3, 2, e.constants.newFcdDomesticTransferBtn), " ");
                }
            }
            function Fn(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0),
                            t.j41(1, "div", 37),
                            t.nrm(2, "ui-datepicker", 38),
                            t.nI1(3, "translate"),
                            t.k0s(),
                            t.bVm()),
                        2 & l)
                ) {
                    const e = t.XpG(3);
                    t.R7$(2),
                        t.Y8G("headerText", t.bMT(3, 6, e.constants.filters.dateRange))(
                            "filterWeekends",
                            e.filterWeekends
                        )("minDate", e.minDate)("maxDate", e.maxDate)(
                            "rangeLimit",
                            e.rangeLimit
                        )("isCalendarOnTheLeft", !0);
                }
            }
            function Sn(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0),
                            t.j41(1, "div", 37),
                            t.nrm(2, "ui-amount-range-input", 39),
                            t.nI1(3, "translate"),
                            t.nI1(4, "translate"),
                            t.nI1(5, "translate"),
                            t.nI1(6, "translate"),
                            t.k0s(),
                            t.bVm()),
                        2 & l)
                ) {
                    const e = t.XpG(3);
                    t.R7$(2),
                        t.Y8G("placeholder", t.bMT(3, 7, e.constants.filters.selectAmount))(
                            "minAmountLabelText",
                            t.bMT(4, 9, e.constants.filters.minAmount)
                        )(
                            "maxAmountLabelText",
                            t.bMT(5, 11, e.constants.filters.maxAmount)
                        )("errorText", t.bMT(6, 13, e.constants.filters.amountError))(
                            "radioButtons",
                            e.amountRangeRadioButtons
                        )("inputRequireSelection", !0)("maxlength", 13);
                }
            }
            function Dn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "div", 35)(1, "ktb-search-suggestion-shared", 36, 3),
                        t.bIt("onSearchSuggestion", function (n) {
                            t.eBV(e);
                            const i = t.XpG(2);
                            return t.Njj(i.onSearchSuggestion(n));
                        })("onSearchEnter", function (n) {
                            t.eBV(e);
                            const i = t.XpG(2);
                            return t.Njj(i.OnSearchEnter(n));
                        })("onOptionSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG(2);
                            return t.Njj(i.onSuggestionClicked(n));
                        })("onSearchCleared", function () {
                            t.eBV(e);
                            const n = t.XpG(2);
                            return t.Njj(n.onSearchCleared());
                        }),
                        t.k0s(),
                        t.DNE(3, Fn, 4, 8, "ng-container", 11)(
                            4,
                            Sn,
                            7,
                            15,
                            "ng-container",
                            11
                        ),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG(2);
                    t.Y8G("formGroup", e.formGroup)(
                        "ngStyle",
                        e.disabledSearchandFilters && t.lJ4(10, fn)
                    ),
                        t.R7$(),
                        t.Y8G("isDisabled", e.disabledSearchandFilters)(
                            "placeholderKey",
                            e.constants.searchPlaceholder
                        )("isSearchbarUpdatedWhenSelect", !1)(
                            "clearKeyword",
                            e.clearKeyword
                        )("suggestionList", e.suggestion)("isCallApiOnEmpty", !0),
                        t.R7$(2),
                        t.Y8G("ngIf", e.enableCalendarFiltering),
                        t.R7$(),
                        t.Y8G("ngIf", e.enableAmountFiltering);
                }
            }
            function On(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "div", 27)(1, "div", 28)(2, "div", 29),
                        t.EFF(3),
                        t.nI1(4, "translate"),
                        t.k0s(),
                        t.j41(5, "div")(6, "button", 30),
                        t.bIt("click", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.onClickExport());
                        }),
                        t.nrm(7, "ui-icon", 31),
                        t.EFF(8),
                        t.nI1(9, "translate"),
                        t.k0s()()(),
                        t.DNE(10, Dn, 5, 11, "div", 32),
                        t.j41(11, "div", 33)(12, "ui-table", 34),
                        t.bIt("sortChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSorting(n));
                        })("pageChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onPageChange(n));
                        })("pageSizeChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onPageSizeChange(n));
                        })("rowClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSelectAccount(n));
                        })("refreshData", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.refreshTransactionHistoryTbl());
                        }),
                        t.k0s()()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(3),
                        t.JRh(t.bMT(4, 18, e.constants.accTransacHistTblHeader)),
                        t.R7$(3),
                        t.Y8G("uiButton", "primary-flexible-width")(
                            "disabled",
                            e.disabledSearchandFilters
                        ),
                        t.R7$(),
                        t.Y8G("ngStyle", e.disabledSearchandFilters && t.lJ4(22, hn)),
                        t.R7$(),
                        t.SpI(" ", t.bMT(9, 20, e.constants.exportBtn), " "),
                        t.R7$(2),
                        t.Y8G("ngIf", e.isDisplayFilter),
                        t.R7$(2),
                        t.Y8G("data", e.transactionData)(
                            "tableHeader",
                            e.transactionTableColumns
                        )(
                            "totalItems",
                            null == e.transactionHistory ||
                                null == e.transactionHistory.pageable
                                ? null
                                : e.transactionHistory.pageable.totalElements
                        )("enablePagination", e.enablePagination)(
                            "pageSizeOptions",
                            e.pageSizeOptions
                        )("defaultPageSize", e.defaultPageSize)("pageSize", e.pageSize)(
                            "totalPages",
                            null == e.transactionHistory ||
                                null == e.transactionHistory.pageable
                                ? null
                                : e.transactionHistory.pageable.totalPages
                        )("currentPage", e.currentPage)(
                            "emptyTableTextData",
                            e.emptyTableTextData
                        )("selectionMode", e.selectionMode)("showActionButtonsColumn", !1);
                }
            }
            function En(l, s) {
                1 & l && t.nrm(0, "ktb-transaction-history-side-panel");
            }
            function xn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "div")(1, "div", 40),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s(),
                        t.j41(4, "ktb-deposit-detail", 41),
                        t.bIt("tablePropertyChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.getDepositDetail(i.accountRefId, n));
                        })("filterChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onFilterChanged(n));
                        })("refreshData", function () {
                            t.eBV(e);
                            const n = t.XpG();
                            return t.Njj(n.refreshDepositDetailTbl());
                        }),
                        t.k0s()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(2),
                        t.JRh(t.bMT(3, 13, e.constants.depositDetailTblHeader)),
                        t.R7$(2),
                        t.Y8G("data", e.depositDetailData)(
                            "tableHeader",
                            e.depositDetailColumns
                        )("pageable", e.pageable)("pageableParam", e.pageableParam)(
                            "enablePagination",
                            e.enablePagination
                        )("pageSizeOptions", e.pageSizeOptions)(
                            "selectionMode",
                            e.selectionMode
                        )("enableDepositDetailFilter", e.enableDepositDetailFilters)(
                            "isDisplayFilter",
                            e.displayDepositDetailFilter
                        )("enableFilters", e.enableFilters)(
                            "emptyTableTextData",
                            e.emptyTableTextData
                        )("isAPIError", e.exceptionHandlingConfig.apiServiceDown);
                }
            }
            function An(l, s) {
                if (
                    (1 & l &&
                        (t.qex(0), t.nrm(1, "ktb-scheduled-transaction", 42), t.bVm()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(), t.Y8G("accountRefId", e.accountRefId);
                }
            }
            let $n = (() => {
                class l {
                    constructor(e, a, n, i, r, m, T, R, q, K, Q, Jn, Kn) {
                        (this.route = e),
                            (this.facade = a),
                            (this.query = n),
                            (this.nav = i),
                            (this.translate = r),
                            (this._decimalPipe = m),
                            (this._datePipe = T),
                            (this.fb = R),
                            (this.accountEnquiryService = q),
                            (this.sidePanelService = K),
                            (this.analyticsService = Q),
                            (this.router = Jn),
                            (this.dialog = Kn),
                            (this.isPrimaryAccount = !1),
                            (this.type = ""),
                            (this.subFdAccounts = []),
                            (this.accountRefId = null),
                            (this.productCode = ""),
                            (this.transactionData = []),
                            (this.accountTypeForTransaction = null),
                            (this.pageSizeOptions = [10, 20, 30, 40, 50]),
                            (this.enablePagination = !0),
                            (this.selectionMode = !1),
                            (this.currentPage = 1),
                            (this.defaultPageSize = 10),
                            (this.totalPages = 0),
                            (this.pageSize = 10),
                            (this.filterWeekends = !1),
                            (this.maxDate = new Date()),
                            (this.rangeLimit = 90),
                            (this.enableCalendarFiltering = !0),
                            (this.enableAmountFiltering = !0),
                            (this.amountRangeRadioButtons = [
                                {
                                    label: this.translate.instant(
                                        "account_enquiry_current_deposit_label"
                                    ),
                                    value: "deposit",
                                },
                                {
                                    label: this.translate.instant(
                                        "account_enquiry_current_withdraw_label"
                                    ),
                                    value: "withdraw",
                                },
                            ]),
                            (this.isDisplayFilter = !0),
                            (this.exceptionHandlingConfig = {
                                fiilterAndSearchNoData: !1,
                                filterAndSearchApiError: !1,
                                apiServiceDown: !1,
                                noData: !1,
                                noDepositDetail: !1,
                                dateRangeFilterError: !1,
                                filterError: !1,
                            }),
                            (this.isSubFda = !1),
                            (this.formGroup = new _.J3({
                                dateFilterControl: new _.hs(""),
                                amountInputControl: new _.hs(""),
                            })),
                            (this.enableDepositDetailFilters = !0),
                            (this.displayDepositDetailFilter = !0),
                            (this.enableFilters = !0),
                            (this.constants = {
                                backLabel:
                                    "account_enquiry_account_back_to_account_list_text_link",
                                lastUpdate:
                                    "dashboard_default_view_upon_login_account_overview_card_timestamp_label",
                                searchPlaceholder:
                                    "account_enquiry_current_search_date_description_amount_placeholder",
                                newTransferBtn: "account_enquiry_current_transfer_button",
                                newPaymentBtn: "account_enquiry_current_payment_button",
                                newInternationalTransferBtn:
                                    "account_enquiry_casa_quick_action_new_international_transfer_quick_menu",
                                requestStatementBtn:
                                    "account_enquiry_account_request_statement_button",
                                exportBtn: "account_enquiry_current_export_button",
                                filters: {
                                    dateRange: "account_enquiry_dropdown_select_date_placeholder",
                                    selectAmount:
                                        "account_enquiry_current_select_amount_placeholder",
                                    minAmount: "account_enquiry_current_min_amount_label",
                                    maxAmount: "account_enquiry_current_max_amount_label",
                                    amountError:
                                        "Account_enquiry_filter_maximum_more_than_minimum_limit",
                                },
                                accTransacHistTblHeader:
                                    "account_enquiry_current_transaction_history_title",
                                depositDetailTblHeader:
                                    "account_enquiry_fda_sub_deposit_detail_label",
                                channel: "account_enquiry_current_channel_label",
                                newFcdDomesticTransferBtn: "fcd_landing_new_domestic_transfer",
                            }),
                            (this.downtimeSubservices = [y.cC.BILL_PAYMENT_STANDARD]),
                            (this.transferDowntimeSubservices = [
                                y.cC.TRANSFER_OTHER_BANK,
                                y.cC.TRANSFER_BAHTNET,
                                y.cC.TRANSFER_DIRECT_CREDIT,
                                y.cC.TRANSFER_OWN_ACCOUNT,
                                y.cC.TRANSFER_PROMPTPAY_NEXT_DAY,
                                y.cC.TRANSFER_PROMPTPAY_ONLINE,
                                y.cC.TRANSFER_PROMPTPAY_SAME_DAY,
                                y.cC.TRANSFER_SMART_NEXT_DAY,
                                y.cC.TRANSFER_SMART_SAME_DAY,
                                y.cC.TRANSFER_3_PARTY,
                            ]),
                            (this.formGroup = this.fb.group({
                                dateFilterControl: null,
                                amountInputControl: null,
                            })),
                            this.accountEnquiryService.productType$.subscribe((Qn) => {
                                this.productType = Qn;
                            });
                    }
                    ngOnInit() {
                        (this.minDate = (0, lt.A)(new Date(), 1)),
                            this.route.queryParams.subscribe((e) => {
                                (this.accountRefId = e.accountId),
                                    (this.productCode = e.productCode),
                                    (this.accountType = e.accountType),
                                    (this.accountTypeForTransaction = this._isCurrentSavings(
                                        e.accountType
                                    )),
                                    this.getAccountDetails(
                                        e.accountType,
                                        e.accountId,
                                        e.productCode,
                                        e.lastUpdateDetail
                                    ),
                                    this.handleQuickActions(e.accountType, e.accountId),
                                    (this.isPrimaryAccount = e.isPrimaryAccount),
                                    (this.type = e.accountType),
                                    "FDA" === this.type && "3301" !== this.productCode
                                        ? ((this.isSubFda = !0),
                                            this.getDepositDetail(e.accountId, null, !0))
                                        : this.getTransactionHistory(e.accountId, !1, !0);
                            }),
                            this.lastUpdateHeader(),
                            this.formGroup.valueChanges.subscribe((e) => {
                                this.onChangeFilter(e);
                            });
                    }
                    get isQuickActionOverflow() {
                        if (
                            this.statementBtnGroup?.nativeElement &&
                            this.statementBtnGroup?.nativeElement
                        ) {
                            const { offsetWidth: e } = this.statementBtnGroup.nativeElement,
                                { offsetWidth: a } = this.quickBtnGroup.nativeElement;
                            return a > e;
                        }
                        return !1;
                    }
                    getDepositDetail(e, a, n) {
                        var i = this;
                        return (0, g.A)(function* () {
                            ((!0 === a?.isSorted && void 0 === a?.order) ||
                                null === a?.order) &&
                                (a.orderBy = "depositStartDate");
                            try {
                                const T = {
                                    ...(a?.depositStartDate && {
                                        depositStartDate: a?.depositStartDate,
                                    }),
                                    ...(a?.depositEndDate && {
                                        depositEndDate: a?.depositEndDate,
                                    }),
                                    ...(a?.maturityStartDate && {
                                        maturityStartDate: a?.maturityStartDate,
                                    }),
                                    ...(a?.maturityEndDate && {
                                        maturityEndDate: a?.maturityEndDate,
                                    }),
                                    ...(a?.minAmount && { minAmount: a?.minAmount }),
                                    ...(a?.maxAmount && { maxAmount: a?.maxAmount }),
                                    ...(a?.pageSize && { pageSize: a?.pageSize }),
                                    ...(a?.pageNumber && { pageNumber: a?.pageNumber }),
                                    ...(a?.order && { order: a?.order }),
                                    ...(a?.orderBy && { orderBy: a?.orderBy }),
                                },
                                    q = i.generateUrl(T);
                                (i.depositDetail = yield i.facade.getDepositDetail(e, q)),
                                    (i.depositDetailData = i.depositDetail?.content),
                                    (i.displayDepositDetailFilter = !0);
                                const K = {
                                    totalPages: i.depositDetail?.pageable?.totalPages,
                                    last: i.depositDetail?.pageable?.last,
                                    totalElements: i.depositDetail?.pageable?.totalElements,
                                    numberOfElements:
                                        i.depositDetail?.pageable?.numberOfElements,
                                    pageSize: i.depositDetail?.pageable?.pageSize,
                                    pageNumber: i.depositDetail?.pageable?.pageNumber,
                                },
                                    Q = {
                                        pageSize: i.depositDetail?.pageable?.pageSize,
                                        pageNumber: i.depositDetail?.pageable?.pageNumber,
                                    };
                                (i.pageable = K),
                                    (i.pageableParam = Q),
                                    0 === i.depositDetailData?.length && n
                                        ? ((i.exceptionHandlingConfig.fiilterAndSearchNoData = !0),
                                            i.errorHandling())
                                        : 0 !== i.depositDetailData?.length || n
                                            ? (i.enableDepositDetailFilters = !0)
                                            : ((i.exceptionHandlingConfig.noDepositDetail = !0),
                                                i.errorHandling()),
                                    i.formatDepositDetailData();
                            } catch (T) {
                                const { status: R, error: q } = T;
                                "30021" === T.error?.code &&
                                    ((i.displayDepositDetailFilter = !1),
                                        (i.exceptionHandlingConfig.apiServiceDown = !0)),
                                    i.errorHandling(R, q);
                            }
                        })();
                    }
                    refreshDepositDetailTbl() {
                        this.ngOnInit();
                    }
                    getAccountDetails(e, a, n, i) {
                        var r = this;
                        return (0, g.A)(function* () {
                            switch (((r.lastUpdate = i), e)) {
                                case v.Tm.FixedDeposit:
                                    (r.fdAccountDetails = r.query.getValue().fdAccountDetails),
                                        (r.headerTitle =
                                            "account_enquiry_account_fixed_deposit_account_label"),
                                        r.analyticsService.sendPageViewEvent(
                                            "Account Enquiry_FDA_Landing"
                                        );
                                    break;
                                case v.Tm.Current:
                                case v.Tm.Savings:
                                    (r.casaAccountDetails =
                                        r.query.getValue().casaAccountDetails),
                                        (r.headerTitle =
                                            "account_enquiry_current_current_saving_title"),
                                        r.analyticsService.sendPageViewEvent(
                                            "Account Enquiry_CASA_Landing"
                                        );
                                    break;
                                case v.Tm.Loan:
                                    (r.loanAccountDetails =
                                        r.query.getValue().loanAccountDetails),
                                        (r.headerTitle = "account_enquiry_loan_loan_title"),
                                        r.analyticsService.sendPageViewEvent(
                                            "Account Enquiry_Loan_Landing"
                                        ),
                                        r.accountEnquiryService.productType$.next(
                                            r.loanAccountDetails
                                        );
                                    break;
                                default:
                                    r.nav.goTo(F.Gu.UNKNOWN);
                            }
                        })();
                    }
                    handleQuickActions(e, a) {
                        var n = this;
                        return (0, g.A)(function* () {
                            switch (
                            ((n.quickActions = yield n.facade.getQuickActions(a)), e)
                            ) {
                                case v.Tm.FixedDeposit:
                                    (n.isRequestStatementEnabled =
                                        n.quickActions.statement.isEnabled),
                                        (n.isRequestStatementVisible =
                                            n.quickActions.statement.isVisible);
                                    break;
                                case v.Tm.Current:
                                    (n.isTransferEnabled = n.quickActions.transfer?.isEnabled),
                                        (n.isTransferVisible = n.quickActions.transfer?.isVisible),
                                        (n.isPaymentEnabled = n.quickActions.payment?.isEnabled),
                                        (n.isPaymentVisible = n.quickActions.payment?.isVisible),
                                        (n.isRequestStatementEnabled =
                                            n.quickActions?.statement?.isEnabled),
                                        (n.isRequestStatementVisible =
                                            n.quickActions?.statement?.isVisible),
                                        (n.isInternationalTransferEnabled =
                                            n.quickActions?.internationalTransfer?.isEnabled),
                                        (n.isInternationalTransferVisible =
                                            n.quickActions?.internationalTransfer?.isVisible),
                                        (n.isFcdDomesticTransferEnabled =
                                            n.quickActions?.fcdDomesticTransfer.isEnabled),
                                        (n.isFcdDomesticTransferVisible =
                                            n.quickActions?.fcdDomesticTransfer.isVisible);
                                    break;
                                case v.Tm.Savings:
                                    (n.isTransferEnabled = n.quickActions.transfer?.isEnabled),
                                        (n.isTransferVisible = n.quickActions.transfer?.isVisible),
                                        (n.isPaymentEnabled = n.quickActions.payment?.isEnabled),
                                        (n.isPaymentVisible = n.quickActions.payment?.isVisible),
                                        (n.isRequestStatementEnabled =
                                            n.quickActions.statement.isEnabled),
                                        (n.isRequestStatementVisible =
                                            n.quickActions.statement.isVisible),
                                        (n.isInternationalTransferEnabled =
                                            n.quickActions?.internationalTransfer?.isEnabled),
                                        (n.isInternationalTransferVisible =
                                            n.quickActions?.internationalTransfer?.isVisible),
                                        (n.isFcdDomesticTransferEnabled =
                                            n.quickActions?.fcdDomesticTransfer.isEnabled),
                                        (n.isFcdDomesticTransferVisible =
                                            n.quickActions?.fcdDomesticTransfer.isVisible);
                                    break;
                                case v.Tm.Loan:
                                    (n.isRequestStatementEnabled =
                                        n.quickActions.statement.isEnabled),
                                        (n.isRequestStatementVisible =
                                            n.quickActions.statement.isVisible);
                                    break;
                                default:
                                    (n.isTransferEnabled = !1),
                                        (n.isTransferVisible = !1),
                                        (n.isPaymentEnabled = !1),
                                        (n.isPaymentVisible = !1),
                                        (n.isRequestStatementEnabled = !1),
                                        (n.isRequestStatementVisible = !1),
                                        (n.isInternationalTransferEnabled = !1),
                                        (n.isInternationalTransferVisible = !1),
                                        (n.isFcdDomesticTransferEnabled = !1),
                                        (n.isFcdDomesticTransferVisible = !1);
                            }
                        })();
                    }
                    backToAccountList() {
                        this.analyticsService.sendPageViewEvent(
                            "Account Enquiry_AccountList"
                        ),
                            this.nav.goTo(F.Gu.ACCOUNT_ENQUIRY);
                    }
                    lastUpdateHeader() {
                        this.lastUpdate = new Date();
                    }
                    getTransactionHistory(e, a, n) {
                        var i = this;
                        return (0, g.A)(function* () {
                            i.pageNumber = !0 === n ? (i.pageNumber = 0) : i.pageNumber;
                            const r =
                                (!0 === a && void 0 === i.order?.order) ||
                                    null === i.order?.order
                                    ? (i.order.orderBy = "transactionDate")
                                    : i.order?.orderBy;
                            try {
                                const m = {
                                    ...(i.accountTypeForTransaction && {
                                        accountType: i._isCurrentSavings(
                                            i.accountTypeForTransaction
                                        ),
                                    }),
                                    ...(i.searchQuery && { searchQuery: i.searchQuery }),
                                    ...(i.transactionType && {
                                        transactionType: i.transactionType,
                                    }),
                                    ...(i.minAmount && { minAmount: i.minAmount }),
                                    ...(i.maxAmount && { maxAmount: i.maxAmount }),
                                    ...(i.startDate && { startDate: i.startDate }),
                                    ...(i.endDate && { endDate: i.endDate }),
                                    ...(i.month && { month: i.month }),
                                    ...(i.pageSize && { pageSize: i.pageSize }),
                                    ...(i.pageNumber && { pageNumber: i.pageNumber }),
                                    ...(i.order?.order && { order: i.order?.order }),
                                    ...(r && { orderBy: r }),
                                };
                                (0, M.A)(i.transactionRefId) || (0, b.A)(i.transactionRefId)
                                    ? delete m.transactionRefId
                                    : (m.transactionRefId = i.transactionRefId);
                                const T = i.generateUrl(m);
                                (i.transactionHistory = yield i.facade.getTransactionHistory(
                                    e,
                                    T
                                )),
                                    (i.transactionData = i.transactionHistory?.content),
                                    (i.pageable = i.transactionHistory?.pageable),
                                    0 === i.transactionData?.length && !0 === n
                                        ? ((i.disabledSearchandFilters = !0),
                                            (i.enablePagination = i.pageable.totalPages >= 1),
                                            (i.exceptionHandlingConfig.noData = !0),
                                            i.errorHandling())
                                        : ((i.enablePagination = !0),
                                            (i.disabledSearchandFilters = !1),
                                            (i.isDisplayFilter = !0)),
                                    0 === i.transactionData?.length &&
                                    ((i.disabledSearchandFilters = !1),
                                        (i.isDisplayFilter = !0),
                                        (i.exceptionHandlingConfig.fiilterAndSearchNoData = !0),
                                        i.errorHandling()),
                                    i.formatTransactionHistoryData();
                            } catch (m) {
                                const { status: T, error: R } = m;
                                (i.transactionHistory = null),
                                    (i.transactionData = []),
                                    (i.pageable = {
                                        pageSize: 0,
                                        numberOfElements: 0,
                                        totalElements: 0,
                                        last: !0,
                                        totalPages: 0,
                                        pageNumber: 0,
                                    }),
                                    (i.enablePagination = !1),
                                    "30021" === R?.code
                                        ? ((i.disabledSearchandFilters = !0),
                                            (i.isDisplayFilter = !1),
                                            (i.exceptionHandlingConfig.apiServiceDown = !0),
                                            (i.exceptionHandlingConfig.dateRangeFilterError = !1),
                                            (i.exceptionHandlingConfig.filterAndSearchApiError = !1),
                                            (i.exceptionHandlingConfig.filterError = !1))
                                        : "30024" === R?.code
                                            ? ((i.exceptionHandlingConfig.dateRangeFilterError = !0),
                                                (i.exceptionHandlingConfig.filterAndSearchApiError = !1),
                                                (i.exceptionHandlingConfig.filterError = !1),
                                                (i.exceptionHandlingConfig.apiServiceDown = !1))
                                            : "30015" === R?.code
                                                ? ((i.exceptionHandlingConfig.filterError = !0),
                                                    (i.exceptionHandlingConfig.dateRangeFilterError = !1),
                                                    (i.exceptionHandlingConfig.filterAndSearchApiError = !1),
                                                    (i.exceptionHandlingConfig.apiServiceDown = !1))
                                                : ((i.exceptionHandlingConfig.filterAndSearchApiError = !0),
                                                    (i.exceptionHandlingConfig.dateRangeFilterError = !1),
                                                    (i.exceptionHandlingConfig.filterError = !1),
                                                    (i.exceptionHandlingConfig.apiServiceDown = !1),
                                                    (i.disabledSearchandFilters = !0),
                                                    (i.isDisplayFilter = !1)),
                                    i.errorHandling(T, R);
                            }
                        })();
                    }
                    refreshTransactionHistoryTbl() {
                        (this.searchQuery = null),
                            (this.transactionRefId = null),
                            (this.transactionType = null),
                            (this.minAmount = null),
                            (this.maxAmount = null),
                            (this.startDate = null),
                            (this.endDate = null),
                            (this.month = null),
                            (this.pageSize = 10),
                            (this.pageNumber = 0),
                            (this.order = null),
                            this.ngOnInit();
                    }
                    generateUrl(e) {
                        const a = Object.entries(e).map(([n, i]) =>
                            Array.isArray(i)
                                ? i.map((r) => `${n}=${r}`).join("&")
                                : `${n}=${i}`
                        );
                        return a.length > 0 ? `${a.join("&")}` : "";
                    }
                    formatTransactionHistoryData() {
                        (this.transactionData = (0, c.A)(this.transactionData, (e) => ({
                            transactionIndex: e.transactionIndex,
                            transactionDate: this._datePipe.transform(
                                e.transactionDateTime,
                                "dd MMM yyyy - HH:mm"
                            ),
                            descTransactionInfo: {
                                cellType: "multirow",
                                allowHtml: !0,
                                rows: [
                                    `${e.transactionCode} ${e.descriptionName}`,
                                    `${e.transactionComment} ${e?.paymentRef || ""}`,
                                    `${this.translate.instant(this.constants.channel)}: ${e.descriptionChannel
                                    }`,
                                ],
                            },
                            withdraw:
                                0 === e.withdraw
                                    ? `0.00 ${e.currency}`
                                    : e.withdraw
                                        ? `${this._decimalPipe.transform(e.withdraw, "1.2-2")} ${e.currency
                                        }`
                                        : " ",
                            deposit:
                                0 === e.deposit
                                    ? `0.00 ${e.currency}`
                                    : e.deposit
                                        ? `${this._decimalPipe.transform(e.deposit, "1.2-2")} ${e.currency
                                        }`
                                        : " ",
                            ledgerBalance:
                                0 === e.ledgerBalance
                                    ? `0.00 ${e.currency}`
                                    : e.ledgerBalance
                                        ? `${this._decimalPipe.transform(e.ledgerBalance, "1.2-2")} ${e.currency
                                        }`
                                        : " ",
                        }))),
                            this.formatTransactionHistoryTable();
                    }
                    formatTransactionHistoryTable() {
                        return (
                            (this.transactionTableColumns =
                                this.accountTypeForTransaction === v.Tm.Loan
                                    ? [
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_date_time_label"
                                            ),
                                            columnName: "transactionDate",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 136,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_description_label"
                                            ),
                                            columnName: "descTransactionInfo",
                                            sortable: !1,
                                            direction: null,
                                            widthSize: 456,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_withdraw_label"
                                            ),
                                            columnName: "withdraw",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 118,
                                            rightAlign: !0,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_deposit_label"
                                            ),
                                            columnName: "deposit",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 118,
                                            rightAlign: !0,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                this.productType?.isLoanCommitmentAccount
                                                    ? "account_enquiry_loan_available_credit_label"
                                                    : "account_enquiry_current_outstanding_principal_label"
                                            ),
                                            columnName: "ledgerBalance",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 158,
                                            rightAlign: !0,
                                        },
                                    ]
                                    : [
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_date_time_label"
                                            ),
                                            columnName: "transactionDate",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 136,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_description_label"
                                            ),
                                            columnName: "descTransactionInfo",
                                            sortable: !1,
                                            direction: null,
                                            widthSize: 456,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_withdraw_label"
                                            ),
                                            columnName: "withdraw",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 118,
                                            rightAlign: !0,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_deposit_label"
                                            ),
                                            columnName: "deposit",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 118,
                                            rightAlign: !0,
                                        },
                                        {
                                            headerName: this.translate.instant(
                                                "account_enquiry_current_ledger_balance_label"
                                            ),
                                            columnName: "ledgerBalance",
                                            sortable: !0,
                                            direction: null,
                                            widthSize: 158,
                                            rightAlign: !0,
                                        },
                                    ]),
                            this.transactionTableColumns
                        );
                    }
                    formatDepositDetailData() {
                        (this.depositDetailData = (0, c.A)(this.depositDetailData, (e) => ({
                            depositStartDate: this._datePipe.transform(
                                e.depositStartDate,
                                "dd MMM yyyy"
                            ),
                            maturityDate: this._datePipe.transform(
                                e.maturityDate,
                                "dd MMM yyyy"
                            ),
                            depositTerm:
                                null !== e.depositTerm || void 0 !== e.depositTerm
                                    ? `${e.depositTerm} months`
                                    : "-",
                            interestRate:
                                null !== e.interestRate || void 0 !== e.interestRate
                                    ? `${e.interestRate}%`
                                    : "-",
                            ledgerBalance:
                                null !== e.ledgerBalance || void 0 !== e.ledgerBalance
                                    ? `${this._decimalPipe.transform(e.ledgerBalance, "1.2-2")} ${e.currency
                                    }`
                                    : "-",
                            accruedInterest:
                                null !== e.accruedInterest || void 0 !== e.accruedInterest
                                    ? `${this._decimalPipe.transform(
                                        e.accruedInterest,
                                        "1.2-2"
                                    )} ${e.currency}`
                                    : "-",
                        }))),
                            this.formatDepositDetailTable();
                    }
                    formatDepositDetailTable() {
                        this.depositDetailColumns = [
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_deposit_start_date_label"
                                ),
                                columnName: "depositStartDate",
                                sortable: !0,
                                direction: null,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_maturity_start_date_label"
                                ),
                                columnName: "maturityDate",
                                sortable: !0,
                                direction: null,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_deposit_term_label"
                                ),
                                columnName: "depositTerm",
                                sortable: !0,
                                direction: null,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_interest_rate_label"
                                ),
                                columnName: "interestRate",
                                sortable: !0,
                                direction: null,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_deposit_balance_label"
                                ),
                                columnName: "ledgerBalance",
                                sortable: !0,
                                direction: null,
                                rightAlign: !0,
                            },
                            {
                                headerName: this.translate.instant(
                                    "account_enquiry_fda_sub_accrued_interest_label"
                                ),
                                columnName: "accruedInterest",
                                sortable: !0,
                                direction: null,
                            },
                        ];
                    }
                    _isCurrentSavings(e) {
                        return e === v.Tm.Current || e === v.Tm.Savings
                            ? v.Tm.CurrentSavings
                            : e;
                    }
                    onPageChange(e) {
                        (this.currentPage = e),
                            (this.pageNumber = this.currentPage - 1),
                            this.getTransactionHistory(this.accountRefId, !1);
                    }
                    onPageSizeChange(e) {
                        (this.pageSize = e),
                            (this.pageNumber = 0),
                            (this.currentPage = 1),
                            this.getTransactionHistory(this.accountRefId, !1, !0);
                    }
                    onSorting(e) {
                        (this.order = e), this.getTransactionHistory(this.accountRefId, !0);
                    }
                    openSidePanel() {
                        if (!this.sidePanelService.isVisibleSidePanel) {
                            switch (this.accountType) {
                                case "CA":
                                case "SA":
                                    this.analyticsService.sendPageViewEvent(
                                        "Account Enquiry_CASA_Details_SlidingBar"
                                    );
                                    break;
                                case "FDA":
                                    this.analyticsService.sendPageViewEvent(
                                        "Account Enquiry_FDA_Details_SlidingBar"
                                    );
                                    break;
                                case "LA":
                                    this.analyticsService.sendPageViewEvent(
                                        "Account Enquiry_Loan_Details_SlidingBar"
                                    );
                            }
                            this.sidePanelService.setGrayHeader(!0),
                                this.sidePanelService.setGrayBackground(),
                                this.sidePanelService.open();
                        }
                    }
                    onSelectAccount(e) {
                        this.sidePanelService.setContent(this.sidePanelTransactionHistory),
                            this.sidePanelService.setHeader(
                                this.translate.instant(
                                    "account_enquiry_current_panel_transaction_details_title"
                                ),
                                !0
                            ),
                            this.sidePanelService.setGrayBackground(),
                            this.sidePanelService.setGrayHeader(),
                            this.accountEnquiryService.setTransactionHistoryData(e),
                            this.openSidePanel();
                    }
                    onSuggestionClicked(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            (a.transactionRefId = e?.key),
                                yield a.getTransactionHistory(a.accountRefId);
                        })();
                    }
                    OnSearchEnter(e) {
                        (this.transactionRefId = null),
                            (this.searchQuery = e),
                            this.getTransactionHistory(this.accountRefId);
                    }
                    onSearchSuggestion(e) {
                        e && (0, k.A)(e)
                            ? ((this.searchQuery = null),
                                this.getTransactionHistory(this.accountRefId))
                            : e &&
                            e.length > 0 &&
                            ((this.searchQuery = e), this.loadSuggestion(this.searchQuery));
                    }
                    loadSuggestion(e) {
                        var a = this;
                        return (0, g.A)(function* () {
                            try {
                                const n = {
                                    ...(a.accountTypeForTransaction && {
                                        accountType: a._isCurrentSavings(
                                            a.accountTypeForTransaction
                                        ),
                                    }),
                                    ...(a.searchQuery && { searchQuery: e }),
                                    ...(a.transactionType && {
                                        transactionType: a.transactionType,
                                    }),
                                    ...(a.minAmount && { minAmount: a.minAmount }),
                                    ...(a.maxAmount && { maxAmount: a.maxAmount }),
                                    ...(a.startDate && { startDate: a.startDate }),
                                    ...(a.endDate && { endDate: a.endDate }),
                                    ...(a.month && { month: a.month }),
                                };
                                (0, M.A)(a.transactionRefId) || (0, b.A)(a.transactionRefId)
                                    ? delete n.transactionRefId
                                    : (n.transactionRefId = a.transactionRefId);
                                const i = a.generateUrl(n),
                                    r = yield a.facade.getTransactionHistorySearchSuggestion(
                                        a.accountRefId,
                                        i
                                    );
                                a.suggestion = (0, c.A)(r?.suggestion, (m) => ({
                                    data: [
                                        m.transactionCode,
                                        m.descriptionName,
                                        m.transactionComment,
                                        m.descriptionChannel,
                                    ],
                                    key: m.transactionRefId,
                                }));
                            } catch (n) { }
                        })();
                    }
                    onSearchCleared() {
                        var e = this;
                        return (0, g.A)(function* () {
                            (e.transactionRefId = null),
                                (e.searchQuery = null),
                                e.getTransactionHistory(e.accountRefId);
                        })();
                    }
                    onChangeFilter(e) {
                        if (e.dateFilterControl) {
                            const a = this._datePipe.transform(
                                e?.dateFilterControl?.start,
                                "yyy-MM-dd"
                            ),
                                n = this._datePipe.transform(
                                    e?.dateFilterControl?.end,
                                    "yyy-MM-dd"
                                );
                            (this.startDate = a), (this.endDate = n);
                        } else
                            null === e.dateFilterControl &&
                                ((this.startDate = null), (this.endDate = null));
                        e.amountInputControl
                            ? ((this.transactionType = e?.amountInputControl?.radioButton),
                                (this.minAmount =
                                    0 !== e?.amountInputControl?.minimumAmount
                                        ? e?.amountInputControl?.minimumAmount
                                        : "0"),
                                (this.maxAmount =
                                    0 !== e?.amountInputControl?.maximumAmount
                                        ? e?.amountInputControl?.maximumAmount
                                        : "0"),
                                this.getTransactionHistory(this.accountRefId))
                            : null == e.amountInputControl &&
                            ((this.transactionType = null),
                                (this.minAmount = null),
                                (this.maxAmount = null),
                                this.getTransactionHistory(this.accountRefId, !1, !1));
                    }
                    onFilterChanged(e) {
                        this.getDepositDetail(this.accountRefId, e);
                    }
                    onClickNewTransfer() {
                        this.router.navigate([F.Gu.TRANSFER_NEW], {
                            queryParams: { accountRefId: this.accountRefId },
                        });
                    }
                    onClickNewPayment() {
                        this.router.navigate([F.Gu.PAYMENT_NEW], {
                            queryParams: {
                                accountRefId: this.accountRefId,
                                from: F.Gu.ACCOUNT_ENQUIRY_CASA_ACC,
                            },
                        });
                    }
                    onClickRequestStatement() {
                        this.router.navigate([F.Gu.GENERATE_STATEMENT], {
                            queryParams: {
                                action: "REDIRECT",
                                accountRefId: JSON.stringify([this.accountRefId]),
                            },
                        });
                    }
                    onClickNewInternationalTransfer() {
                        this.router.navigate([F.Gu.INTERNATIONAL_TRANSFER_SUMMARY], {
                            queryParams: { accountRefId: this.accountRefId },
                        });
                    }
                    onClickNewFcdDomesticTransfer() {
                        var e = this;
                        return (0, g.A)(function* () {
                            try {
                                yield e.facade.postFcdAccountCurrencyValidation(e.accountRefId),
                                    e.router.navigate([F.Gu.FCD_TRANSFER_SUMMARY], {
                                        queryParams: {
                                            accountRefId: e.accountRefId,
                                            currency: e.casaAccountDetails.currency,
                                        },
                                    });
                            } catch (a) {
                                e.dialog.open(ot.EJ, {
                                    data: {
                                        title: a.error.title,
                                        description: a.error.message,
                                        buttonLabel: e.translate.instant(
                                            "foundation_transaction_ok"
                                        ),
                                        errorCode: a.error.code,
                                    },
                                });
                            }
                        })();
                    }
                    onClickExport() {
                        const e = (0, j.A)(
                            {
                                accountRefId: this.accountRefId,
                                accountType: this.accountTypeForTransaction,
                                searchQuery: this.searchQuery,
                                transactionType: this.transactionType,
                                maxAmount: this.maxAmount,
                                minAmount: this.minAmount,
                                startDate: this.startDate,
                                endDate: this.endDate,
                                month: this.month,
                                order: this.order?.order,
                                orderBy: this.order?.orderBy,
                            },
                            W.A
                        );
                        this.accountEnquiryService.setExportTransactionHistParam(e),
                            this.dialog.open(pt, {
                                data: { accountRefId: this.accountRefId, bodyParam: e },
                            });
                    }
                    errorHandling(e, a) {
                        return (
                            !0 === this.exceptionHandlingConfig.noData
                                ? (this.emptyTableTextData = {
                                    title: this.translate.instant(
                                        "account_enquiry_casa_no_transaction_label"
                                    ),
                                    subtitle: this.translate.instant(
                                        "account_enquiry_casa_no_transaction_remark_explainer"
                                    ),
                                    icon: "",
                                    refreshText: null,
                                })
                                : !0 === this.exceptionHandlingConfig.noDepositDetail
                                    ? (this.emptyTableTextData = {
                                        title: "",
                                        subtitle: this.translate.instant(
                                            "account_enquiry_fda_sub_no_deposit_record_label"
                                        ),
                                        icon: "",
                                        refreshText: null,
                                    })
                                    : !0 === this.exceptionHandlingConfig.filterAndSearchApiError
                                        ? (this.emptyTableTextData = {
                                            title: this.translate.instant(
                                                "foundation_general_error_component_title"
                                            ),
                                            subtitle: this.translate.instant(
                                                "foundation_general_error_component_message"
                                            ),
                                            icon: "failed-to-load-api",
                                            refreshText: this.translate.instant(
                                                "foundation_general_error_component_refresh_button_label"
                                            ),
                                        })
                                        : !0 === this.exceptionHandlingConfig.fiilterAndSearchNoData
                                            ? (this.emptyTableTextData = {
                                                title: "",
                                                subtitle: this.translate.instant(
                                                    "account_enquriy_casa_no_match_result_remark_explainer"
                                                ),
                                                icon: "",
                                                refreshText: null,
                                            })
                                            : !0 === this.exceptionHandlingConfig.apiServiceDown &&
                                                "30021" === a?.code
                                                ? (this.emptyTableTextData = {
                                                    title: this.translate.instant(
                                                        "foundation_general_error_component_title"
                                                    ),
                                                    subtitle: this.translate.instant(
                                                        "foundation_general_error_component_message"
                                                    ),
                                                    icon: "failed-to-load-api",
                                                    refreshText: this.translate.instant(
                                                        "foundation_general_error_component_refresh_button_label"
                                                    ),
                                                })
                                                : !0 === this.exceptionHandlingConfig.dateRangeFilterError &&
                                                    "30024" === a?.code
                                                    ? (this.emptyTableTextData = {
                                                        title: a?.title,
                                                        subtitle: a?.message,
                                                        icon: "empty-tasks",
                                                        refreshText: null,
                                                    })
                                                    : !0 === this.exceptionHandlingConfig.filterError &&
                                                    "30015" === a?.code &&
                                                    (this.emptyTableTextData = {
                                                        title: this.translate.instant(
                                                            "statement_table_empty_state_title_no_transaction"
                                                        ),
                                                        subtitle: this.translate.instant(
                                                            "account_enquiry_casa_no_transaction_remark_explainer"
                                                        ),
                                                        icon: "empty-tasks",
                                                        refreshText: null,
                                                    }),
                            this.emptyTableTextData
                        );
                    }
                    ngOnDestroy() {
                        this.sidePanelService.close();
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(
                                t.rXU(P.nX),
                                t.rXU(d.j),
                                t.rXU(rt.A),
                                t.rXU(F.HM),
                                t.rXU(p.c$),
                                t.rXU(o.QX),
                                t.rXU(o.vh),
                                t.rXU(_.ze),
                                t.rXU(E.e),
                                t.rXU(h.J$),
                                t.rXU(Y.c),
                                t.rXU(P.Ix),
                                t.rXU(z.bZ)
                            );
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-account-enquiry"]],
                            viewQuery: function (a, n) {
                                if (
                                    (1 & a && (t.GBs(_n, 5), t.GBs(pn, 5), t.GBs(mn, 5)), 2 & a)
                                ) {
                                    let i;
                                    t.mGM((i = t.lsd())) &&
                                        (n.sidePanelTransactionHistory = i.first),
                                        t.mGM((i = t.lsd())) && (n.quickBtnGroup = i.first),
                                        t.mGM((i = t.lsd())) && (n.statementBtnGroup = i.first);
                                }
                            },
                            decls: 30,
                            vars: 25,
                            consts: [
                                ["statementBtnGroup", ""],
                                ["quickBtnGroup", ""],
                                ["sidePanelTransactionHistory", ""],
                                ["searchSuggestion", ""],
                                [
                                    "theme",
                                    "dark",
                                    1,
                                    "clear-padding-top",
                                    3,
                                    "boxed",
                                    "bleed",
                                    "bleedAmount",
                                ],
                                ["id", "section-casa-detail"],
                                [1, "card-panel-title"],
                                [1, "back-title-container"],
                                [3, "click", "label"],
                                ["class", "last-login-date", 4, "ngIf"],
                                [1, "title-label"],
                                [4, "ngIf"],
                                ["id", "statement-btn", 1, "statement-btn-group", 3, "ngClass"],
                                [1, "quick-btn-group"],
                                ["uiButton", "tertiary", 3, "disabled", "click", 4, "ngIf"],
                                [1, "accounts-section"],
                                ["theme", "light", 1, "clear-padding"],
                                ["class", "account-list-card", 4, "ngIf"],
                                [1, "last-login-date"],
                                [3, "data", "isPrimaryAccount", "accountType"],
                                [3, "data", "isSubFda"],
                                [3, "data"],
                                ["uiButton", "tertiary", 3, "click", "disabled"],
                                ["name", "service-new-bulk-transfer", 3, "ngClass"],
                                ["name", "service-new-payment", 3, "ngClass"],
                                ["name", "international-active", 3, "ngClass"],
                                ["name", "add-doc", 1, "acc-enquiry-icons"],
                                [1, "account-list-card"],
                                [1, "account-list-container"],
                                [1, "white-card-title"],
                                [3, "click", "uiButton", "disabled"],
                                ["name", "download", 1, "acc-enquiry-icons", 3, "ngStyle"],
                                [
                                    "style",
                                    "display: flex; column-count: 3; column-gap: 16px",
                                    3,
                                    "formGroup",
                                    "ngStyle",
                                    4,
                                    "ngIf",
                                ],
                                [1, "transaction-history-tbl"],
                                [
                                    1,
                                    "remove-padding",
                                    3,
                                    "sortChanged",
                                    "pageChanged",
                                    "pageSizeChanged",
                                    "rowClicked",
                                    "refreshData",
                                    "data",
                                    "tableHeader",
                                    "totalItems",
                                    "enablePagination",
                                    "pageSizeOptions",
                                    "defaultPageSize",
                                    "pageSize",
                                    "totalPages",
                                    "currentPage",
                                    "emptyTableTextData",
                                    "selectionMode",
                                    "showActionButtonsColumn",
                                ],
                                [
                                    2,
                                    "display",
                                    "flex",
                                    "column-count",
                                    "3",
                                    "column-gap",
                                    "16px",
                                    3,
                                    "formGroup",
                                    "ngStyle",
                                ],
                                [
                                    1,
                                    "search-input-field",
                                    3,
                                    "onSearchSuggestion",
                                    "onSearchEnter",
                                    "onOptionSelected",
                                    "onSearchCleared",
                                    "isDisabled",
                                    "placeholderKey",
                                    "isSearchbarUpdatedWhenSelect",
                                    "clearKeyword",
                                    "suggestionList",
                                    "isCallApiOnEmpty",
                                ],
                                [1, "ktb-form-label"],
                                [
                                    "formControlName",
                                    "dateFilterControl",
                                    "rangePicker",
                                    "",
                                    3,
                                    "headerText",
                                    "filterWeekends",
                                    "minDate",
                                    "maxDate",
                                    "rangeLimit",
                                    "isCalendarOnTheLeft",
                                ],
                                [
                                    "formControlName",
                                    "amountInputControl",
                                    3,
                                    "placeholder",
                                    "minAmountLabelText",
                                    "maxAmountLabelText",
                                    "errorText",
                                    "radioButtons",
                                    "inputRequireSelection",
                                    "maxlength",
                                ],
                                [1, "white-card-title", "pad-btm-24"],
                                [
                                    3,
                                    "tablePropertyChanged",
                                    "filterChanged",
                                    "refreshData",
                                    "data",
                                    "tableHeader",
                                    "pageable",
                                    "pageableParam",
                                    "enablePagination",
                                    "pageSizeOptions",
                                    "selectionMode",
                                    "enableDepositDetailFilter",
                                    "isDisplayFilter",
                                    "enableFilters",
                                    "emptyTableTextData",
                                    "isAPIError",
                                ],
                                [3, "accountRefId"],
                            ],
                            template: function (a, n) {
                                if (1 & a) {
                                    const i = t.RV6();
                                    t.j41(0, "ui-section", 4)(1, "section", 5)(2, "div", 6)(
                                        3,
                                        "div",
                                        7
                                    )(4, "ui-back-nav", 8),
                                        t.nI1(5, "translate"),
                                        t.bIt("click", function () {
                                            return t.eBV(i), t.Njj(n.backToAccountList());
                                        }),
                                        t.k0s(),
                                        t.DNE(6, bn, 4, 7, "div", 9),
                                        t.k0s(),
                                        t.j41(7, "h1", 10),
                                        t.EFF(8),
                                        t.nI1(9, "translate"),
                                        t.k0s()(),
                                        t.DNE(10, yn, 2, 3, "div", 11)(11, Cn, 2, 2, "div", 11)(
                                            12,
                                            vn,
                                            2,
                                            2,
                                            "div",
                                            11
                                        )(13, Tn, 2, 1, "div", 11),
                                        t.j41(14, "div", 12, 0)(16, "div", 13, 1),
                                        t.DNE(18, Pn, 4, 5, "button", 14)(
                                            19,
                                            Rn,
                                            4,
                                            5,
                                            "button",
                                            14
                                        )(20, In, 4, 5, "button", 14)(21, kn, 4, 4, "button", 14)(
                                            22,
                                            Mn,
                                            4,
                                            4,
                                            "button",
                                            14
                                        ),
                                        t.k0s()()()(),
                                        t.j41(23, "div", 15)(24, "ui-section", 16),
                                        t.DNE(25, On, 13, 23, "div", 17)(
                                            26,
                                            En,
                                            1,
                                            0,
                                            "ng-template",
                                            null,
                                            2,
                                            t.C5r
                                        )(28, xn, 5, 15, "div", 11),
                                        t.k0s(),
                                        t.DNE(29, An, 2, 1, "ng-container", 11),
                                        t.k0s();
                                }
                                2 & a &&
                                    (t.Y8G("boxed", !1)("bleed", !0)("bleedAmount", "80px"),
                                        t.R7$(4),
                                        t.Y8G("label", t.bMT(5, 19, n.constants.backLabel)),
                                        t.R7$(2),
                                        t.Y8G("ngIf", n.lastUpdate),
                                        t.R7$(2),
                                        t.JRh(t.bMT(9, 21, n.headerTitle)),
                                        t.R7$(2),
                                        t.Y8G(
                                            "ngIf",
                                            null !== n.casaAccountDetails &&
                                            ("CA" === n.type || "SA" === n.type)
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            null !== n.fdAccountDetails &&
                                            "FDA" === n.type &&
                                            "3301" === n.productCode
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            null !== n.fdAccountDetails &&
                                            "FDA" === n.type &&
                                            "3301" !== n.productCode
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            null !== n.loanAccountDetails && "LA" === n.type
                                        ),
                                        t.R7$(),
                                        t.Y8G("ngClass", t.eq3(23, gn, n.isQuickActionOverflow)),
                                        t.R7$(4),
                                        t.Y8G(
                                            "ngIf",
                                            ("CA" === n.type || "SA" === n.type) && n.isTransferVisible
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            ("CA" === n.type || "SA" === n.type) && n.isPaymentVisible
                                        ),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            ("CA" === n.type || "SA" === n.type) &&
                                            n.isInternationalTransferVisible
                                        ),
                                        t.R7$(),
                                        t.Y8G("ngIf", n.isRequestStatementVisible),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            ("CA" === n.type || "SA" === n.type) &&
                                            n.isFcdDomesticTransferVisible
                                        ),
                                        t.R7$(3),
                                        t.Y8G("ngIf", !n.isSubFda),
                                        t.R7$(3),
                                        t.Y8G("ngIf", n.isSubFda),
                                        t.R7$(),
                                        t.Y8G(
                                            "ngIf",
                                            "CA" === n.accountType || "SA" === n.accountType
                                        ));
                            },
                            dependencies: [
                                o.YU,
                                o.bT,
                                o.B3,
                                et.F,
                                X.Q,
                                x.G,
                                _.BC,
                                _.cb,
                                _.tU,
                                V.O,
                                L.O,
                                _.j4,
                                _.JD,
                                H.n,
                                mt.i,
                                J.v,
                                ft,
                                Ct,
                                St,
                                At,
                                jt,
                                dn,
                                o.vh,
                                p.D9,
                            ],
                            styles: [
                                ".back-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-primary-border[_ngcontent-%COMP%]{height:auto;padding:0 8px;border-radius:24px}.last-login-date[_ngcontent-%COMP%]{color:#fff;font-family:Krungthai Fast,sans-serif;font-size:1rem;line-height:1.4285714286}.card-panel[_ngcontent-%COMP%]{background-color:#003258;min-height:100%;padding:0 2.8571428571rem 7.4285714286rem;margin-bottom:-8.5714285714rem}.card-panel-title[_ngcontent-%COMP%]{padding:48px 0 0;color:#fff}.back-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:5px}.back-title-container[_ngcontent-%COMP%]   .last-update-date[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:.7142857143rem;line-height:1.5}.back-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:auto}.back-icon[_ngcontent-%COMP%]{margin-right:20px;font-size:20px;cursor:pointer}.back-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#4a4a49}.title-label[_ngcontent-%COMP%]{font-weight:700;font-size:2.5714285714rem;line-height:1.3333333333;font-style:normal}.main-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.blue-card[_ngcontent-%COMP%]{background:linear-gradient(180deg,#8ea2b7 -37.49%,#416487 53.7%,#002240 112.95%);box-shadow:0 4px 8px -2px #002240cc;border-radius:8px;display:flex;flex-direction:column;min-height:250px;padding:40px;color:#fff;height:auto}.blue-card.small[_ngcontent-%COMP%]{width:35%;margin-right:16px}.blue-card.large[_ngcontent-%COMP%]{width:65%}.card-label-bold[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1rem;line-height:1.4285714286;font-style:normal}.card-caption2[_ngcontent-%COMP%], .card-primary-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:.7142857143rem;line-height:1.5;font-style:normal}.card-body1[_ngcontent-%COMP%]{font-family:Krungthai Smart,sans-serif;font-weight:400;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.card-h4[_ngcontent-%COMP%], .card-h4-bold[_ngcontent-%COMP%], .card-h4-label-golden-yellow[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:400;font-size:1.7142857143rem;line-height:1.3333333333;font-style:normal}.card-flex-display[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-primary-label[_ngcontent-%COMP%]{color:#ffcb00;text-align:center}.card-primary-label.disabled[_ngcontent-%COMP%]{color:#bbb}.card-primary-border[_ngcontent-%COMP%]{vertical-align:middle;border:1px solid #ffcb00;color:#ffcb00}.card-primary-border.disabled[_ngcontent-%COMP%]{border:1px solid #bbbbbb;pointer-events:none}.card-h4-label-golden-yellow[_ngcontent-%COMP%]{color:#ffcb00}.card-h4-bold[_ngcontent-%COMP%]{color:#fff;font-weight:700}.divider[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #416487}.divider-large[_ngcontent-%COMP%]{display:block;margin:1.1428571429rem 0;border-top:1px solid #647e9a}.progress-cont[_ngcontent-%COMP%]{position:relative;height:7px;width:100%;border-radius:4px;background:linear-gradient(180deg,#e3e3e3,#bbb)}.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:0;height:100%;position:absolute;z-index:1;top:0;left:0;border-radius:4px;background:linear-gradient(180deg,#4ed8da,#00a6e6);transition:.5s all}.accounts-section[_ngcontent-%COMP%]   ui-section[_ngcontent-%COMP%]   .account-list-accounts-section[_ngcontent-%COMP%]   .disable-search-filter[_ngcontent-%COMP%]{pointer-events:none!important;cursor:not-allowed}@-moz-document url-prefix(){.statement-btn-group{scrollbar-width:thin;scrollbar-color:#ffffff #647e9a}}.statement-btn-group[_ngcontent-%COMP%]{overflow:auto}.statement-btn-group[_ngcontent-%COMP%]   .quick-btn-group[_ngcontent-%COMP%]{display:flex;width:max-content}.statement-btn-group[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.statement-btn-group[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:4px;background-color:#647e9a}.statement-btn-group[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background-color:#fff}.link[_ngcontent-%COMP%]{text-decoration:none;display:flex;flex-direction:row;width:100%;height:100%;align-items:center}.link-text[_ngcontent-%COMP%]{color:#4a4a49;font-size:1rem;line-height:1.4285714286;font-family:Krungthai Fast,sans-serif;font-weight:700;padding-left:10px}.acc-enquiry-icons[_ngcontent-%COMP%]{color:#4a4a49;font-size:1rem;line-height:1.4285714286;font-family:Krungthai Fast,sans-serif;margin-top:2px}.acc-enquiry-icon-is-disabled[_ngcontent-%COMP%]{color:#fff;margin-top:2px}.white-card-title[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.7142857143rem;line-height:1.3333333333;color:#002240;font-weight:700}.account-list-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:24px}.pad-btm-24[_ngcontent-%COMP%]{padding-bottom:24px}.remove-padding[_ngcontent-%COMP%]{margin:0 -40px}[_nghost-%COMP%]     ui-section.section-wrapper.clear-padding-top:first-child section{padding-top:0}[_nghost-%COMP%]     ui-section.section-wrapper.clear-padding:first-child section{padding-top:0}[_nghost-%COMP%]     ui-section.section-wrapper.clear-padding:last-child section{padding-bottom:0!important}.pb-0[_ngcontent-%COMP%]{padding-bottom:0!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.pt-4-px[_ngcontent-%COMP%]{padding-top:4px!important}[_nghost-%COMP%]   ui-datepicker[_ngcontent-%COMP%]     .datepicker-dropdown-container{margin-bottom:8px}[_nghost-%COMP%]   ui-datepicker[_ngcontent-%COMP%]     .selected-range .selected-range-value-field{color:#4a4a49!important}[_nghost-%COMP%]   ui-datepicker[_ngcontent-%COMP%]     .mat-calendar-content tbody td.mat-calendar-body-in-range .mat-calendar-body-cell-content{color:#4a4a49}[_nghost-%COMP%]   ui-amount-range-input[_ngcontent-%COMP%]     .amount-range-input-form ui-form-field:first-child .wrapper{padding-top:0}[_nghost-%COMP%]   ui-amount-range-input[_ngcontent-%COMP%]     .amount-range-input-form ui-form-field .wrapper{padding-top:8px}[_nghost-%COMP%]   ui-amount-range-input[_ngcontent-%COMP%]     .amount-range-input-form ui-form-field .wrapper .bottom-row{min-height:0px}.search-input-field[_ngcontent-%COMP%]{width:530px}.transaction-history-tbl[_ngcontent-%COMP%]{padding-top:24px}[_nghost-%COMP%]     ui-back-nav .back-nav-container .label{padding-top:2.5px}",
                            ],
                        });
                    }
                }
                return l;
            })();
            const Gn = ["eventDisplay"],
                jn = ["dataTable"];
            function Nn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "ui-table", 14, 2),
                        t.bIt("pageSizeChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onPageSizeChange(n));
                        })("pageChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onPageChange(n));
                        })("sortChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSortChanged(n));
                        })("actionButtonClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onActionButtonClick(n));
                        })("rowClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onRowClicked(n));
                        })("itemSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onItemSelection(n));
                        }),
                        t.k0s();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.Y8G("ngClass", e.activeSelect ? "device-table" : "")(
                        "data",
                        e.data
                    )("tableHeader", e.tableHeader)("currentPage", e.currentPage)(
                        "hasSelectAll",
                        e.hasSelectAll
                    )(
                        "pageSize",
                        null == e.pageableResponse ? null : e.pageableResponse.pageSize
                    )(
                        "totalPages",
                        null == e.pageableResponse ? null : e.pageableResponse.totalPages
                    )(
                        "totalItems",
                        null == e.pageableResponse ? null : e.pageableResponse.totalElements
                    )(
                        "pageSizeOptions",
                        null == e.tableConfig ? null : e.tableConfig.pageSizeOptions
                    )(
                        "selectionMode",
                        null == e.tableConfig ? null : e.tableConfig.selectionMode
                    )(
                        "enablePagination",
                        null == e.tableConfig ? null : e.tableConfig.enablePagination
                    )(
                        "defaultPageSize",
                        null == e.tableConfig ? null : e.tableConfig.defaultPageSize
                    )(
                        "emptyTableTextData",
                        null == e.tableConfig ? null : e.tableConfig.emptyTableTextData
                    )("actionButtons", e.actionButtons)(
                        "ngClass",
                        "CASA" === e.accountType
                            ? "casa-table"
                            : "FDA" === e.accountType
                                ? "fda-table"
                                : "LA" === e.accountType
                                    ? "la-table"
                                    : "no-account-table"
                    );
                }
            }
            let wn = (() => {
                class l {
                    constructor(e, a, n) {
                        (this.fb = e),
                            (this.translate = a),
                            (this.accountEnquiryService = n),
                            (this.subs = new N.yU()),
                            (this.selectionMode = !0),
                            (this.hasSelectAll = !1),
                            (this.disableAllCheckbox = !1),
                            (this.enablePagination = !0),
                            (this.enableCalendarFiltering = !1),
                            (this.enableAmountFiltering = !1),
                            (this.tablePropertyChanged = new t.bkB()),
                            (this.actionClicked = new t.bkB()),
                            (this.rowClicked = new t.bkB()),
                            (this.pageableParamChange = new t.bkB()),
                            (this.searchSuggestion = new t.bkB()),
                            (this.suggestionOptionSelected = new t.bkB()),
                            (this.searchByEnter = new t.bkB()),
                            (this.activeSelect = !1),
                            (this.currentPage = 1),
                            (this.isSearchDisabled = !1),
                            (this.clearKeyword = !1),
                            this.subs.add(
                                this.accountEnquiryService.checkboxClicked$.subscribe(
                                    ({ type: i, isDisabledAllCheckbox: r }) => {
                                        i !== this.accountType &&
                                            this.dataTable?.disableAllCheckboxes(r);
                                    }
                                )
                            ),
                            this.subs.add(
                                this.accountEnquiryService.tableReset$.subscribe((i) => {
                                    i !== this.accountType &&
                                        this.dataTable?.disableAllCheckboxes(!1);
                                })
                            );
                    }
                    ngOnInit() {
                        var e = this;
                        return (0, g.A)(function* () {
                            e.formSearch = e.fb.group({
                                searchQuery: [""],
                                datePicker: [""],
                                amount: [""],
                            });
                        })();
                    }
                    ngOnChanges() {
                        this.tableConfig = {
                            pageSizeOptions: [10, 15, 20],
                            selectionMode: this.selectionMode,
                            enablePagination: this.enablePagination,
                            defaultPageSize: 10,
                            emptyTableTextData: this.getemptyTableTextData(),
                        };
                    }
                    getemptyTableTextData() {
                        let e;
                        return (
                            (e =
                                !0 === this.emptyTableTextData?.isApiError
                                    ? {
                                        title: this.emptyTableTextData?.title,
                                        subtitle: this.emptyTableTextData?.message,
                                        icon: "empty-tasks",
                                    }
                                    : {
                                        title: this.translate.instant(
                                            "account_enquiry_casa_no_account_found_label"
                                        ),
                                        subtitle: this.translate.instant(
                                            "account_enquiry_casa_no_account_found_remark_explainer"
                                        ),
                                        icon: "empty-tasks",
                                    }),
                            e
                        );
                    }
                    generateApiParams() {
                        return {
                            accountType: this.accountType,
                            searchQuery: null,
                            pageSize: this.pageableParam?.pageSize,
                            pageNumber: this.pageableParam?.pageNumber,
                            orderBy: this.pageableParam?.orderBy,
                            order: this.pageableParam?.order,
                        };
                    }
                    generateSearchParam() {
                        return { accountType: this.accountType, keyword: null };
                    }
                    onSearchSuggestion(e) {
                        const a = this.generateSearchParam();
                        (a.keyword = e), this.searchSuggestion.emit(a);
                    }
                    onSearchEnter(e) {
                        const a = this.generateSearchParam();
                        (a.keyword = e),
                            this.resetAllCheckboxes(),
                            this.searchByEnter.emit(a);
                    }
                    onSuggestionOptionSelected(e) {
                        const a = this.generateSearchParam();
                        (a.keyword = e),
                            this.resetAllCheckboxes(),
                            this.suggestionOptionSelected.emit(a);
                    }
                    onPageSizeChange(e) {
                        const a = this.generateApiParams();
                        (a.pageSize = e),
                            (a.pageNumber = 0),
                            (this.currentPage = 1),
                            this.checkLimitSelection(),
                            this.tablePropertyChanged.emit(a);
                    }
                    onPageChange(e) {
                        const a = this.generateApiParams();
                        (this.currentPage = e),
                            (a.pageNumber = this.currentPage - 1),
                            this.resetAllCheckboxes(),
                            this.checkLimitSelection(),
                            this.tablePropertyChanged.emit(a);
                    }
                    onSortChanged(e) {
                        "accountTypeName" === e.orderBy && (e.orderBy = "accountType");
                        const a = this.generateApiParams();
                        (a.orderBy = e.orderBy),
                            (a.order = e.order),
                            this.resetAllCheckboxes(),
                            this.tablePropertyChanged.emit(a);
                    }
                    onActionButtonClick(e) {
                        this.actionClicked.emit(e);
                    }
                    onRowClicked(e) {
                        this.rowClicked.emit(e);
                    }
                    onItemSelection(e) {
                        this.displayEmmitedEvent(e), this.checkLimitSelection();
                    }
                    checkLimitSelection() {
                        setTimeout(() => {
                            this.dataTable?.checkLimitSelection(5);
                        }, 300);
                    }
                    resetAllCheckboxes() {
                        (this.eventDisplay.nativeElement.value = null),
                            this.dataTable?.resetAllCheckboxes(),
                            this.accountEnquiryService.resetAllCheckboxes(this.accountType);
                    }
                    displayEmmitedEvent(e) {
                        const a = `${this.translate.instant(
                            "account_enquiry_account_selected_label"
                        )} ${e.items.length}`;
                        if (
                            ((this.eventDisplay.nativeElement.value = a), e.items.length > 0)
                        ) {
                            (this.activeSelect = !0),
                                this.accountEnquiryService.handleCheckboxClick(
                                    this.accountType,
                                    !0
                                );
                            const n = e.items.length >= 5;
                            this.dataTable?.toggleCheckboxes(n);
                        } else
                            (this.activeSelect = !1),
                                this.accountEnquiryService.handleCheckboxClick(
                                    this.accountType,
                                    !1
                                );
                    }
                    onRequestStatement() {
                        this.accountEnquiryService.requestStatement(
                            this.dataTable?.tempSelectedItems
                        );
                    }
                    ngOnDestroy() {
                        this.subs.unsubscribe();
                    }
                    clearSearch() {
                        this.formSearch.patchValue({ searchQuery: "" }),
                            document
                                .getElementsByClassName("search-bar-input")
                                .item(0)
                                .classList.remove("has-value");
                    }
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)(t.rXU(_.ok), t.rXU(p.c$), t.rXU(E.e));
                        };
                    }
                    static {
                        this.ɵcmp = t.VBU({
                            type: l,
                            selectors: [["ktb-items-list"]],
                            viewQuery: function (a, n) {
                                if ((1 & a && (t.GBs(Gn, 5), t.GBs(jn, 5)), 2 & a)) {
                                    let i;
                                    t.mGM((i = t.lsd())) && (n.eventDisplay = i.first),
                                        t.mGM((i = t.lsd())) && (n.dataTable = i.first);
                                }
                            },
                            inputs: {
                                sectionTitle: "sectionTitle",
                                accountType: "accountType",
                                data: "data",
                                pageableParam: "pageableParam",
                                pageableResponse: "pageableResponse",
                                tableHeader: "tableHeader",
                                actionButtons: "actionButtons",
                                selectionMode: "selectionMode",
                                hasSelectAll: "hasSelectAll",
                                disableAllCheckbox: "disableAllCheckbox",
                                enablePagination: "enablePagination",
                                enableCalendarFiltering: "enableCalendarFiltering",
                                enableAmountFiltering: "enableAmountFiltering",
                                emptyTableTextData: "emptyTableTextData",
                                suggestionList: "suggestionList",
                            },
                            outputs: {
                                tablePropertyChanged: "tablePropertyChanged",
                                actionClicked: "actionClicked",
                                rowClicked: "rowClicked",
                                pageableParamChange: "pageableParamChange",
                                searchSuggestion: "searchSuggestion",
                                suggestionOptionSelected: "suggestionOptionSelected",
                                searchByEnter: "searchByEnter",
                            },
                            features: [t.OA$],
                            decls: 21,
                            vars: 21,
                            consts: [
                                ["searchSuggestion", ""],
                                ["eventDisplay", ""],
                                ["dataTable", ""],
                                [1, "account-list-card"],
                                [1, "account-list-container"],
                                [1, "white-card-title"],
                                [1, "d-block", "w-100", "mb-1"],
                                [1, "account-amount-label"],
                                [1, "search-account"],
                                [
                                    3,
                                    "onSearchSuggestion",
                                    "onSearchEnter",
                                    "onOptionSelected",
                                    "isDisabled",
                                    "placeholderKey",
                                    "isSearchbarUpdatedWhenSelect",
                                    "clearKeyword",
                                    "suggestionList",
                                    "isCallApiOnEmpty",
                                ],
                                [1, "request-statement-section", 3, "ngClass"],
                                ["rows", "1", "cols", "50", "readonly", ""],
                                [3, "click", "uiButton"],
                                [
                                    3,
                                    "ngClass",
                                    "data",
                                    "tableHeader",
                                    "currentPage",
                                    "hasSelectAll",
                                    "pageSize",
                                    "totalPages",
                                    "totalItems",
                                    "pageSizeOptions",
                                    "selectionMode",
                                    "enablePagination",
                                    "defaultPageSize",
                                    "emptyTableTextData",
                                    "actionButtons",
                                    "pageSizeChanged",
                                    "pageChanged",
                                    "sortChanged",
                                    "actionButtonClicked",
                                    "rowClicked",
                                    "itemSelected",
                                    4,
                                    "ngIf",
                                ],
                                [
                                    3,
                                    "pageSizeChanged",
                                    "pageChanged",
                                    "sortChanged",
                                    "actionButtonClicked",
                                    "rowClicked",
                                    "itemSelected",
                                    "ngClass",
                                    "data",
                                    "tableHeader",
                                    "currentPage",
                                    "hasSelectAll",
                                    "pageSize",
                                    "totalPages",
                                    "totalItems",
                                    "pageSizeOptions",
                                    "selectionMode",
                                    "enablePagination",
                                    "defaultPageSize",
                                    "emptyTableTextData",
                                    "actionButtons",
                                ],
                            ],
                            template: function (a, n) {
                                if (1 & a) {
                                    const i = t.RV6();
                                    t.j41(0, "div", 3)(1, "div", 4)(2, "div", 5),
                                        t.EFF(3),
                                        t.nI1(4, "translate"),
                                        t.k0s()(),
                                        t.j41(5, "div", 6)(6, "span", 7),
                                        t.EFF(7),
                                        t.nI1(8, "translate"),
                                        t.k0s()(),
                                        t.j41(9, "div", 8)(
                                            10,
                                            "ktb-search-suggestion-shared",
                                            9,
                                            0
                                        ),
                                        t.nI1(12, "translate"),
                                        t.bIt("onSearchSuggestion", function (m) {
                                            return t.eBV(i), t.Njj(n.onSearchSuggestion(m));
                                        })("onSearchEnter", function (m) {
                                            return t.eBV(i), t.Njj(n.onSearchEnter(m));
                                        })("onOptionSelected", function (m) {
                                            return t.eBV(i), t.Njj(n.onSuggestionOptionSelected(m));
                                        }),
                                        t.k0s()(),
                                        t.j41(13, "div", 10),
                                        t.nrm(14, "textarea", 11, 1),
                                        t.j41(16, "div")(17, "button", 12),
                                        t.bIt("click", function () {
                                            return t.eBV(i), t.Njj(n.onRequestStatement());
                                        }),
                                        t.EFF(18),
                                        t.nI1(19, "translate"),
                                        t.k0s()()(),
                                        t.DNE(20, Nn, 2, 15, "ui-table", 13),
                                        t.k0s();
                                }
                                2 & a &&
                                    (t.R7$(3),
                                        t.JRh(t.bMT(4, 13, n.sectionTitle)),
                                        t.R7$(4),
                                        t.Lme(
                                            "",
                                            null != n.pageableResponse &&
                                                n.pageableResponse.totalElements
                                                ? null == n.pageableResponse
                                                    ? null
                                                    : n.pageableResponse.totalElements
                                                : 0,
                                            " ",
                                            t.bMT(
                                                8,
                                                15,
                                                "account_enquiry_account_total_account_number_label"
                                            ),
                                            ""
                                        ),
                                        t.R7$(3),
                                        t.Y8G("isDisabled", n.isSearchDisabled)(
                                            "placeholderKey",
                                            t.bMT(
                                                12,
                                                17,
                                                "account_enquiry_account_search_account_placeholder"
                                            )
                                        )("isSearchbarUpdatedWhenSelect", !1)(
                                            "clearKeyword",
                                            n.clearKeyword
                                        )("suggestionList", n.suggestionList)("isCallApiOnEmpty", !0),
                                        t.R7$(3),
                                        t.Y8G("ngClass", n.activeSelect ? "" : "d-none"),
                                        t.R7$(4),
                                        t.Y8G("uiButton", "primary-filter"),
                                        t.R7$(),
                                        t.SpI(
                                            " ",
                                            t.bMT(
                                                19,
                                                19,
                                                "account_enquiry_account_request_statement_button"
                                            ),
                                            " "
                                        ),
                                        t.R7$(2),
                                        t.Y8G("ngIf", n.data));
                            },
                            dependencies: [o.YU, o.bT, X.Q, L.O, J.v, p.D9],
                            styles: [
                                ".white-card-title[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;font-size:1.7142857143rem;line-height:1.3333333333}.justify-content-space-btw[_ngcontent-%COMP%]{justify-content:space-between}.d-block[_ngcontent-%COMP%]{display:block!important}.d-flex[_ngcontent-%COMP%]{display:flex!important}.d-none[_ngcontent-%COMP%]{display:none!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.align-items-center[_ngcontent-%COMP%]{align-items:center}.white-card-title[_ngcontent-%COMP%]{color:#002240}.account-amount-label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1rem;line-height:1.4285714286;color:#868686}.account-list-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.request-statement-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center!important;padding:1rem 2rem;background-color:#f2f2f2;border-radius:4px;margin:24px 0}.request-statement-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:1rem;line-height:1.4285714286;font-family:Krungthai Fast,sans-serif;font-weight:700;color:#002240;background:transparent;border:none;resize:none}.button-label[_ngcontent-%COMP%]{color:#003258;font-weight:700;font-family:Krungthai Fast,sans-serif}.search-input-field[_ngcontent-%COMP%]{width:55%}  .table-footer{display:block!important}  .empty-table-display{padding-top:24px!important}ui-table[_ngcontent-%COMP%]{margin:0 -40px!important}.search-input-field[_ngcontent-%COMP%]   .ktb-icon[_ngcontent-%COMP%]{color:#8ea2b7}.search-input-field[_ngcontent-%COMP%]   .ktb-icon.filled[_ngcontent-%COMP%]{color:#868686!important}.ktb-input.has-value.search-bar-input[_ngcontent-%COMP%]{color:#4a4a49}.clear-icon[_ngcontent-%COMP%]{color:#416487!important}.search-account[_ngcontent-%COMP%]{width:530px;padding-bottom:24px}[_nghost-%COMP%]     .ktb-input{font-family:Krungthai Smart,sans-serif;font-weight:400;font-size:1.1428571429rem;line-height:1.5;font-style:normal}.device-table[_ngcontent-%COMP%]     .action-buttons-container{display:none!important}",
                            ],
                        });
                    }
                }
                return l;
            })();
            const qn = () => [];
            function Yn(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "div", 11),
                            t.EFF(1),
                            t.nI1(2, "translate"),
                            t.nI1(3, "date"),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Lme(
                            " ",
                            t.bMT(
                                2,
                                2,
                                "dashboard_default_view_upon_login_account_overview_card_timestamp_label"
                            ),
                            " : ",
                            t.i5U(3, 4, e.lastUpdate, "dd LLL yyyy - HH:mm"),
                            " "
                        );
                }
            }
            function Ln(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "ui-section", 12)(1, "ktb-items-list", 13),
                        t.bIt("rowClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.displayAccountDetails(n));
                        })("tablePropertyChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.loadAccounts("CASA", n));
                        })("actionClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.actionClickedEventHandler(n, "CASA"));
                        })("searchSuggestion", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchSuggestion(n));
                        })("suggestionOptionSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSuggestionOptionSelected(n));
                        })("searchByEnter", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchEnter(n));
                        }),
                        t.k0s()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G(
                            "sectionTitle",
                            "account_enquiry_account_current_saving_account_label"
                        )("accountType", "CASA")("data", e.casaAccounts)(
                            "tableHeader",
                            e.casaTableHeader
                        )("actionButtons", e.actionButtons)(
                            "pageableParam",
                            e.casaPageableParam
                        )("pageableResponse", e.casaPageable)("hasSelectAll", !1)(
                            "emptyTableTextData",
                            e.emptyTableTextDataCASA
                        )("suggestionList", e.suggestionList);
                }
            }
            function Bn(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "ui-section", 14)(1, "ktb-items-list", 13),
                        t.bIt("rowClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.displayAccountDetails(n));
                        })("tablePropertyChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.loadAccounts("FDA", n));
                        })("actionClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.actionClickedEventHandler(n, "FDA"));
                        })("searchSuggestion", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchSuggestion(n));
                        })("suggestionOptionSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSuggestionOptionSelected(n));
                        })("searchByEnter", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchEnter(n));
                        }),
                        t.k0s()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G(
                            "sectionTitle",
                            "account_enquiry_account_fixed_deposit_account_label"
                        )("accountType", "FDA")("data", e.fdAccounts)(
                            "tableHeader",
                            e.fdaTableHeader
                        )("actionButtons", e.actionButtons)(
                            "pageableParam",
                            e.fdPageableParam
                        )("pageableResponse", e.fdPageable)("hasSelectAll", !1)(
                            "emptyTableTextData",
                            e.emptyTableTextDataFDA
                        )("suggestionList", e.suggestionList);
                }
            }
            function Un(l, s) {
                if (1 & l) {
                    const e = t.RV6();
                    t.j41(0, "ui-section", 15)(1, "ktb-items-list", 13),
                        t.bIt("rowClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.displayAccountDetails(n));
                        })("tablePropertyChanged", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.loadAccounts("LA", n));
                        })("actionClicked", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.actionClickedEventHandler(n, "LA"));
                        })("searchSuggestion", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchSuggestion(n));
                        })("suggestionOptionSelected", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSuggestionOptionSelected(n));
                        })("searchByEnter", function (n) {
                            t.eBV(e);
                            const i = t.XpG();
                            return t.Njj(i.onSearchEnter(n));
                        }),
                        t.k0s()();
                }
                if (2 & l) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G("sectionTitle", "account_enquiry_account_loan_account_label")(
                            "accountType",
                            "LA"
                        )("data", e.loanAccounts)("tableHeader", e.loanTableHeader)(
                            "actionButtons",
                            e.actionButtons
                        )("pageableParam", e.loanPageableParam)(
                            "pageableResponse",
                            e.loanPageable
                        )("hasSelectAll", !1)("emptyTableTextData", e.emptyTableTextDataLA)(
                            "suggestionList",
                            e.suggestionList
                        );
                }
            }
            function zn(l, s) {
                if (
                    (1 & l &&
                        (t.j41(0, "ui-section", 16),
                            t.nrm(1, "ktb-items-list", 17),
                            t.k0s()),
                        2 & l)
                ) {
                    const e = t.XpG();
                    t.R7$(),
                        t.Y8G("sectionTitle", "account_enquiry_casa_account_title")(
                            "accountType",
                            ""
                        )("data", t.lJ4(5, qn))("tableHeader", e.noAccountsTableHeader)(
                            "hasSelectAll",
                            !1
                        );
                }
            }
            const Xn = [
                {
                    path: "",
                    component: G,
                    children: [
                        {
                            path: "",
                            component: (() => {
                                class l {
                                    constructor(e, a, n, i, r) {
                                        (this.facade = e),
                                            (this.translate = a),
                                            (this.router = n),
                                            (this._decimalPipe = i),
                                            (this.analyticsService = r),
                                            (this.actionButtons = [h.SS.AddDoc]),
                                            (this.updateArray = []),
                                            (this.casaTableHeader = f.PL),
                                            (this.fdaTableHeader = f.ks),
                                            (this.loanTableHeader = f.Es),
                                            (this.noAccountsTableHeader = f.lx),
                                            (this.isEntitledToViewCasaAccount = !0),
                                            (this.isEntitledToViewFdAccount = !0),
                                            (this.isEntitledToViewLoanAccount = !0);
                                    }
                                    formatAccountData(e) {
                                        return (0, c.A)(e, (a) => {
                                            null === a.availableBalance &&
                                                (a.availandableBalance = "0.00"),
                                                (a.availableBalance = this._decimalPipe.transform(
                                                    a.availableBalance,
                                                    "1.2-2"
                                                )),
                                                null === a.ledgerBalance && (a.ledgerBalance = "0.00"),
                                                (a.ledgerBalance = this._decimalPipe.transform(
                                                    a.ledgerBalance,
                                                    "1.2-2"
                                                )),
                                                null === a.loanLimit && (a.loanLimit = "0.00"),
                                                (a.loanLimit = this._decimalPipe.transform(
                                                    a.loanLimit,
                                                    "1.2-2"
                                                )),
                                                null === a.loanOutstandingBalance &&
                                                (a.loanOutstandingBalance = "0.00"),
                                                (a.loanOutstandingBalance = this._decimalPipe.transform(
                                                    a.loanOutstandingBalance,
                                                    "1.2-2"
                                                ));
                                        });
                                    }
                                    loadAccounts(e, a) {
                                        var n = this;
                                        return (0, g.A)(function* () {
                                            try {
                                                const i = yield n.facade.getAccounts(
                                                    a.accountType,
                                                    a.pageSize,
                                                    a.pageNumber,
                                                    a.orderBy,
                                                    a.order,
                                                    a.searchQuery
                                                ),
                                                    r = {
                                                        totalPages: i.pageable?.totalPages,
                                                        last: i.pageable?.last,
                                                        totalElements: i.pageable?.totalElements,
                                                        numberOfElements: i.pageable?.numberOfElements,
                                                        pageSize: i.pageable?.pageSize,
                                                        pageNumber: i.pageable?.pageNumber,
                                                    },
                                                    m = {
                                                        pageSize: i.pageable?.pageSize,
                                                        pageNumber: i.pageable?.pageNumber,
                                                    };
                                                "FDA" === e
                                                    ? ((n.fdAccounts = i.accounts),
                                                        (n.originalFdData = i.accounts),
                                                        n.formatAccountData(n.fdAccounts),
                                                        (n.fdPageable = r),
                                                        (n.lastUpdateFDA = i.updatedDate),
                                                        n.updateArray.push({ update: n.lastUpdateFDA }),
                                                        (n.fdPageableParam = m))
                                                    : "CASA" === e
                                                        ? ((n.casaAccounts = i.accounts),
                                                            (n.originalCasaData = i.accounts),
                                                            n.formatAccountData(n.casaAccounts),
                                                            (n.casaPageable = r),
                                                            (n.lastUpdateCASA = i.updatedDate),
                                                            n.updateArray.push({ update: n.lastUpdateCASA }),
                                                            (n.casaPageableParam = m))
                                                        : "LA" === e &&
                                                        ((n.loanAccounts = i.accounts),
                                                            (n.originalLoanData = i.accounts),
                                                            n.formatAccountData(n.loanAccounts),
                                                            (n.loanPageable = r),
                                                            (n.lastUpdateLA = i.updatedDate),
                                                            n.updateArray.push({ update: n.lastUpdateLA }),
                                                            (n.loanPageableParam = m));
                                                const T = n.updateArray.map((R) => new Date(R.update));
                                                if (T.length > 0) {
                                                    const R = new Date(Math.max.apply(null, T));
                                                    n.lastUpdate = R;
                                                }
                                            } catch (i) {
                                                const { error: r } = i;
                                                if ("30017" === r.code || "43000" === r.code)
                                                    "FDA" === e && (n.isEntitledToViewFdAccount = !1),
                                                        "LA" === e && (n.isEntitledToViewLoanAccount = !1),
                                                        "CASA" === e &&
                                                        (n.isEntitledToViewCasaAccount = !1);
                                                else {
                                                    if ("30023" !== r?.code) throw i;
                                                    n.getLoadErrorData(e),
                                                        "CASA" === e
                                                            ? (n.emptyTableTextDataCASA = {
                                                                ...r,
                                                                isApiError: !0,
                                                            })
                                                            : "FDA" === e
                                                                ? (n.emptyTableTextDataFDA = {
                                                                    ...r,
                                                                    isApiError: !0,
                                                                })
                                                                : "LA" === e &&
                                                                (n.emptyTableTextDataLA = {
                                                                    ...r,
                                                                    isApiError: !0,
                                                                });
                                                }
                                            }
                                        })();
                                    }
                                    getLoadErrorData(e) {
                                        switch (e) {
                                            case "CASA":
                                                (this.casaAccounts = []),
                                                    (this.casaPageable = null),
                                                    (this.casaPageableParam = null);
                                                break;
                                            case "FDA":
                                                (this.fdAccounts = []),
                                                    (this.fdPageable = null),
                                                    (this.fdPageableParam = null);
                                                break;
                                            case "LA":
                                                (this.loanAccounts = []),
                                                    (this.loanPageable = null),
                                                    (this.loanPageableParam = null);
                                        }
                                    }
                                    ngOnInit() {
                                        var e = this;
                                        return (0, g.A)(function* () {
                                            e.updateArray = [];
                                            const a = { accountType: "FDA", pageSize: 10 };
                                            yield e.loadAccounts("FDA", a),
                                                (a.accountType = "LA"),
                                                yield e.loadAccounts("LA", a),
                                                (a.accountType = "CASA"),
                                                yield e.loadAccounts("CASA", a),
                                                e.analyticsService.sendPageViewEvent(
                                                    "Account Enquiry_AccountList"
                                                );
                                        })();
                                    }
                                    actionClickedEventHandler(e, a) {
                                        let n;
                                        (n =
                                            "CASA" === a
                                                ? this.casaAccounts[e.index]?.accountRefId
                                                : "FDA" === a
                                                    ? this.fdAccounts[e.index]?.accountRefId
                                                    : this.loanAccounts[e.index]?.accountRefId),
                                            this.router.navigate([F.Gu.GENERATE_STATEMENT], {
                                                queryParams: {
                                                    action: "REDIRECT",
                                                    accountRefId: JSON.stringify([n]),
                                                },
                                            });
                                    }
                                    displayAccountDetails(e) {
                                        var a = this;
                                        return (0, g.A)(function* () {
                                            let n;
                                            const i = e?.accountType;
                                            (n =
                                                "CA" === i || "SA" === i
                                                    ? a.lastUpdateCASA
                                                    : "FDA" === i
                                                        ? a.lastUpdateFDA
                                                        : a.lastUpdateLA),
                                                a.facade.goToAccountEnquiryDetail(e, n);
                                        })();
                                    }
                                    loadSuggestion(e) {
                                        var a = this;
                                        return (0, g.A)(function* () {
                                            const { accountType: n, keyword: i } = e;
                                            try {
                                                const r = yield a.facade.getAccountListSearchSuggestion(
                                                    n,
                                                    i
                                                );
                                                a.suggestionList = (0, c.A)(r?.suggestion, (m) => ({
                                                    data: [m.accountNo, m.accountName],
                                                }));
                                            } catch (r) { }
                                        })();
                                    }
                                    onSearchSuggestion(e) {
                                        var a = this;
                                        return (0, g.A)(function* () {
                                            const { accountType: n, keyword: i } = e;
                                            if (i.length < 1) {
                                                const r = { accountType: n, searchQuery: null };
                                                yield a.loadAccounts(n, r);
                                            } else i && i.length > 0 && a.loadSuggestion(e);
                                        })();
                                    }
                                    onSearchEnter(e) {
                                        var a = this;
                                        return (0, g.A)(function* () {
                                            const { accountType: n, keyword: i } = e,
                                                r = { accountType: n, searchQuery: i };
                                            yield a.loadAccounts(n, r);
                                        })();
                                    }
                                    onSuggestionOptionSelected(e) {
                                        var a = this;
                                        return (0, g.A)(function* () {
                                            const { accountType: n, keyword: i } = e,
                                                r = { accountType: n, searchQuery: i.data[0] };
                                            yield a.loadAccounts(n, r);
                                        })();
                                    }
                                    static {
                                        this.ɵfac = function (a) {
                                            return new (a || l)(
                                                t.rXU(d.j),
                                                t.rXU(p.c$),
                                                t.rXU(P.Ix),
                                                t.rXU(o.QX),
                                                t.rXU(Y.c)
                                            );
                                        };
                                    }
                                    static {
                                        this.ɵcmp = t.VBU({
                                            type: l,
                                            selectors: [["ktb-module-account-enquiry-index-page"]],
                                            decls: 13,
                                            vars: 9,
                                            consts: [
                                                [1, "wrapper"],
                                                [1, "account-enquiry-landing-page"],
                                                [
                                                    "theme",
                                                    "dark",
                                                    1,
                                                    "account-list-header-section",
                                                    3,
                                                    "boxed",
                                                ],
                                                [1, "account-enquiry-header"],
                                                [1, "header-text"],
                                                ["class", "last-login-date", 4, "ngIf"],
                                                [1, "accounts-section"],
                                                ["theme", "light", "class", "casa-section", 4, "ngIf"],
                                                ["theme", "light", "class", "fda-section", 4, "ngIf"],
                                                ["theme", "light", "class", "la-section", 4, "ngIf"],
                                                [
                                                    "theme",
                                                    "light",
                                                    "class",
                                                    "no-account-section",
                                                    4,
                                                    "ngIf",
                                                ],
                                                [1, "last-login-date"],
                                                ["theme", "light", 1, "casa-section"],
                                                [
                                                    3,
                                                    "rowClicked",
                                                    "tablePropertyChanged",
                                                    "actionClicked",
                                                    "searchSuggestion",
                                                    "suggestionOptionSelected",
                                                    "searchByEnter",
                                                    "sectionTitle",
                                                    "accountType",
                                                    "data",
                                                    "tableHeader",
                                                    "actionButtons",
                                                    "pageableParam",
                                                    "pageableResponse",
                                                    "hasSelectAll",
                                                    "emptyTableTextData",
                                                    "suggestionList",
                                                ],
                                                ["theme", "light", 1, "fda-section"],
                                                ["theme", "light", 1, "la-section"],
                                                ["theme", "light", 1, "no-account-section"],
                                                [
                                                    3,
                                                    "sectionTitle",
                                                    "accountType",
                                                    "data",
                                                    "tableHeader",
                                                    "hasSelectAll",
                                                ],
                                            ],
                                            template: function (a, n) {
                                                1 & a &&
                                                    (t.j41(0, "div", 0)(1, "div", 1)(2, "ui-section", 2)(
                                                        3,
                                                        "div",
                                                        3
                                                    )(4, "h1", 4),
                                                        t.EFF(5),
                                                        t.nI1(6, "translate"),
                                                        t.k0s(),
                                                        t.DNE(7, Yn, 4, 7, "div", 5),
                                                        t.k0s()(),
                                                        t.j41(8, "div", 6),
                                                        t.DNE(9, Ln, 2, 10, "ui-section", 7)(
                                                            10,
                                                            Bn,
                                                            2,
                                                            10,
                                                            "ui-section",
                                                            8
                                                        )(11, Un, 2, 10, "ui-section", 9)(
                                                            12,
                                                            zn,
                                                            2,
                                                            6,
                                                            "ui-section",
                                                            10
                                                        ),
                                                        t.k0s()()()),
                                                    2 & a &&
                                                    (t.R7$(2),
                                                        t.Y8G("boxed", !1),
                                                        t.R7$(3),
                                                        t.JRh(
                                                            t.bMT(
                                                                6,
                                                                7,
                                                                "account_enquiry_account_account_list_title"
                                                            )
                                                        ),
                                                        t.R7$(2),
                                                        t.Y8G("ngIf", n.lastUpdate),
                                                        t.R7$(2),
                                                        t.Y8G("ngIf", n.isEntitledToViewCasaAccount),
                                                        t.R7$(),
                                                        t.Y8G("ngIf", n.isEntitledToViewFdAccount),
                                                        t.R7$(),
                                                        t.Y8G("ngIf", n.isEntitledToViewLoanAccount),
                                                        t.R7$(),
                                                        t.Y8G(
                                                            "ngIf",
                                                            !n.isEntitledToViewCasaAccount &&
                                                            !n.isEntitledToViewFdAccount &&
                                                            !n.isEntitledToViewLoanAccount
                                                        ));
                                            },
                                            dependencies: [o.bT, H.n, wn, o.vh, p.D9],
                                            styles: [
                                                ".wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 72px)}.account-enquiry-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.last-login-date[_ngcontent-%COMP%]{color:#fff;font-weight:400;font-family:Krungthai Fast,sans-serif;font-size:1rem;line-height:1.4285714286}.account-enquiry-landing-page[_ngcontent-%COMP%]{min-height:100%;background-image:linear-gradient(to bottom,#003258 0 354px,transparent 0)}.accounts-section[_ngcontent-%COMP%]{display:flex;flex-flow:column}.header-text[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-weight:700;color:#fff}[_nghost-%COMP%]     ui-section.section-wrapper.la-section section{padding-bottom:0rem!important}[_nghost-%COMP%]     ui-section.section-wrapper.casa-section section{padding-top:0rem!important}[_nghost-%COMP%]     ui-section.section-wrapper.account-list-header-section section{padding-bottom:1.7142857143rem!important}[_nghost-%COMP%]     ui-table .checkbox-custom{margin:2px;width:20px!important;height:20px!important}  ui-container .inner{max-width:unset!important;margin:unset!important}",
                                            ],
                                        });
                                    }
                                }
                                return l;
                            })(),
                        },
                        { path: "account-detail", component: $n },
                    ],
                },
            ];
            let Vn = (() => {
                class l {
                    static {
                        this.ɵfac = function (a) {
                            return new (a || l)();
                        };
                    }
                    static {
                        this.ɵmod = t.$C({ type: l });
                    }
                    static {
                        this.ɵinj = t.G2t({ imports: [P.iI.forChild(Xn), P.iI] });
                    }
                }
                return l;
            })(),
                Hn = (() => {
                    class l {
                        static {
                            this.ɵfac = function (a) {
                                return new (a || l)();
                            };
                        }
                        static {
                            this.ɵmod = t.$C({ type: l });
                        }
                        static {
                            this.ɵinj = t.G2t({
                                providers: [o.QX],
                                imports: [o.MD, Vn, h.LW, f.Zw, p.h, I.be],
                            });
                        }
                    }
                    return l;
                })();
        },
        43919: ($, C, u) => {
            u.d(C, {
                $5: () => G,
                Bq: () => P,
                EE: () => g,
                FE: () => M,
                Gw: () => b,
                NR: () => h,
                SI: () => I,
                V: () => f,
                Wm: () => o,
                XR: () => _,
                Zf: () => p,
                tt: () => t,
                zG: () => d,
            });
            var o = (function (c) {
                return (
                    (c.SPECIFIC_DATE = "SPECIFIC_DATE"),
                    (c.IMMEDIATE = "IMMEDIATE"),
                    (c.PRE_ADVICE = "PRE_ADVICE"),
                    c
                );
            })(o || {}),
                p = (function (c) {
                    return (
                        (c.OWN_ACCOUNT = "OWN_ACCOUNT"),
                        (c.KTB_3RD_PARTY = "KTB_3RD_PARTY"),
                        (c.OTHER_BANK = "OTHER_BANK"),
                        c
                    );
                })(p || {}),
                h = (function (c) {
                    return (
                        (c.FCD_DOMESTIC_TRANSFER = "FCD_DOMESTIC_TRANSFER"),
                        (c.FCD_DOMESTIC_TRANSFER_OTHER_BANK =
                            "FCD_DOMESTIC_TRANSFER_OTHER_BANK"),
                        c
                    );
                })(h || {}),
                f = (function (c) {
                    return (
                        (c.Counter = "COUNTER"),
                        (c.Forward = "FORWARD"),
                        (c.Special = "SPECIAL"),
                        (c.SameCurrency = "Same Currency"),
                        c
                    );
                })(f || {}),
                I = (function (c) {
                    return (
                        (c.MANDATORY_FIELD_MISSING = "68000"),
                        (c.INPUT_VALIDATION_FAIL = "68001"),
                        (c.LIMIT_EXCEED = "68007"),
                        (c.NO_BENEFICIARY = "68005"),
                        (c.BENEFICIARY_ACCOUNT_NOT_ELIGIBLE = "68022"),
                        (c.SERVICE_DOWNTIME = "80900"),
                        (c.MDM_SANCTION_FAIL = "68012"),
                        (c.SWIFT_CODE_ERROR = "68013"),
                        (c.RETRIEVE_FEE_ERROR = "68023"),
                        (c.NO_SR_LIMIT_CONFIG = "68020"),
                        (c.PRE_ADVICE_EXCEEDED_SR_LIMIT = "68014"),
                        c
                    );
                })(I || {}),
                P = (function (c) {
                    return (
                        (c.BENEFICIARY_ACCOUNT_IS_THAI = "68008"),
                        (c.BENEFICIARY_ACCOUNT_IS_NON_RESIDENT = "68009"),
                        (c.INTRA_UNABLE_TO_RETRIEVE_FROM_CBS = "34006"),
                        (c.INTRA_ACCOUNT_NOT_FOUND_FROM_CBS = "68010"),
                        (c.INTRA_NOT_SUPPORT_FCD_CCY = "68011"),
                        (c.INTRA_BENEFICIARY_ACCOUNT_NOT_ELIGIBLE = "68022"),
                        (c.INTER_EMPTY_BOT_RESPONSE = "68024"),
                        c
                    );
                })(P || {}),
                d = (function (c) {
                    return (
                        (c.SUMMARY = "SUMMARY"),
                        (c.REVIEW = "REVIEW"),
                        (c.SUCCESS = "SUCCESS"),
                        c
                    );
                })(d || {}),
                t = (function (c) {
                    return (
                        (c.FCDDomesitc__Landing = "FCDDomesitc__Landing"),
                        (c.FCDDomesitc__Landing_DraftDetails_SlidingBar =
                            "FCDDomesitc__Landing_DraftDetails_SlidingBar"),
                        (c.FCDDomesitc_SelectBeneficiary_SlidingBar =
                            "FCDDomesitc_SelectBeneficiary_SlidingBar"),
                        (c.FCDDomesitc_Input_SlidingBar = "FCDDomesitc_Input_SlidingBar"),
                        (c.FCDDomesitc_Summary = "FCDDomesitc_Summary"),
                        (c.FCDDomesitc_Review_Submit = "FCDDomesitc_Review&Submit"),
                        (c.FCDDomesitc_Review_Submit_SlidingBar =
                            "FCDDomesitc_Review&Submit_SlidingBar"),
                        (c.FCDDomesitc_Confirmation = "FCDDomesitc_Confirmation"),
                        (c.FCDDomesitc_Confirmation_SlidingBar =
                            "FCDDomesitc_Confirmation_SlidingBar"),
                        c
                    );
                })(t || {}),
                G = (function (c) {
                    return (c.INDIVIDUAL = "INDIVIDUAL"), (c.CORPORATE = "CORPORATE"), c;
                })(G || {}),
                g = (function (c) {
                    return (
                        (c.SELECT_BENEFICIARIES = "SELECT_BENEFICIARIES"),
                        (c.OWN_ACCOUNT = "OWN_ACCOUNT"),
                        (c.NEW_BENEFICIARIES = "NEW_BENEFICIARIES"),
                        c
                    );
                })(g || {}),
                _ = (function (c) {
                    return (c.DISCOUNT = "DISCOUNT"), (c.REPLACE = "REPLACE"), c;
                })(_ || {}),
                M = (function (c) {
                    return (
                        (c.FCD_3RD_PARTY = "FCD_3RD_PARTY"),
                        (c.FCD_OTHER_BANK = "FCD_OTHER_BANK"),
                        c
                    );
                })(M || {}),
                b = (function (c) {
                    return (c.BEN = "BEN"), (c.OUR = "OUR"), c;
                })(b || {});
        },
        3970: ($, C, u) => {
            u.d(C, { H: () => g });
            var o = u(93953),
                p = u(60177),
                h = u(73722),
                f = u(43526);
            let I = (() => {
                class _ {
                    constructor() {
                        this.removeFilter = new o.bkB();
                    }
                    static {
                        this.ɵfac = function (c) {
                            return new (c || _)();
                        };
                    }
                    static {
                        this.ɵcmp = o.VBU({
                            type: _,
                            selectors: [["ktb-active-filter"]],
                            inputs: { index: "index", label: "label" },
                            outputs: { removeFilter: "removeFilter" },
                            decls: 5,
                            vars: 1,
                            consts: [
                                ["uiButton", "tertiary", 1, "active-filter"],
                                [1, "btn-remove", 3, "click"],
                                ["name", "clear"],
                            ],
                            template: function (c, k) {
                                1 & c &&
                                    (o.j41(0, "div", 0)(1, "span"),
                                        o.EFF(2),
                                        o.k0s(),
                                        o.j41(3, "a", 1),
                                        o.bIt("click", function () {
                                            return k.removeFilter.emit(k.index);
                                        }),
                                        o.nrm(4, "ui-icon", 2),
                                        o.k0s()()),
                                    2 & c && (o.R7$(2), o.JRh(k.label));
                            },
                            dependencies: [h.Q, f.G],
                            styles: [
                                ".active-filter[_ngcontent-%COMP%]{height:28px;padding:4px 16px}[_nghost-%COMP%]     span.ktb-button-label{font-size:1rem;line-height:1.4285714286;font-family:Krungthai Fast,sans-serif;font-weight:700;letter-spacing:0px;text-transform:none}[_nghost-%COMP%]     ui-icon[name=clear]{margin-right:0;margin-left:8px}[_nghost-%COMP%]     ui-icon[name=clear] svg{margin-top:-2px;font-size:24px}",
                            ],
                        });
                    }
                }
                return _;
            })();
            var P = u(41780);
            function d(_, M) {
                if (1 & _) {
                    const b = o.RV6();
                    o.j41(0, "ktb-active-filter", 4),
                        o.bIt("removeFilter", function (k) {
                            o.eBV(b);
                            const j = o.XpG(2);
                            return o.Njj(j.onRemoveFilter(k));
                        }),
                        o.k0s();
                }
                if (2 & _) {
                    const c = M.index;
                    o.Y8G("label", M.$implicit.label)("index", c);
                }
            }
            function t(_, M) {
                if (1 & _) {
                    const b = o.RV6();
                    o.j41(0, "a", 5),
                        o.bIt("click", function () {
                            o.eBV(b);
                            const k = o.XpG(2);
                            return o.Njj(k.onClearFilters());
                        }),
                        o.EFF(1),
                        o.nI1(2, "translate"),
                        o.k0s();
                }
                2 & _ &&
                    (o.R7$(),
                        o.SpI(
                            " ",
                            o.bMT(
                                2,
                                1,
                                "workflow_management_landing_maker_text_link_clear_filter_explainer"
                            ),
                            " "
                        ));
            }
            function G(_, M) {
                if (
                    (1 & _ &&
                        (o.j41(0, "div", 1),
                            o.DNE(1, d, 1, 2, "ktb-active-filter", 2)(2, t, 3, 3, "a", 3),
                            o.k0s()),
                        2 & _)
                ) {
                    const b = o.XpG();
                    o.R7$(),
                        o.Y8G("ngForOf", b.activeFilters),
                        o.R7$(),
                        o.Y8G("ngIf", b.allowClearAll);
                }
            }
            let g = (() => {
                class _ {
                    constructor() {
                        (this.allowClearAll = !0),
                            (this.activeFilters = []),
                            (this.clearFilters = new o.bkB()),
                            (this.removeFilter = new o.bkB());
                    }
                    onClearFilters() {
                        this.clearFilters.emit();
                    }
                    onRemoveFilter(b) {
                        this.removeFilter.emit({ index: b, filter: this.activeFilters[b] });
                    }
                    static {
                        this.ɵfac = function (c) {
                            return new (c || _)();
                        };
                    }
                    static {
                        this.ɵcmp = o.VBU({
                            type: _,
                            selectors: [["ktb-active-filters"]],
                            inputs: {
                                allowClearAll: "allowClearAll",
                                activeFilters: "activeFilters",
                            },
                            outputs: {
                                clearFilters: "clearFilters",
                                removeFilter: "removeFilter",
                            },
                            decls: 1,
                            vars: 1,
                            consts: [
                                ["class", "active-filters", 4, "ngIf"],
                                [1, "active-filters"],
                                [
                                    "class",
                                    "active-filter",
                                    3,
                                    "label",
                                    "index",
                                    "removeFilter",
                                    4,
                                    "ngFor",
                                    "ngForOf",
                                ],
                                ["class", "clear-filter-btn", 3, "click", 4, "ngIf"],
                                [1, "active-filter", 3, "removeFilter", "label", "index"],
                                [1, "clear-filter-btn", 3, "click"],
                            ],
                            template: function (c, k) {
                                1 & c && o.DNE(0, G, 3, 2, "div", 0),
                                    2 & c && o.Y8G("ngIf", k.activeFilters.length);
                            },
                            dependencies: [p.Sq, p.bT, I, P.D9],
                            styles: [
                                ".active-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.active-filters[_ngcontent-%COMP%]   .active-filter[_ngcontent-%COMP%]{margin-top:1.1428571429rem;margin-right:1.1428571429rem}.active-filters[_ngcontent-%COMP%]   .clear-filter-btn[_ngcontent-%COMP%]{align-self:baseline;margin-top:1.5rem;font-family:Krungthai Fast,sans-serif;font-size:1rem;line-height:1.4285714286;font-weight:400;color:#4a4a49;border-bottom:2px solid #ffcb00;cursor:pointer}.active-filters[_ngcontent-%COMP%]   .clear-filter-btn[_ngcontent-%COMP%]:hover{color:#868686;border-bottom:2px solid #ffe17c}.active-filters[_ngcontent-%COMP%]   .clear-filter-btn[_ngcontent-%COMP%]:active{color:#4a4a49;border-bottom:2px solid #ffcb00}",
                            ],
                        });
                    }
                }
                return _;
            })();
        },
        11824: ($, C, u) => {
            u.d(C, { i: () => h });
            var o = u(93953),
                p = u(60177);
            let h = (() => {
                class f {
                    constructor() {
                        this.disabled = !1;
                    }
                    static {
                        this.ɵfac = function (d) {
                            return new (d || f)();
                        };
                    }
                    static {
                        this.ɵcmp = o.VBU({
                            type: f,
                            selectors: [["ui-back-nav"]],
                            inputs: { label: "label", disabled: "disabled" },
                            decls: 5,
                            vars: 2,
                            consts: [
                                [3, "ngClass"],
                                [
                                    "width",
                                    "1em",
                                    "height",
                                    "1em",
                                    "viewBox",
                                    "0 0 24 24",
                                    "fill",
                                    "none",
                                    "xmlns",
                                    "http://www.w3.org/2000/svg",
                                ],
                                [
                                    "fill-rule",
                                    "evenodd",
                                    "clip-rule",
                                    "evenodd",
                                    "d",
                                    "M9.828 11.995l7.877-8.288-1.414-1.414-8.629 9.01a1 1 0 000 1.382l8.629 9.022 1.414-1.414-7.877-8.298z",
                                    "fill",
                                    "currentColor",
                                ],
                                [1, "label"],
                            ],
                            template: function (d, t) {
                                1 & d &&
                                    (o.j41(0, "div", 0),
                                        o.qSk(),
                                        o.j41(1, "svg", 1),
                                        o.nrm(2, "path", 2),
                                        o.k0s(),
                                        o.joV(),
                                        o.j41(3, "span", 3),
                                        o.EFF(4),
                                        o.k0s()()),
                                    2 & d &&
                                    (o.Y8G(
                                        "ngClass",
                                        t.disabled
                                            ? "back-nav-container-disabled"
                                            : "back-nav-container"
                                    ),
                                        o.R7$(4),
                                        o.JRh(t.label));
                            },
                            dependencies: [p.YU],
                            styles: [
                                ".back-nav-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;cursor:pointer;color:#fff}.back-nav-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{font-size:24px}.back-nav-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}.back-nav-container[_ngcontent-%COMP%]:hover{color:#ffe17c}.back-nav-container[_ngcontent-%COMP%]:active{color:#ffcb00}.back-nav-container-disabled[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;color:#003258}.back-nav-container-disabled[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{font-size:24px}.back-nav-container-disabled[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Krungthai Fast,sans-serif;font-size:1.1428571429rem;line-height:1.5;font-weight:700}",
                            ],
                        });
                    }
                }
                return f;
            })();
        },
        65113: ($, C, u) => {
            u.d(C, { A: () => p });
            const p = function o(h) {
                return void 0 === h;
            };
        },
    },
]);
