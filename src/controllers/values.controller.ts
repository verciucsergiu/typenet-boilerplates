import {
    Controller, HttpGet,
    ActionResult, Ok,
    HttpPost, Created,
    FromRoute, HttpPut,
    FromBody, NoContent,
    HttpDelete
} from '@typenet/core';

@Controller('api/values')
export class ValuesController {

    @HttpGet('')
    public get(): ActionResult {
        return new Ok([1, 2, 3]);
    }

    @HttpGet(':id')
    public getById(@FromRoute(':id') id: string): ActionResult {
        return new Ok(id);
    }

    @HttpPost('')
    public create(@FromBody() resource: any): ActionResult {
        return new Created(resource);
    }

    @HttpPut(':id')
    public update(@FromRoute(':id') id: string): ActionResult {
        return new NoContent(id);
    }

    @HttpDelete(':id')
    public delete(@FromRoute(':id') id: string): ActionResult {
        return new NoContent(id);
    }
}