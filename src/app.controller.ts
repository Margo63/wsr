import {Body, Controller, Get, Post, Put, Query, Headers, Delete} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/getAll")
  getAll():string{
    return this.appService.getAll();
  }

  @Get("/checkPassword")
  checkPassword(@Query() params: any):any{
    return this.appService.checkPassword(params);
  }


  @Post("/postUser")
  postUser(@Body() body:any){
    return this.appService.postUser(body)
  }

  @Get("/getValidCode")
  getValidCode(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.getValidCode(params, token)
  }

  @Get("/sendValidCodeAgain")
  sendValidCodeAgain(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.sendValidCodeAgain(params, token)
  }

  @Get("/checkValidCode")
  checkValidCode(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.checkValidCode(params, token)
  }

  @Get("/changePassword")
  changePassword(@Query() params:any,  @Headers('token') token: string):any{
      return this.appService.changePassword(params, token)
  }

  @Get("/getBalance")
  getBalance(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.getBalance(params, token)
  }

  @Get("/getUUID")
  getUUID(@Body() body:any,  @Headers('token')token: string):any{
    return this.appService.getUUID(body, token)
  }

  @Get("/makePayment")
  makePayment(@Query() params:any,  @Headers('token')token: string, @Body() body:any):any{
    return this.appService.makePayment(params, token, body)
  }

  @Get("/getHistoryOfOperations")
  getHistoryOfOperations(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.getHistoryOfOperations(params, token)
  }

  @Post("/addMoney")
  addMoney(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.addMoney(params, token)
  }

  @Post("/postPackageState")
  postPackageState(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.postPackageState(params, token)
  }

  @Get("/getCharges")
  getCharges(@Query() params:any,  @Headers('token') token: string):any{
    return this.appService.getCharges(params, token)
  }

  @Post("/postFeedback")
  postFeedback(@Body() body:any,  @Headers('token')token: string, @Query() params:any,):any{
    return this.appService.postFeedback(body, token, params)
  }

  @Get("/getDeliverymen")
  getDeliverymen(@Headers('token') token: string):any{
    return this.appService.getDeliverymen( token)
  }

  @Post("/postMessage")
  postMessage(@Query() params:any,  @Headers('token') token: string, @Body() body:any,):any{
    return this.appService.postMessage(params, token, body)
  }

  @Get("/getUserInfo")
  getUserInfo( @Headers('token')token: string):any{
    return this.appService.getUserInfo( token)
  }

  @Get("/getAddList")
  getAddList( ):any{
    return this.appService.getAddList( )
  }

  @Get("/getUserAvatar")
  getUserAvatar( @Headers('token')token: string):any{
    return this.appService.getUserAvatar( token)
  }

  @Post("/postUserAvatar")
  postUserAvatar( @Headers('token')token: string,  @Body() body:any):any{
    return this.appService.postUserAvatar( token, body)
  }


  @Delete("/deletePackages")
  deletePackages( @Headers('token')token: string):any{
    return this.appService.deletePackages( token)
  }

  @Delete("/deleteBalance")
  deleteBalance( @Headers('token')token: string):any{
    return this.appService.deleteBalance( token)
  }

  @Delete("/clearUser")
  clearUser( @Headers('token')token: string):any{
    return this.appService.clearUser( token)
  }
}
