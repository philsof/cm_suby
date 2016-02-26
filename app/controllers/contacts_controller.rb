class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if request.xhr?
      if @contact.deliver
        render plain: "OK: Email sent."
      else
        render plain: "Error: email not sent.", status: 422
      end
    else
      if @contact.deliver
        flash.now[:notice] = 'Thank you! Your message has been sent to cmsuby@gmail.com. We will respond promptly!'
        render :'static_pages/contact'
      else
        flash.now[:notice] = 'Something went wrong, this email form is not working. Please send an email to cmsuby@gmail.com directly. Thank you!'
        render :'static_pages/contact'
      end
    end
  end
end