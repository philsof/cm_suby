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
      render :'static_pages/contact'
    end
  end
end