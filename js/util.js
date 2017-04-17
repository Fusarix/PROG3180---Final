/**
 * Created by Randy, Derek on 04/8/17.
 */

jQuery.validator.addMethod("lengthCheck",
    function (value, element) {

        var valid = true;

        if (value !== null && value !== "" && value.length <= 2)
            valid = false

        return valid;
    },
    "Please enter a value with more than 2 characters."
);
jQuery.validator.addMethod("emailcheck",
    function (value, element) {
        var regex = /^.+@/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid email address."
);

function doValidate_frmSearchBookReview() {
    var form = $("#frmSearchBook");
    form.validate({
        rules: {
            txtSearchName: {
                required: function () {
                    return $("#txtSearchAuthor").val().length === 0;
                },
                lengthCheck: true,
                maxlength: 25
            },
            txtSearchAuthor: {
                required: function () {
                    return $("#txtSearchName").val().length === 0;
                },
                lengthCheck: true,
                maxlength: 25
            }
        },
        messages: {
            txtSearchName: {
                required: "Fill in either the book title, or the author",
                lengthCheck: "Please enter a title with more than 2 characters.",
                maxlength: "Book title cannot be more than 25 characters"
            },
            txtSearchAuthor: {
                required: "Fill in either the book title, or the author",
                lengthCheck: "Please enter an Author name with more than 2 characters.",
                maxlength: "Author name cannot be more than 25 characters"
            }
        }

    });

    return form.valid();
}

function doValidate_frmWriteReview() {
    var form = $("#frmWriteReview");
    form.validate({
        rules: {
            txtBookTitle: {
                required: true,
                minlength: 2,
                maxlength: 25
            },
            txtUserName: {
                required: true
            },
            txtEmail: {
                required: true,
                email: true,
                emailcheck: true
            },
            txtReviewTitle: {
                required: true
            },
            txtReviewText: {
                required: true
            }
        },
        messages: {
            txtBookTitle: {
                required: "Please enter a book title",
                minlength: "Book title must be atleast 2 characters",
                maxlength: "Book title must be less than 25 characters"
            },
            txtUserName: {
                required: "Please enter a user name"
            },
            txtEmail: {
                required: "Please enter an email",
                emailcheck: "Please enter a valid email address"
            },
            txtReviewTitle: {
                requried: "Please enter a review title"
            },
            txtReviewText: {
                requried: "Please enter a review"
            }

        }
    });
    return form.valid();

}


