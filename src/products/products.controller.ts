import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect, Req, Res
} from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from "./dto/update-product.dto";
import {Response, Request} from "express";
import { ProductService } from "./products.service";
import { Product } from "./shemas/product.shema";

@Controller('products')
export class ProductsController {
  constructor( private readonly productsService: ProductService) {
  }
  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(301).end('Poke')
  //   return 'getAll';
  // }
  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProduct: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProduct);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product>{
    return this.productsService.remove(id);
  }
  @Put(':id')
  update(@Body() updateProduct: UpdateProductDto, @Param('id') id: string): Promise<Product>{
    return this.productsService.update(id, updateProduct);
  }
}
