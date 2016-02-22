class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Your message has been sent to cmsuby@gmail.com'
      render :'static_pages/contact'
    else
      flash.now[:error] = 'Error: Could not send message. Try to send form again, or simply send a regular email to cmsuby@gmail.com'
      render :'static_pages/contact'
    end
  end
end